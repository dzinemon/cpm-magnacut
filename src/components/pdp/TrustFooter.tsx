import { ShieldCheck, Zap, Package } from "lucide-react"

export const TrustFooter = () => {
	const items = [
		{
			icon: ShieldCheck,
			title: "Lifetime Warranty",
			desc: "We fix it or replace it. Forever.",
		},
		{
			icon: Zap,
			title: "Life-Sharp Service",
			desc: "Send it back to us anytime for a factory-spec edge.",
		},
		{
			icon: Package,
			title: "Secure Shipping",
			desc: "Insured and tracked delivery to your door.",
		},
	]

	return (
		<section className="bg-brand-black text-white py-24 px-6 border-t border-white/10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
				{items.map(item => (
					<div
						key={item.title}
						className="flex flex-col items-center text-center"
					>
						<item.icon className="w-12 h-12 text-safety-orange mb-6 stroke-1" />
						<h3 className="text-xl font-condensed font-bold uppercase tracking-wide mb-3">
							{item.title}
						</h3>
						<p className="text-neutral-400 font-mono text-sm max-w-xs leading-relaxed">
							{item.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
