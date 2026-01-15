"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function Calculator() {
  const [hoursPerDay, setHoursPerDay] = useState([8])
  const [daysPerWeek, setDaysPerWeek] = useState([5])
  const [hourlyRate, setHourlyRate] = useState([12])

  const weeklyEarnings = hoursPerDay[0] * daysPerWeek[0] * hourlyRate[0]
  const monthlyEarnings = weeklyEarnings * 4
  const yearlyEarnings = monthlyEarnings * 12

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">See your potential</h2>
            <p className="mt-2 text-slate-600">Calculate how much you could earn by listing your parking space</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">Hours available per day</label>
                  <span className="rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                    {hoursPerDay[0]} hours
                  </span>
                </div>
                <Slider
                  value={hoursPerDay}
                  onValueChange={setHoursPerDay}
                  max={24}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">Days available per week</label>
                  <span className="rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                    {daysPerWeek[0]} days
                  </span>
                </div>
                <Slider
                  value={daysPerWeek}
                  onValueChange={setDaysPerWeek}
                  max={7}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">Hourly rate</label>
                  <span className="rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                    ${hourlyRate[0]}/hour
                  </span>
                </div>
                <Slider value={hourlyRate} onValueChange={setHourlyRate} max={30} min={3} step={1} className="w-full" />
              </div>

              <Button className="w-full bg-indigo-600 py-6 hover:bg-indigo-700 text-white">Start Earning</Button>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-indigo-600">${yearlyEarnings.toLocaleString()}</span>
                  <span className="text-slate-500">/year</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Weekly earnings</span>
                    <span className="font-semibold text-slate-900">${weeklyEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Monthly earnings</span>
                    <span className="font-semibold text-slate-900">${monthlyEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Yearly earnings</span>
                    <span className="font-semibold text-slate-900">${yearlyEarnings.toLocaleString()}</span>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-slate-500">
                  *Estimates based on average booking rates in your area
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
