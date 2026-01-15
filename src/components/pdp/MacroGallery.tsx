"use client"

import Image from "next/image"

export const MacroGalleryTextItem = ({
	title,
	caption,
}: {
	title: string
	caption: string
}) => (
	<div className="absolute bottom-0 left-0 p-8 w-full">
		{/* Dark gradient backdrop on hover */}
		<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		<h3 className="relative z-10 text-white font-condensed font-bold text-2xl uppercase tracking-wide mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
			{title}
		</h3>
		<p className="relative z-10 text-safety-orange font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 duration-700 delay-100">
			{caption}
		</p>
	</div>
)

const MacroItem = ({
	src,
	title,
	caption,
}: {
	src: string
	title: string
	caption: string
}) => (
	<div className="group relative aspect-square overflow-hidden bg-brand-black">
		<Image
			src={src}
			alt={title}
			fill
			className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
		/>
		<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />
		<MacroGalleryTextItem title={title} caption={caption} />
	</div>
)

export const MacroGallery = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 w-full">
			<MacroItem
				src="/blade-macro.jpg"
				title="The Edge"
				caption="CPM-Magnacut Steel"
			/>
			<MacroItem
				src="/grip.png"
				title="The Grip"
				caption="Grade 5 Titanium Architecture"
			/>
			<MacroItem
				src="/top-down.png"
				title="The Lock"
				caption="Zero-Tolerance Lockup"
			/>
		</section>
	)
}
