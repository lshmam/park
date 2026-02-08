"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Calendar, Car, CreditCard } from "lucide-react"

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-[#E8E4F3]">
            <Header />

            <section className="px-4 pt-32 pb-16 md:pt-40 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">How Aptly Works</h1>
                <p className="mt-4 text-xl text-slate-600">Parking made simple, from start to finish.</p>
            </section>

            <section className="px-4 py-12">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* For Drivers */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 mb-6">
                                For Drivers
                            </span>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Find the perfect spot</h2>

                            <div className="space-y-8">
                                <Step
                                    icon={Search}
                                    title="Search"
                                    desc="Enter your destination and dates. Browse hundreds of local spots hidden from the public."
                                />
                                <Step
                                    icon={CreditCard}
                                    title="Book & Pay"
                                    desc="Reserve your spot instantly in the app. Secure payment means no cash or meters."
                                />
                                <Step
                                    icon={Car}
                                    title="Park"
                                    desc="Follow the in-app directions to your spot. Extend your session anytime from your phone."
                                />
                            </div>
                        </div>

                        {/* For Hosts */}
                        <div className="rounded-3xl bg-slate-900 p-8 shadow-sm text-white">
                            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white mb-6">
                                For Hosts
                            </span>
                            <h2 className="text-2xl font-bold text-white mb-8">Monetize your space</h2>

                            <div className="space-y-8">
                                <Step
                                    icon={Calendar}
                                    title="List"
                                    desc="Describe your spot, add photos, and set your availability. It's free to list."
                                    darkTheme
                                />
                                <Step
                                    icon={Search}
                                    title="Approve"
                                    desc="Accept booking requests or set Instant Book. You're always in control of who parks."
                                    darkTheme
                                />
                                <Step
                                    icon={CreditCard}
                                    title="Earn"
                                    desc="Get paid automatically. Track your earnings and manage bookings in one place."
                                    darkTheme
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function Step({ icon: Icon, title, desc, darkTheme }: { icon: any, title: string, desc: string, darkTheme?: boolean }) {
    return (
        <div className="flex gap-4">
            <div className={`flex-none flex h-12 w-12 items-center justify-center rounded-2xl ${darkTheme ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}`}>
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h3 className={`font-bold ${darkTheme ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                <p className={`mt-1 text-sm ${darkTheme ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
            </div>
        </div>
    )
}
