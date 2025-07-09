import CtaTwo from '@/components/call-to-action-two';
import FAQs from '@/components/faqs-section-one';
import FeaturesOne from '@/components/features-1';
import GrowthTool from '@/components/growth';
import Solution from '@/components/solution';
import HeroSection from '@/components/hero-section';
import Pricing from '@/components/pricing';

export default function Home() {
	return (
		<div className="">
			<HeroSection />
			<FeaturesOne />
			<CtaTwo />
			<Solution />
			<GrowthTool />
			<Pricing />
			<FAQs />
		</div>
	);
}
