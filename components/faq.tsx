"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Aptly, and how does it work?",
    answer:
      "Aptly is a peer-to-peer parking marketplace that connects drivers looking for parking with hosts who have available spaces. Simply search for a spot near your destination, book it through our app, and park with ease. Hosts can list their driveways, garages, or other spaces to earn extra income.",
  },
  {
    question: "How much does it cost to use Aptly?",
    answer:
      "Pricing varies based on location, time, and the type of parking space. Aptly is typically 20-50% cheaper than traditional parking garages. We charge a small service fee to facilitate secure transactions and provide insurance coverage.",
  },
  {
    question: "Is my vehicle insured while parked?",
    answer:
      "Yes! Every booking on Aptly includes comprehensive insurance coverage for both the vehicle and the property. Our Host Protection Insurance covers up to $1 million in liability, so you can park with peace of mind.",
  },
  {
    question: "How do I access the parking space?",
    answer:
      "Many hosts provide smart access through our app, allowing you to open gates or garage doors directly from your phone. For other spaces, hosts will provide specific instructions, which could include codes, keys in lockboxes, or meeting in person.",
  },
  {
    question: "Can I book parking for extended periods?",
    answer:
      "Aptly supports hourly, daily, weekly, and monthly bookings. Long-term bookings often come with significant discounts. This is perfect for commuters, travelers, or anyone needing reliable recurring parking.",
  },
  {
    question: "How do I become a host on Aptly?",
    answer:
      "Signing up as a host is free and takes just a few minutes. Simply create an account, add your parking space with photos and availability, set your price, and start earning. We handle payments, insurance, and customer support.",
  },
  {
    question: "What happens if I need to cancel my booking?",
    answer:
      "We understand plans change. Cancellations made more than 24 hours before your booking start time receive a full refund. Cancellations within 24 hours may be subject to a partial refund based on the host's cancellation policy.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-100">
                <AccordionTrigger className="text-left text-slate-900 hover:text-indigo-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
