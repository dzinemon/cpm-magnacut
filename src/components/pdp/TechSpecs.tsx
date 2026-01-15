export const TechSpecs = () => {
	const specs = [
		{ label: "Blade Steel", value: "CPM-Magnacut" },
		{ label: "Hardness", value: "62-64 HRC" },
		{ label: "Handle", value: "3D-Machined Titanium" },
		{ label: "Weight", value: "4.2 oz" },
		{ label: "Blade Length", value: "3.25 inches" },
		{ label: "Overall Length", value: "7.5 inches" },
		{ label: "Origin", value: "Precision Machined in Ukraine" },
	]

	return (
		<section className="py-32 px-6 bg-brand-grey">
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
