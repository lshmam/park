"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 z-50 w-full transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-slate-900">aptly</span>
            </Link>

            <div className="rounded-full border border-white/20 bg-white/10 p-1.5 px-2 backdrop-blur-md">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </header>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
