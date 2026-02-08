"use client"

import { Search, Calendar, Car } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const steps = [
  {
    id: 1,
    title: "Search Nearby",
    description: "Enter your destination to find secure parking spots hidden from the public eye. Filter by price, distance, and amenities.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Book Instantly",
    description: "Reserve your spot in seconds. No more circling the block or worrying about availability. Your space is guaranteed.",
    icon: Calendar,
    color: "bg-indigo-500",
  },
  {
    id: 3,
    title: "Park & Relax",
    description: "Navigate directly to your spot with in-app directions. Extend your booking anytime if you need to stay longer.",
    icon: Car,
    color: "bg-purple-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">How it works</h2>
          <p className="mt-4 text-lg text-slate-600">Three simple steps to stress-free parking.</p>
        </div>

        <div className="mx-auto max-w-4xl space-y-32">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-12 md:items-center",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Visual Side */}
      <div className="flex-1 flex justify-center">
        <div className={cn(
          "relative flex h-64 w-64 items-center justify-center rounded-3xl shadow-xl transition-transform hover:scale-105 md:h-80 md:w-80",
          step.color
        )}>
          <step.icon className="h-32 w-32 text-white/90" />
          <div className="absolute -bottom-6 -right-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white shadow-lg border-4 border-slate-50">
            {step.id}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={cn(
        "flex-1 space-y-4",
        isEven ? "text-left md:pr-12" : "text-left md:pl-12 md:text-right"
      )}>
        <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">{step.title}</h3>
        <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{step.description}</p>
      </div>
    </motion.div>
  )
}
