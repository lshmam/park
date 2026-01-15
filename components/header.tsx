"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#E8E4F3]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-slate-900">aptly</span>
          </Link>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Join the Waitlist</Button>
        </div>
      </div>
    </header>
  )
}
