"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Smartphone, Calendar, MapPin, Users, MessageCircle } from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import Glow from "@/components/ui/glow"
import Image from "next/image"

// Carousel component for parking space images
function ParkingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "/images/parking-1.png",
    "/images/parking-2.png",
    "/images/parking-3.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={src}
            alt={`Parking space ${index + 1}`}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-slate-900">
            ${15 + index * 5}.00/hour
          </div>
        </div>
      ))}
    </div>
  )
}

const features = [
  {
    name: "Instantly find parking",
    description: "Reserve verified spots at your destination in advance with digital payments, avoid tickets and damages, and skip the hassle of large parking lots & garages.",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        <Glow variant="center" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      </>
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Flexible spot management",
    description: "Enjoy secure cashless payments and payouts, customizable reservations, and full control over your spot. Set your own rates, rules, and availability.",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        <Glow variant="center" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
      </>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Community-driven",
    description: "Access affordable eco-friendly parking, leave and read trusted reviews, and contribute to a sustainable urban environment.",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        <Glow variant="center" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20" />
      </>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    name: "List your space",
    description: "Effortlessly turn your unused space into passive income in under 5 minutes with Aptly. Your privacy is protected - addresses are shared only after confirmed reservations.",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        <Glow variant="center" />
        <div className="absolute inset-0 overflow-hidden">
          <ParkingCarousel />
        </div>
      </>
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
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

          <BentoGrid className="lg:grid-rows-2">
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
