"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CTA() {
    return (
        <section className="px-4 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-100 p-8 md:p-12">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        {/* Left side - Text and CTA */}
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
                                Your new passive income stream with Aptly.
                            </h2>
                            <p className="mt-4 max-w-md text-lg text-slate-600">
                                Aptly is currently in beta. Download now to be among the first to experience the platform and
                                provide valuable insights.
                            </p>
                            <Button className="mt-6 gap-2 bg-yellow-400 px-6 py-6 text-base font-semibold text-slate-900 hover:bg-yellow-500">
                                Download on the App Store
                                <Download className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Right side - Phone mockups */}
                        <div className="relative flex justify-center md:justify-end">
                            {/* First phone - Main */}
                            <div className="relative z-20 w-[240px] rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-800 p-2 shadow-2xl md:w-[280px]">
                                <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 rounded-b-xl bg-slate-800" />
                                <div className="h-[480px] overflow-hidden rounded-[2rem] bg-white md:h-[560px]">
                                    {/* Phone content - Parking spot listing */}
                                    <div className="relative h-full bg-slate-50">
                                        {/* Header */}
                                        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                            <span className="text-sm font-medium">Back</span>
                                        </div>

                                        {/* Image placeholder */}
                                        <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500" />

                                        {/* Content */}
                                        <div className="p-4">
                                            <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900">
                                                $2,200/mo
                                            </div>
                                            <div className="mb-2 flex items-center gap-1 text-sm text-slate-600">
                                                <span>★</span>
                                                <span className="font-semibold text-slate-900">4.70</span>
                                                <span>(4 reviews)</span>
                                            </div>
                                            <h3 className="mb-1 text-lg font-bold text-slate-900">Excelsior, MN</h3>
                                            <p className="mb-4 text-2xl font-bold text-slate-900">$3.00 / hour</p>
                                            <div className="text-sm text-slate-600">10:00 AM - 2:00 PM</div>
                                            <Button className="mt-4 w-full bg-yellow-400 py-6 font-semibold text-slate-900 hover:bg-yellow-500">
                                                🅿️ Park now
                                            </Button>
                                            <div className="mt-2 text-center text-xs text-slate-500">📍 Now listing • 🚗 4 spots left</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second phone - Background */}
                            <div className="absolute -right-4 top-12 z-10 w-[200px] rotate-6 rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-800 p-2 opacity-60 shadow-xl md:w-[240px]">
                                <div className="h-[400px] overflow-hidden rounded-[2rem] bg-slate-900 md:h-[480px]">
                                    <div className="h-full bg-gradient-to-br from-indigo-900 to-slate-900 p-4">
                                        <div className="space-y-3 pt-8">
                                            <div className="h-12 rounded-lg bg-white/10" />
                                            <div className="h-12 rounded-lg bg-white/10" />
                                            <div className="h-12 rounded-lg bg-white/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
