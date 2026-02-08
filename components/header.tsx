"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"
import { PromoBanner } from "@/components/promo-banner"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show on scroll up or at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Hide on scroll down (if not at top)
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-transform duration-300 pointer-events-none",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="w-full pointer-events-auto">
          <PromoBanner />
        </div>

        <header className="mt-4 w-[90%] max-w-4xl rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-sm pointer-events-auto transition-all duration-300">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-base font-bold text-white">A</span>
                </div>
                <span className="text-lg font-bold text-slate-900">aptly</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                {/* <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                  About
                </Link> */}
                <Link href="/how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                  How it Works
                </Link>
                <Link href="/host" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                  Become a Host
                </Link>
              </nav>

              <div className="rounded-full border border-white/20 bg-white/10 p-1 px-1.5 backdrop-blur-md">
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 h-8 text-sm"
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
