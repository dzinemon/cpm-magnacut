export const TechSpecs = () => {
	const specs = [
		{
			label: "Blade Steel",
			value: "CPM-Magnacut",
			description:
				"An advanced powder metallurgy stainless steel offering an exceptional balance of toughness, edge retention, and corrosion resistance.",
		},
		{
			label: "Hardness",
			value: "62-64 HRC",
			description: "Optimized for a balance of edge retention and toughness.",
		},
		{
			label: "Handle",
			value: "3D-Machined Titanium",
			description:
				"Grade 5 titanium scales with bead-blasted finish for enhanced grip.",
		},
		{
			label: "Weight",
			value: "4.2 oz",
			description: "Lightweight design for all-day carry and use.",
		},
		{
			label: "Blade Length",
			value: "3.25 inches",
			description: "Ideal for precision tasks and everyday use.",
		},
		{
			label: "Overall Length",
			value: "7.5 inches",
			description: "Compact and easy to carry.",
		},
		{
			label: "Origin",
			value: "Precision Machined in Hammerland",
			description: "Crafted with meticulous attention to detail and quality.",
		},
	]

	return (
		<section className="py-24 px-4 bg-brand-grey">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-4xl font-condensed font-bold mb-12 text-center text-brand-black uppercase tracking-tight">
					Technical Specifications
				</h2>

				<div className="bg-white rounded-none shadow-sm overflow-hidden border border-gray-100">
					<table className="w-full">
						<tbody>
							{specs.map(spec => (
								<tr
									key={spec.label}
									className={`border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors`}
								>
									<td className="py-6 px-8 font-mono text-sm text-neutral-500 uppercase tracking-widest w-1/3">
										{spec.label}
									</td>
									<td className="py-6 px-8 font-sans font-medium text-brand-black text-lg">
										{spec.value}
										{spec.description && (
											<p className="mt-1 text-sm text-neutral-600 font-normal">
												{spec.description}
											</p>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
