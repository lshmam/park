"use client"

import type React from "react"
import { Shield, Smartphone, Calendar, CreditCard, MapPin, Users } from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"

const features = [
  {
    Icon: MapPin,
    name: "Find Nearby",
    description: "Discover available parking spots in your area instantly with real-time availability.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Calendar,
    name: "Book Anytime",
    description: "Reserve spots by the hour, day, or month with flexible scheduling.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CreditCard,
    name: "Easy Payments",
    description: "Secure, cashless transactions every time with instant confirmations.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Shield,
    name: "Fully Insured",
    description: "Every booking protected with comprehensive coverage for peace of mind.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Smartphone,
    name: "Smart Access",
    description: "Unlock gates and garages from your phone with seamless digital access.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Everything you need</h2>
            <p className="mt-2 text-slate-600">Parking made simple for drivers and hosts alike</p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          <div className="mt-12 text-center">
            <h3 className="text-balance text-2xl font-bold text-slate-900 md:text-3xl">
              Turn your empty driveway into
              <br />
              passive income
            </h3>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </Button>
              {/* <Button variant="outline" className="gap-2 border-slate-300 text-slate-700 bg-transparent">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
