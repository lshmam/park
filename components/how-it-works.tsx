"use client"

import { Search, MapPin, Car, Calendar, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1",
    title: "Find a spot",
    description: "Search for available parking spots near your destination with real-time availability.",
    visual: (
      <div className="relative h-48 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 text-amber-500" />
            <span className="text-sm text-slate-700">Enter your location...</span>
          </div>
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-amber-200" />
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
            <MapPin className="h-4 w-4 text-indigo-600" />
            <span className="text-sm text-slate-700">24 spots nearby</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "2",
    title: "Book instantly",
    description: "Reserve your spot with flexible hourly, daily, or monthly rates.",
    visual: (
      <div className="relative h-48 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
              <Calendar className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-xs text-slate-500">Date</p>
                <p className="text-sm font-medium text-slate-900">Jan 15</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
              <Clock className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-xs text-slate-500">Time</p>
                <p className="text-sm font-medium text-slate-900">2 hours</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-indigo-600" />
              <span className="text-sm font-medium text-slate-900">Total</span>
            </div>
            <span className="text-lg font-bold text-indigo-600">$30</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "3",
    title: "Park with ease",
    description: "Get directions to your spot and access gates directly from the app.",
    visual: (
      <div className="relative h-48 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6">
        <div className="space-y-3">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <Car className="h-4 w-4 text-purple-500" />
              <span className="text-xs font-medium text-slate-500">Your parking spot</span>
            </div>
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-purple-600">Downtown Driveway</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">123 Main St • 0.2 mi away</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-sm">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Get Directions</span>
          </div>
        </div>
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm text-slate-500">Easy as one, two, three.</p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">How it works</h2>
            </div>
            <Button className="hidden gap-2 bg-indigo-600 hover:bg-indigo-700 text-white md:flex">
              Join Waitlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                {step.visual}
                <div className="mt-4">
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-slate-900">{step.number}</span>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
              Join Waitlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
