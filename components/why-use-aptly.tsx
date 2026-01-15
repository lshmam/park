"use client"

import { Clock, Wallet, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const cards = [
    {
        title: "Save Time",
        description: "Stop circling the block. Reserve a guaranteed spot in seconds and get straight to your destination without the stress.",
        icon: Clock,
        color: "bg-blue-50",
        textColor: "text-blue-900",
        borderColor: "border-blue-100",
    },
    {
        title: "Save Money",
        description: "Pay up to 50% less than traditional parking garages. No hidden fees, no surprise rates, and definitely no parking tickets.",
        icon: Wallet,
        color: "bg-green-50",
        textColor: "text-green-900",
        borderColor: "border-green-100",
    },
    {
        title: "Reduce Emissions",
        description: "30% of urban traffic is just people looking for parking. Book ahead to drive less, burn less fuel, and help clear the air.",
        icon: Leaf,
        color: "bg-emerald-50",
        textColor: "text-emerald-900",
        borderColor: "border-emerald-100",
    },
]

export function WhyUseAptly() {
    return (
        <section className="px-4 py-24 md:py-32">
            <div className="mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Why use Aptly?</h2>
                    <p className="mt-4 text-lg text-slate-600">The smarter way to park in the city</p>
                </div>

                <div className="space-y-8">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Card({
    title,
    description,
    icon: Icon,
    color,
    textColor,
    borderColor,
    index
}: {
    title: string
    description: string
    icon: any
    color: string
    textColor: string
    borderColor: string
    index: number
}) {
    return (
        <div
            className={cn(
                "sticky mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl border p-8 shadow-sm transition-all md:flex-row md:items-center md:p-12",
                color,
                borderColor
            )}
            style={{
                top: `${140 + index * 20}px`,
                marginBottom: `${(cards.length - index - 1) * 20}px` // Add margin to separate stacked cards visually at the end
            }}
        >
            <div className={cn("flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm", textColor)}>
                <Icon className="h-8 w-8" />
            </div>
            <div>
                <h3 className={cn("text-2xl font-bold", textColor)}>{title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{description}</p>
            </div>
        </div>
    )
}
