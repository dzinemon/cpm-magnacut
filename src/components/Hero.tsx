"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
	return (
		<section className="min-h-screen w-full flex flex-col items-center justify-center bg-brand-black text-white relative overflow-hidden">
			{/* Background Texture */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gunmetal/20 to-brand-black pointer-events-none" />

			<div className="z-10 flex flex-col items-center text-center max-w-7xl mx-auto px-4">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="text-6xl md:text-8xl font-condensed font-bold tracking-tighter uppercase leading-none"
				>
					Model 01.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="text-xl md:text-2xl text-neutral-400 mt-6 max-w-2xl font-mono text-sm"
				>
					Titanium. Magnacut. Precision in your pocket.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
					className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
				>
					<button className="bg-safety-orange hover:bg-orange-600 text-white px-10 py-4 font-bold tracking-wide uppercase transition-colors cursor-pointer">
						Order Now
					</button>
					<button className="text-white hover:text-safety-orange transition-colors flex items-center gap-2 group font-mono text-sm uppercase tracking-wide cursor-pointer">
						Watch the film
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</button>
				</motion.div>
			</div>
		</section>
	)
}
