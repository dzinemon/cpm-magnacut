"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell, CheckCircle } from "lucide-react"

interface NotifyFormProps {
	isOpen: boolean
	onClose: () => void
}

export const NotifyForm = ({ isOpen, onClose }: NotifyFormProps) => {
	const [email, setEmail] = useState("")
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!email) return

		setIsLoading(true)
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000))
		setIsLoading(false)
		setIsSubmitted(true)
	}

	const handleClose = () => {
		onClose()
		// Reset form after animation completes
		setTimeout(() => {
			setEmail("")
			setIsSubmitted(false)
		}, 300)
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleClose}
						className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-4"
					>
						<div className="bg-brand-black border border-white/10 rounded-2xl p-8 relative">
							{/* Close Button */}
							<button
								onClick={handleClose}
								className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
							>
								<X className="w-6 h-6" />
							</button>

							<AnimatePresence mode="wait">
								{!isSubmitted ? (
									<motion.div
										key="form"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										{/* Header */}
										<div className="flex items-center gap-3 mb-6">
											<div className="w-12 h-12 bg-safety-orange/10 rounded-full flex items-center justify-center">
												<Bell className="w-6 h-6 text-safety-orange" />
											</div>
											<div>
												<h3 className="text-xl font-bold text-white">
													Get Priority Access
												</h3>
												<p className="text-white/50 text-sm">
													Batch 002 — Limited to 500 units
												</p>
											</div>
										</div>

										<p className="text-white/70 mb-6">
											Be the first to know when Batch 002 becomes available.
											Priority notification subscribers get early access before
											public release.
										</p>

										{/* Form */}
										<form onSubmit={handleSubmit} className="space-y-4">
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-mono text-white/50 mb-2"
												>
													Email Address
												</label>
												<input
													type="email"
													id="email"
													value={email}
													onChange={e => setEmail(e.target.value)}
													placeholder="you@example.com"
													required
													className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange/50 focus:ring-1 focus:ring-safety-orange/50 transition-colors"
												/>
											</div>

											<button
												type="submit"
												disabled={isLoading}
												className="w-full bg-safety-orange hover:bg-orange-600 disabled:bg-safety-orange/50 text-white px-6 py-4 font-bold tracking-wide uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
											>
												{isLoading ? (
													<>
														<span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
														Submitting...
													</>
												) : (
													"Notify Me"
												)}
											</button>
										</form>

										<p className="text-white/30 text-xs mt-4 text-center">
											We respect your privacy. No spam, ever.
										</p>
									</motion.div>
								) : (
									<motion.div
										key="success"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="text-center py-8"
									>
										<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
											<CheckCircle className="w-8 h-8 text-green-500" />
										</div>
										<h3 className="text-2xl font-bold text-white mb-2">
											You&apos;re on the list!
										</h3>
										<p className="text-white/70 mb-6">
											We&apos;ll notify you at{" "}
											<span className="text-white font-mono">{email}</span> as
											soon as Batch 002 is available.
										</p>
										<button
											onClick={handleClose}
											className="text-safety-orange hover:text-orange-400 font-mono text-sm uppercase tracking-wide transition-colors cursor-pointer"
										>
											Close
										</button>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}
