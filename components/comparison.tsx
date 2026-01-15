import { Check, X } from "lucide-react"

const comparisons = [
  { feature: "Hourly booking", aptly: true, garage: true, street: false },
  { feature: "Monthly rates", aptly: true, garage: true, street: false },
  { feature: "Guaranteed spot", aptly: true, garage: true, street: false },
  { feature: "Real-time availability", aptly: true, garage: false, street: false },
  { feature: "Affordable pricing", aptly: true, garage: false, street: true },
  { feature: "Covered parking", aptly: "Varies", garage: true, street: false },
  { feature: "Mobile access", aptly: true, garage: false, street: false },
  { feature: "Insurance included", aptly: true, garage: "Varies", street: false },
]

export function Comparison() {
  return (
    <section id="pricing" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">The smarter way to park</h2>
            <p className="mt-2 text-slate-600">See how Aptly compares to traditional parking options</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-4 text-left text-sm font-medium text-slate-500">Features</th>
                  <th className="py-4 text-center">
                    <div className="inline-flex flex-col items-center rounded-xl bg-indigo-600 px-6 py-3 text-white">
                      <span className="text-lg font-bold">aptly</span>
                    </div>
                  </th>
                  <th className="py-4 text-center text-sm font-medium text-slate-500">Parking Garage</th>
                  <th className="py-4 text-center text-sm font-medium text-slate-500">Street Parking</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-t border-slate-100">
                    <td className="py-4 text-sm text-slate-700">{row.feature}</td>
                    <td className="py-4 text-center">
                      <CellContent value={row.aptly} highlight />
                    </td>
                    <td className="py-4 text-center">
                      <CellContent value={row.garage} />
                    </td>
                    <td className="py-4 text-center">
                      <CellContent value={row.street} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function CellContent({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm text-slate-500">{value}</span>
  }

  if (value) {
    return (
      <div
        className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full ${highlight ? "bg-indigo-100" : "bg-green-100"}`}
      >
        <Check className={`h-4 w-4 ${highlight ? "text-indigo-600" : "text-green-600"}`} />
      </div>
    )
  }

  return (
    <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
      <X className="h-4 w-4 text-slate-400" />
    </div>
  )
}
