import FAQs from '@/components/faqs-section-one';
import GrowthTool from '@/components/growth';
import Solution from '@/components/solution';
import GradientHero from '@/components/gradient-hero';
import Pricing from '@/components/pricing';
import LogoCloud from '@/components/logo-cloud';
import StorefrontSteps from '@/components/storefront-steps';
import ProblemSection from '@/components/problem-section';
import { FeatureBento } from '@/components/feature-bento';
import CTA from '@/components/cta';
import Faq1 from '@/components/faq';

export default function Home() {
	return (
		<main>
			<GradientHero />
			<LogoCloud />
			<section id="problem">
				<ProblemSection />
			</section>
			<section id="features">
				<FeatureBento />
			</section>

			<section id="solution">
				<Solution />
			</section>
			<section id="tools">
				<GrowthTool />
			</section>
			<section id="storefront">
				<StorefrontSteps />
			</section>
			<CTA />

			<section id="pricing">
				<Pricing />
			</section>
			<section id="faqs">
				{/* <FAQs /> */}
				<Faq1 />
			</section>
		</main>
	);
}
