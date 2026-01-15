"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const EDC_OPTIONS = [
	{
		id: "bold",
		label: "Bold & Rugged",
		title: "Precision in Every Carry",
		caption:
			"Engineered for the demanding tasks of daily life. This isn't just a tool; it's a reliable partner built from high-grade materials to ensure you’re always prepared for the unexpected.",
		image: "/option-1.png",
		vibe: "Hard-Use",
	},
	{
		id: "minimalist",
		label: "Minimalist & Modern",
		title: "The Modern Essential",
		caption:
			"Redefining the pocket knife through clean lines and superior ergonomics. A seamless blend of form and function designed to disappear in your pocket and stand out in your hand.",
		image: "/option-2.png",
		vibe: "Urban",
	},
	{
		id: "professional",
		label: "Professional & Short",
		title: "EDC Perfection",
		caption:
			"Tactical durability meets everyday utility. Featuring a high-performance blade and a lightweight, ergonomic grip, it’s the definitive choice for your daily rotation.",
		image: "/option-3.png",
		vibe: "Technical",
	},
	{
		id: "catchy",
		label: "Catchy & Punchy",
		title: "Ready for Action",
		caption:
			"From the morning commute to the weekend trail, carry the confidence of a knife that never quits. Built for those who value craftsmanship and readiness.",
		image: "/option-4.png",
		vibe: "Action",
	},
]

export function EdcSection() {
	const [activeTab, setActiveTab] = useState(EDC_OPTIONS[0])

	return (
		<section className="w-full bg-brand-black text-white px-4 py-16 md:py-20 lg:py-24 overflow-hidden relative">
			{/* Background gradients */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(255,102,0,0.06)_0%,_transparent_50%)] pointer-events-none" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,_transparent_40%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Intro Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 lg:mb-32">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative"
					>
						<div className="relative aspect-[4/3] w-full overflow-hidden">
							<Image
								src="/edc.png"
								alt="Every Day Carry Essentials"
								fill
								className="object-cover"
							/>
						</div>
						{/* Decorative element */}
						<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-safety-orange/10 rounded-full blur-2xl" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						className="flex flex-col gap-6"
					>
						<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 self-start">
							<span className="text-xs font-mono text-safety-orange uppercase tracking-wider">
								Lifestyle
							</span>
						</div>

						<h2 className="text-4xl lg:text-5xl font-condensed font-bold uppercase leading-[0.9]">
							Built for Your <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
								Daily Mission
							</span>
						</h2>
						<p className="text-white/70 max-w-lg text-lg leading-relaxed">
							Your carry defines your day. Whether you're navigating the urban
							jungle, tackling heavy-duty tasks, or simply appreciate fine
							craftsmanship, the MagnaCut is designed to seamlessly integrate
							into your lifestyle. It's not just about what you carry—it's about
							how you carry it.
						</p>
					</motion.div>
				</div>

				{/* Tabs Section */}
				<div className="flex flex-col gap-12">
					{/* Tab Navigation */}
					<div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
						{EDC_OPTIONS.map(option => (
							<button
								key={option.id}
								onClick={() => setActiveTab(option)}
								className="relative px-2 py-1.5 lg:px-6 lg:py-3 group cursor-pointer"
							>
								<span
									className={cn(
										"relative z-10 font-mono text-sm uppercase transition-colors duration-300",
										activeTab.id === option.id
											? "text-brand-black text-shadow-lg "
											: "text-white/50 group-hover:text-white",
									)}
								>
									{option.label}
								</span>
								{activeTab.id === option.id && (
									<motion.div
										layoutId="activeTab"
										className="absolute inset-0 bg-white"
										transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
									/>
								)}
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className="relative min-h-[600px] lg:min-h-[500px] bg-brand-grey/5 p-6 lg:p-12 overflow-hidden border border-white/5">
						{/* Content spotlight gradient */}
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_70%_50%,_rgba(255,102,0,0.05)_0%,_transparent_50%)] pointer-events-none" />
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_65%_45%,_rgba(255,255,255,0.02)_0%,_transparent_40%)] pointer-events-none" />

						<AnimatePresence mode="wait">
							<motion.div
								key={activeTab.id}
								initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
								transition={{ duration: 0.5 }}
								className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center"
							>
								{/* Content Side */}
								<div className="flex flex-col gap-6 order-2 lg:order-1">
									<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 self-start">
										<span className="text-xs font-mono text-safety-orange uppercase tracking-wider">
											{activeTab.vibe} Vibe
										</span>
									</div>
									<h3 className="text-3xl lg:text-4xl font-condensed font-bold uppercase">
										<span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange/40 via-white/50 to-white">
											{activeTab.title}
										</span>
									</h3>
									<p className="text-white/70 text-lg leading-relaxed max-w-md">
										{activeTab.caption}
									</p>
								</div>

								{/* Image Side */}
								<div className="relative aspect-[3/4] lg:aspect-square w-full overflow-hidden order-1 lg:order-2 shadow-2xl shadow-black/50">
									<Image
										src={activeTab.image}
										alt={activeTab.title}
										fill
										className="object-cover transition-transform duration-700 hover:scale-105"
									/>
									{/* Image gradients */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
									<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_transparent_30%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	)
}
