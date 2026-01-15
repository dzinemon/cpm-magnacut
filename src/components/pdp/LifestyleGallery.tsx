"use client"
import Image from "next/image"
import { MacroGalleryTextItem } from "@/components/pdp/MacroGallery"

export const LifestyleGallery = () => {
	return (
		<section className="py-24 px-4 bg-white">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Pocket Shot (Simulated with production image for now) */}
				<div className="relative aspect-square bg-brand-grey overflow-hidden group">
					<Image
						src="/discreet-carry.png"
						alt="Deep Carry Clip"
						fill
						className="object-cover group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
					/>

					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />
					<MacroGalleryTextItem
						title="Discreet Carry"
						caption="Deep-carry titanium clip."
					/>
				</div>

				{/* Hand Shot */}
				<div className="relative aspect-square bg-brand-grey overflow-hidden group">
					<Image
						src="/hand-holding-product.png"
						alt="In Hand Scale"
						fill
						className="object-cover group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
					/>
					<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
					<MacroGalleryTextItem
						title="Combat Ready"
						caption="Optimized saber grip ergonomics."
					/>
				</div>
			</div>
		</section>
	)
}
