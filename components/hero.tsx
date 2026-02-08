"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/ScrollReveal"
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react"
import Image from "next/image"
import Glow from "@/components/ui/glow"
import { ShinyButton } from "@/components/ui/shiny-button"
import { WaitlistModal } from "@/components/waitlist-modal"

export function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Glow
            variant="above"
            className="animate-none opacity-100 [&>div]:from-indigo-600/40 [&>div]:to-indigo-600/0 [&>div]:opacity-100"
          />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-medium tracking-[-1px] text-white md:text-[80px] md:leading-[81.6px] font-sans">
              The Smarter Way to <span className="text-indigo-800">Park</span>
            </h1>
            <p className="mt-4 text-lg text-white md:text-xl">Instant access to private driveways and garages at a fraction of the cost</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShinyButton
                className="group relative gap-2 overflow-hidden rounded-xl border-none bg-gradient-to-b from-indigo-500 to-indigo-700 px-8 py-4 text-base font-semibold text-white shadow-[0px_1px_4px_0px_rgba(255,255,255,0.3)_inset,0px_-2px_4px_0px_rgba(0,0,0,0.2)_inset,0px_4px_20px_0px_rgba(67,56,202,0.5)] transition-all hover:from-indigo-400 hover:to-indigo-600"
                onClick={() => setIsWaitlistOpen(true)}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Join the Waitlist <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </ShinyButton>
            </div>
          </div>

          <div className="relative mt-16 flex items-center justify-center [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
            <div className="relative">
              {/* Phone mockup */}
              {/* Phone mockup */}
              <div className="relative z-10 mx-auto w-[280px]">
                <Image
                  src="/images/park-mockup-1.png"
                  alt="App Mockup"
                  width={280}
                  height={580}
                  className="rounded-[3rem] shadow-2xl"
                  priority
                />
              </div>

              {/* Secondary mockups */}
              <div className="absolute -left-12 top-12 z-0 w-[240px] opacity-50 lg:-left-20">
                <Image
                  src="/images/park-mockup-2.png"
                  alt="App Mockup Left"
                  width={240}
                  height={500}
                  className="rounded-[3rem] shadow-xl transition-all duration-500 hover:opacity-100"
                />
              </div>
              <div className="absolute -right-12 top-12 z-0 w-[240px] opacity-50 lg:-right-20">
                <Image
                  src="/images/park-mockup-3.png"
                  alt="App Mockup Right"
                  width={240}
                  height={500}
                  className="rounded-[3rem] shadow-xl transition-all duration-500 hover:opacity-100"
                />
              </div>

            </div>
          </div>

          {/* Large text section with reveal animation */}
          <div className="mx-auto mt-24 max-w-4xl py-24">
            <ScrollReveal
              enableBlur={false}
              baseRotation={0}
              baseOpacity={0.2}
              containerClassName=""
              textClassName="text-center text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl lg:leading-tight"
            >
              The average driver spends 7–12 minutes per trip searching for parking. That's 40+ hours a year for frequent drivers. Aptly is here to give you your time back.
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  )
}
