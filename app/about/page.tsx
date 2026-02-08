import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Glow from "@/components/ui/glow"
import { Users, Target, Lightbulb, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us - Aptly",
    description: "Learn about Aptly's mission to revolutionize urban parking and make finding parking stress-free for everyone.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#E8E4F3]">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="absolute inset-0 z-0">
                    <Glow
                        variant="above"
                        className="animate-none opacity-100 [&>div]:from-indigo-600/40 [&>div]:to-indigo-600/0 [&>div]:opacity-100"
                    />
                </div>
                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-balance text-4xl font-medium tracking-[-1px] text-white md:text-6xl md:leading-tight font-sans">
                            About <span className="text-indigo-800">Aptly</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/90 md:text-xl leading-relaxed">
                            We're on a mission to transform the way people find and share parking spaces,
                            making urban mobility simpler, smarter, and more sustainable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl text-center mb-8">
                            Our Story
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Aptly was born from a simple frustration that every driver knows too well:
                                the endless circling, the wasted time, the stress of finding a parking spot
                                in busy urban areas.
                            </p>
                            <p>
                                We realized that while millions of private driveways and garages sit empty
                                during the day, drivers are spending an average of 7-12 minutes per trip
                                just searching for parking. That's over 40 hours a year for frequent drivers
                                – time that could be spent with family, at work, or doing what you love.
                            </p>
                            <p>
                                So we created Aptly: a platform that connects drivers with homeowners who
                                have parking spaces to share. It's the Airbnb for parking – simple,
                                affordable, and community-driven.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl text-center mb-16">
                        Our Values
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <ValueCard
                            icon={<Target className="h-8 w-8 text-indigo-600" />}
                            title="Simplicity"
                            description="We believe finding parking should be as easy as tapping a button. No complexity, no hassle."
                        />
                        <ValueCard
                            icon={<Users className="h-8 w-8 text-indigo-600" />}
                            title="Community"
                            description="We're building connections between neighbors, creating value for both drivers and homeowners."
                        />
                        <ValueCard
                            icon={<Lightbulb className="h-8 w-8 text-indigo-600" />}
                            title="Innovation"
                            description="We're constantly improving our platform to make parking smarter and more efficient."
                        />
                        <ValueCard
                            icon={<Heart className="h-8 w-8 text-indigo-600" />}
                            title="Sustainability"
                            description="By reducing time spent searching for parking, we're helping reduce emissions and traffic."
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-8">
                            Our Mission
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            To give people their time back by eliminating the stress of parking.
                            We envision a world where every driver can find a guaranteed spot,
                            and every homeowner can turn their unused space into extra income.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function ValueCard({
    icon,
    title,
    description
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-indigo-50 p-3">
                {icon}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    )
}
