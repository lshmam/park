"use client"

import { ReactNode, useRef, createContext, useContext, useState, useEffect } from "react"
import { useScroll, useTransform, MotionValue, useMotionValueEvent } from "motion/react"

interface TextRevealContextValue {
    scrollYProgress: MotionValue<number>
    totalTokens: number
}

const TextRevealContext = createContext<TextRevealContextValue | null>(null)

interface TextRevealProps {
    body: string
    className?: string
    children: (tokens: string[]) => ReactNode
}

interface TextRevealTokenProps {
    index: number
    children: (isActive: boolean) => ReactNode
}

export function TextReveal({ body, className, children }: TextRevealProps) {
    const targetRef = useRef<HTMLDivElement>(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const [scrollLocked, setScrollLocked] = useState(false)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    // Split text into tokens (words with spaces/punctuation)
    const tokens = body.split(/(\s+)/)

    // Monitor scroll progress to lock/unlock scrolling
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Animation is active when we're between 20% and 95% of the scroll progress
        const isInAnimation = latest > 0.2 && latest < 0.95
        setIsAnimating(isInAnimation)

        // Lock scroll when animation starts, unlock when it completes
        if (latest > 0.25 && latest < 0.9) {
            setScrollLocked(true)
        } else if (latest >= 0.9) {
            setScrollLocked(false)
        }
    })

    // Prevent body scroll when locked
    useEffect(() => {
        if (scrollLocked) {
            const scrollY = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
        } else {
            const scrollY = document.body.style.top
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1)
            }
        }

        return () => {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
        }
    }, [scrollLocked])

    return (
        <TextRevealContext.Provider value={{ scrollYProgress, totalTokens: tokens.length }}>
            <div ref={targetRef} className={className} data-text-reveal>
                {children(tokens)}
            </div>
        </TextRevealContext.Provider>
    )
}

function TextRevealToken({ index, children }: TextRevealTokenProps) {
    const context = useContext(TextRevealContext)
    const [isActive, setIsActive] = useState(false)

    if (!context) {
        throw new Error("TextReveal.Token must be used within TextReveal")
    }

    const { scrollYProgress, totalTokens } = context

    // Calculate when this token should be active
    const start = index / totalTokens
    const end = (index + 1) / totalTokens

    // Use useTransform to get opacity based on scroll progress
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

    // Subscribe to opacity changes to update isActive state
    useEffect(() => {
        const unsubscribe = opacity.on("change", (latest) => {
            setIsActive(latest > 0.5)
        })

        return () => unsubscribe()
    }, [opacity])

    return <>{children(isActive)}</>
}

TextReveal.Token = TextRevealToken
