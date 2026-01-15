"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Bell } from "lucide-react"
import { NotifyForm } from "@/components/NotifyForm"

export const ProductHero = () => {
	const [isNotifyOpen, setIsNotifyOpen] = useState(false)
	return (
		<section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-brand-black text-white pt-20 pb-20">
			{/* Background Texture */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gunmetal/20 to-brand-black pointer-events-none" />

			{/* Spotlight gradient for product highlight */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,_rgba(255,102,0,0.08)_0%,_transparent_50%)] pointer-events-none" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_65%_45%,_rgba(255,255,255,0.03)_0%,_transparent_40%)] pointer-events-none" />

			{/* Dark vignette edges */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,_transparent_40%,_rgba(0,0,0,0.6)_100%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
				{/* Left Side: Info */}
				<div className="flex flex-col gap-6 order-2 lg:order-1">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-6xl md:text-8xl font-condensed font-bold tracking-tighter uppercase leading-none">
							The <br /> 

							<div>
								{["V", "a", "n", "g", "u", "a", "r", "d"].map((char, index) => (
									<motion.div
										key={index}
										initial={{
											// color: "#9CA3AF",
											y: 30,
											opacity: 0,
										}}
										animate={{
											// color: "#6B7280",
											y: 0,
											opacity: 1,
										}}
										transition={{ duration: 0.3, delay: index * 0.1 }}
										className="inline-block"
									>
										{char}
									</motion.div>
								))}
							</div>

							<div>
								{["M", "0", "1"].map((char, index) => {
									

									return (
										<motion.div
											key={index}
											initial={{
												color: "#9CA3AF",
												y: 10,
												opacity: 0,
											}}
											animate={{
												color: "#6B7280",
												y: 0,
												opacity: 1,
											}}
											transition={{ duration: 1, delay: 'vanguard'.length * 0.1 + index * 0.2 }}
											className="inline-block"
										>
											{char}
										</motion.div>
									)
								})}
							</div>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="flex items-center gap-4"
					>
						<div className="flex text-safety-orange">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="w-5 h-5 fill-current" />
							))}
						</div>
						<span className="text-neutral-400 font-mono text-sm">
							48 Verified Reviews
						</span>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="text-4xl font-light font-mono"
					>
						$375.00
					</motion.div>

					{/* Sold Out Notice */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5, duration: 0.8 }}
						className="flex flex-col gap-4 mt-4"
					>
						{/* Sold Out Badge */}
						<div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 self-start">
							<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
							<span className="text-red-400 font-mono text-sm uppercase tracking-wide">
								Sold Out — Batch 001 Fully Allocated
							</span>
						</div>

						{/* Notify Box */}
						<div className="bg-white/5 border border-white/10 p-6 max-w-md">
							<p className="text-white/70 text-sm mb-4">
								Enter your email to get priority access to Batch 002. Limited to
								500 units.
							</p>
							<button
								onClick={() => setIsNotifyOpen(true)}
								className="w-full bg-safety-orange hover:bg-orange-600 text-white px-6 py-4 font-bold tracking-wide uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
							>
								<Bell className="w-5 h-5" />
								Notify Me
							</button>
						</div>
					</motion.div>
				</div>

				{/* Right Side: Floating Hero */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
					className="relative h-[50vh] lg:h-[70vh] w-full order-1 lg:order-2 flex items-center justify-center animate-float"
				>
					<div className="relative w-full h-full -rotate-155">
						<Image
							// src="/product-veiw-1-tp.png"
							src="/product-hero.png"
							alt="The Vanguard M01 Knife"
							fill
							className="object-contain drop-shadow-2xl"
							priority
						/>
					</div>
				</motion.div>
			</div>

			{/* Notify Form Modal */}
			<NotifyForm isOpen={isNotifyOpen} onClose={() => setIsNotifyOpen(false)} />
		</section>
	)
}
