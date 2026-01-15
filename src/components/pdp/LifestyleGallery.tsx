"use client"
import Image from "next/image"

export const LifestyleGallery = () => {
	return (
		<section className="py-24 px-6 bg-white">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Pocket Shot (Simulated with production image for now) */}
				<div className="relative h-[600px] bg-brand-grey rounded-[2.5rem] overflow-hidden group">
					<Image
						src="/discreet-carry.png"
						alt="Deep Carry Clip"
						fill
						className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
					/>
					<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
					<div className="absolute bottom-10 left-10">
						<h3 className="text-4xl font-condensed font-bold text-white uppercase drop-shadow-lg">
							Discreet Carry
						</h3>
						<p className="text-white/80 font-mono mt-2">
							Deep-carry titanium clip.
						</p>
					</div>
				</div>

				{/* Hand Shot */}
				<div className="relative h-[600px] bg-brand-grey rounded-[2.5rem] overflow-hidden group">
					<Image
						src="/hand-holding-product.png"
						alt="In Hand Scale"
						fill
						className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
					/>
					<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
					<div className="absolute bottom-10 left-10">
						<h3 className="text-4xl font-condensed font-bold text-white uppercase drop-shadow-lg">
							Combat Ready
						</h3>
						<p className="text-white/80 font-mono mt-2">
							Optimized saber grip ergonomics.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
