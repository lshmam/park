"use client"

import { Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Aptly available on Android?",
    answer:
      "Yes! Aptly is available on both iOS and Android platforms. You can download it from the App Store and Google Play Store.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and Apple Pay/Google Pay for secure transactions.",
  },
  {
    question: "How does the reservation process work?",
    answer:
      "Search for a spot, select your time, and confirm your booking. Instantly receive parking instructions and access details directly in the app.",
  },
  {
    question: "Can I cancel my reservation?",
    answer:
      "Yes, cancellations made more than 24 hours in advance receive a full refund. Cancellations within 24 hours are subject to the host's policy.",
  },
  {
    question: "How does Aptly ensure the legitimacy of parking spots?",
    answer:
      "Every host is verified, and we review all listing details before they go live. Community reviews help maintain quality and trust.",
  },
  {
    question: "Are there any fees for using Aptly?",
    answer:
      "We charge a small service fee on each booking to cover insurance, payment processing, and 24/7 customer support.",
  },
  {
    question: "Is there a rating system for users?",
    answer:
      "Yes, both drivers and hosts can rate each other after every booking to ensure a safe and reliable community.",
  },
  {
    question: "Does Aptly offer insurance or protection for parking?",
    answer:
      "Absolutely. Every booking includes comprehensive liability coverage for property damage and vehicle protection.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-black px-8 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-[#FFF200]">
              Ask Aptly
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Frequently asked questions.
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-2 transition-colors hover:bg-white/10"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:no-underline [&[data-state=open]>svg]:rotate-45 [&>svg:last-child]:hidden">
                  <span className="flex-1 text-xl">{faq.question}</span>
                  <Plus className="h-6 w-6 shrink-0 text-white transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-lg text-slate-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
