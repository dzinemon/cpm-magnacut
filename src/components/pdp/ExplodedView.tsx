"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const hotspots = [
	{ id: 1, x: "35%", y: "53%", title: "Pivot", desc: "Caged Ceramic Bearings" },
	{
		id: 4,
		x: "54%",
		y: "16%",
		title: "Handle",
		desc: "G10 Scales with Titanium Liner",
	},
	{ id: 2, x: "30%", y: "13%", title: "Blade", desc: "CPM-Magnacut 63 HRC" },
	{
		id: 3,
		x: "65%",
		y: "61%",
		title: "Lock-bar",
		desc: "Hardened Steel Insert",
	},
	{
		id: 5,
		x: "50%",
		y: "78%",
		title: "Pocket Clip",
		desc: "Deep Carry Titanium Clip",
	},
]

export const ExplodedView = () => {
	const [activeId, setActiveId] = useState<number | null>(null)

	return (
		<section className="bg-brand-grey py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 text-center mb-16">
				<h2 className="text-4xl font-condensed font-bold uppercase tracking-tight mb-4 text-brand-black">
					Engineered Perfection
				</h2>
				<p className="text-neutral-500 max-w-2xl mx-auto font-mono text-sm">
					Hover over the components to reveal specifications.
				</p>
			</div>

			<div className="relative max-w-5xl mx-auto aspect-square md:aspect-video bg-white border border-gray-200 shadow-sm overflow-hidden">
				{/* Background Drawing */}
				<div className="absolute inset-0 p-10">
					<Image
						src="/product-drawings.png"
						alt="Exploded View Diagram"
						fill
						className="object-contain opacity-80"
					/>
				</div>

				{/* Interactive Hotspots */}
				{hotspots.map(spot => (
					<div
						key={spot.id}
						className="absolute"
						style={{ top: spot.y, left: spot.x }}
						onMouseEnter={() => setActiveId(spot.id)}
						onMouseLeave={() => setActiveId(null)}
					>
						<motion.button
							whileHover={{ scale: 1.2 }}
							className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg cursor-pointer opacity-30 hover:opacity-100
                ${activeId === spot.id ? "bg-safety-orange text-white" : "bg-brand-black text-white hover:bg-gunmetal"}
              `}
						>
							<Plus
								className={`w-5 h-5 transition-transform ${activeId === spot.id ? "rotate-45" : ""}`}
							/>
						</motion.button>

						{/* Tooltip */}
						{activeId === spot.id && (
							<motion.div
								initial={{ opacity: 0, y: 10, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								className="absolute left-1/2 -translate-x-1/2 top-10 bg-brand-black text-white p-4 rounded-lg shadow-xl w-48 text-center z-20 pointer-events-none"
							>
								<div className="font-condensed font-bold uppercase text-safety-orange text-sm mb-1">
									{spot.title}
								</div>
								<div className="font-mono text-xs text-neutral-300">
									{spot.desc}
								</div>
								<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-black rotate-45" />
							</motion.div>
						)}

						{/* Pulse Effect */}
						<span className="absolute inset-0 rounded-full bg-safety-orange animate-ping opacity-20 pointer-events-none" />
					</div>
				))}
			</div>
		</section>
	)
}
