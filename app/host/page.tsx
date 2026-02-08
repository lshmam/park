"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, DollarSign, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function HostPage() {
    return (
        <main className="min-h-screen bg-[#E8E4F3]">
            <Header />

            {/* Hero Section */}
            <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        Turn your parking spot into <span className="text-indigo-600">income</span>.
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
                        Join thousands of hosts earning passive income by listing their unused parking spaces on Aptly. Secure, flexible, and guaranteed payments.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="h-12 w-full rounded-full bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 sm:w-auto">
                            List Your Spot
                        </Button>
                        <Link href="/how-it-works" className="text-sm font-semibold text-slate-600 hover:text-indigo-600">
                            Learn how it works <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="px-4 py-20 bg-white">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-12 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <DollarSign className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Earn Effortlessly</h3>
                            <p className="mt-2 text-slate-600">
                                Set your own price and schedule. Get paid automatically every month directly to your bank account.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">$1M Protection</h3>
                            <p className="mt-2 text-slate-600">
                                Rest easy knowing you're covered. Our Host Guarantee protects you against property damage and liability.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Total Control</h3>
                            <p className="mt-2 text-slate-600">
                                Rent out your spot for hours, days, or months. Use our calendar tools to block dates whenever you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="px-4 py-24">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Simple steps to start earning</h2>
                    <div className="space-y-12">
                        {[
                            { title: "List your space for free", desc: "Share a few details about your spot—location, size, and availability. It takes less than 5 minutes." },
                            { title: "Decide how you want to host", desc: "Choose your own schedule, prices, and requirements for guests. We're here to help along the way." },
                            { title: "Welcome your first guest", desc: "Once your listing is live, qualified drivers can reach out. You can message them with any questions before their stay." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex-none">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                                        {i + 1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                    <p className="mt-2 text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
