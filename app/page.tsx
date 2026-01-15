import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { WhyUseAptly } from "@/components/why-use-aptly"
import { Calculator } from "@/components/calculator"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8E4F3]">
      <Header />
      <Hero />
      <Features />
      {/* <HowItWorks /> */}
      {/* <Calculator /> */}
      <WhyUseAptly />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
