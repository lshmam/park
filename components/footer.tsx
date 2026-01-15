import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3 md:p-12">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-indigo-600">aptly</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              The smarter way to find and rent parking spaces from your neighbors.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              hello@aptly.com
              <br />© 2026 Aptly. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-sm text-slate-500 text-center">Coming soon to iOS and Android</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="mb-2 text-xs font-medium text-slate-400">Be the first to know</p>
            <h3 className="mb-4 text-xl font-bold text-white">Get early access to Aptly</h3>
            <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">Join the Waitlist</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
