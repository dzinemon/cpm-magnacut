import { ExplodedView } from "@/components/pdp/ExplodedView"
import { LifestyleGallery } from "@/components/pdp/LifestyleGallery"
import { MacroGallery } from "@/components/pdp/MacroGallery"
import { ProductHero } from "@/components/pdp/ProductHero"
import { TechSpecs } from "@/components/pdp/TechSpecs"
import { EdcSection } from "@/components/pdp/EdcSection"
import { TrustFooter } from "@/components/pdp/TrustFooter"

export default function ProductPage() {
	return (
		<main className="w-full bg-white selection:bg-safety-orange selection:text-white">
			<ProductHero />
			<ExplodedView />
			<MacroGallery />
			<TechSpecs />
			<LifestyleGallery />
			<EdcSection />
			<TrustFooter />
		</main>
	)
}
