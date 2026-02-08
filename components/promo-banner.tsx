"use client"

import { useState } from "react"
import { X, Gift } from "lucide-react"

export function PromoBanner() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white">
            <div className="mx-auto max-w-7xl px-4 py-1.5">
                <div className="flex items-center justify-center gap-2 text-sm font-medium">
                    <Gift className="h-4 w-4 animate-pulse" />
                    <span>
                        🎉 <strong>Referral Program is now active!</strong> Get up to <strong>25% off</strong> on your first month
                    </span>
                </div>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Dismiss banner"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    )
}
