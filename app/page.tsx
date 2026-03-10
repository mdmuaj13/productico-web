import FAQs from '@/components/faqs-section-one';
import FeaturesOne from '@/components/features-1';
import GrowthTool from '@/components/growth';
import Solution from '@/components/solution';
import GradientHero from '@/components/gradient-hero';
import Pricing from '@/components/pricing';
import LogoCloud from '@/components/logo-cloud';
import FeatureSteps from '@/components/feature-steps';
import FeaturesEight from '@/components/features-8';

export default function Home() {
	return (
		<main>
			<GradientHero />
			<section id="features">
				<FeaturesOne />
				{/* <FeaturesEight /> */}
			</section>
			{/* <CtaTwo /> */}
			<section id="solution">
				<Solution />
			</section>
			<section id="tools">
				<GrowthTool />
			</section>
			<section id="storefront">
				<FeatureSteps />
			</section>
			<section id="trusted-by">
				<LogoCloud />
			</section>
			<section id="pricing">
				<Pricing />
			</section>
			<section id="faqs">
				<FAQs />
			</section>
		</main>
	);
}
