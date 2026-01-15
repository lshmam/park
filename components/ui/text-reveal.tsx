"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string
  highlightWord?: string
}

export const TextReveal: FC<TextRevealProps> = ({ text, highlightWord = "back", className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.5", "end 0.5"]
  })

  const words = text.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-screen max-w-4xl items-center justify-center bg-[#E8E4F3] px-[1rem]"
        }
      >
        <p
          className={
            "flex flex-wrap p-5 text-center text-2xl font-bold leading-tight text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white/20"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            const isHighlight = word.toLowerCase().replace(/[.,!?]/g, "") === highlightWord.toLowerCase()

            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlight={isHighlight}
              >
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
  isHighlight?: boolean
}

const Word: FC<WordProps> = ({ children, progress, range, isHighlight = false }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const underlineWidth = useTransform(progress, [0.8, 1], ["0%", "100%"])

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn(
          "relative text-black dark:text-white",
          isHighlight && "italic text-indigo-600"
        )}
      >
        {children}
        {isHighlight && (
          <motion.span
            style={{ width: underlineWidth }}
            className="absolute bottom-0 left-0 h-[2px] bg-indigo-600"
          />
        )}
      </motion.span>
    </span>
  )
}
