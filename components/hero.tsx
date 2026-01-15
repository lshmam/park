import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            AirBnb for <span className="text-indigo-600">Parking</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">Find and rent parking spots from your neighbors</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="gap-2 bg-indigo-600 px-6 py-6 text-base hover:bg-indigo-700 text-white">
              Join the Waitlist <ArrowRight className="h-4 w-4" />
            </Button>
            {/* <Button variant="outline" className="gap-2 border-slate-300 bg-white/80 px-6 py-6 text-base text-slate-700">
              Learn More
            </Button> */}
          </div>
        </div>

        <div className="relative mt-16 flex items-center justify-center">
          <div className="relative">
            {/* Phone mockup */}
            <div className="relative z-10 mx-auto w-[280px] rounded-[3rem] border-[8px] border-slate-800 bg-slate-800 p-2 shadow-2xl">
              <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-slate-800" />
              <div className="h-[500px] overflow-hidden rounded-[2.5rem] bg-white">
                <div className="bg-indigo-600 px-4 py-6 text-white">
                  <p className="text-sm opacity-80">Welcome back</p>
                  <p className="text-2xl font-bold">$847</p>
                  <p className="text-sm opacity-80">Total Earnings</p>
                </div>
                <div className="p-4">
                  <div className="mb-4 rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-900">Active Listings</p>
                    <p className="text-2xl font-bold text-indigo-600">3</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                      <div className="h-10 w-10 rounded-lg bg-indigo-100" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Downtown Spot</p>
                        <p className="text-xs text-slate-500">$15/hour</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                      <div className="h-10 w-10 rounded-lg bg-indigo-100" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Home Driveway</p>
                        <p className="text-xs text-slate-500">$8/hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-12 z-20 rounded-2xl bg-white p-4 shadow-lg md:-left-24">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">New Booking</p>
                  <p className="text-lg font-bold text-slate-900">+$45</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-32 z-20 rounded-2xl bg-white p-4 shadow-lg md:-right-28">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Spots Near You</p>
                  <p className="text-lg font-bold text-slate-900">24</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-24 z-20 rounded-2xl bg-white p-4 shadow-lg md:-left-32">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Avg. Book Time</p>
                  <p className="text-lg font-bold text-slate-900">2 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large text section */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <p className="text-balance text-3xl font-bold leading-tight text-slate-900 md:text-5xl md:leading-tight">
            The average driver spends 7–12 minutes per trip searching for parking. That’s 40+ hours a year for frequent drivers. <br />
            <span className="text-indigo-600">Aptly is here to give you your time back.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
