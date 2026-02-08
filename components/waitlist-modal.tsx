"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, Loader2 } from "lucide-react"

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setErrorMessage("")

        try {
            const response = await fetch("https://formspree.io/f/meelojed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            if (response.ok) {
                setStatus("success")
                setEmail("")
            } else {
                setStatus("error")
                setErrorMessage("Something went wrong. Please try again.")
            }
        } catch {
            setStatus("error")
            setErrorMessage("Network error. Please try again.")
        }
    }

    const handleClose = () => {
        setStatus("idle")
        setEmail("")
        setErrorMessage("")
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl bg-white p-8 shadow-2xl">
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                {status === "success" ? (
                    <div className="text-center py-8">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                        <p className="text-slate-600 mb-6">
                            We'll notify you when Aptly launches. Get ready to park smarter!
                        </p>
                        <Button
                            onClick={handleClose}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                        >
                            Done
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-6">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
                                <span className="text-xl font-bold text-white">A</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Waitlist</h3>
                            <p className="text-slate-600">
                                Be the first to know when Aptly launches and get exclusive early access.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-sm text-red-600">{errorMessage}</p>
                            )}

                            <Button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all disabled:opacity-70"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    "Get Early Access"
                                )}
                            </Button>
                        </form>

                        <p className="mt-4 text-center text-xs text-slate-400">
                            We respect your privacy. No spam, ever.
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}
