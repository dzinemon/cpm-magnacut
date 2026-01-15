"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export const FeatureGrid = () => {
	return (
		<section className="bg-brand-grey py-32 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
				{/* Large Feature - Steel */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="md:col-span-8 bg-white p-12 rounded-[2.5rem] shadow-sm overflow-hidden flex flex-col justify-between"
				>
					<h3 className="text-4xl md:text-5xl font-condensed font-bold tracking-tight text-brand-black uppercase">
						CPM-Magnacut Steel. <br />
						<span className="text-neutral-400">Unrivaled edge.</span>
					</h3>
					<div className="mt-8 relative h-64 w-full rounded-xl overflow-hidden">
						<Image
							src="/blade-macro.jpg"
							alt="Blade Detail"
							fill
							className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
						/>
					</div>
				</motion.div>

				{/* Small Feature - Titanium */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="md:col-span-4 bg-brand-black text-white p-10 rounded-[2.5rem] flex flex-col items-center text-center justify-between"
				>
					<div>
						<h3 className="text-2xl font-condensed font-bold uppercase">
							Grade 5 <br /> Titanium
						</h3>
						<p className="text-neutral-400 mt-2 font-mono text-sm">
							Aerospace strength.
						</p>
					</div>
					<div className="mt-8 text-6xl font-light font-mono tracking-tighter">
						4.2oz
					</div>
				</motion.div>
			</div>
		</section>
	)
}
