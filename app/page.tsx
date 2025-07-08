
import CtaTwo from '@/components/call-to-action-two';
import FAQs from '@/components/faqs-section-one';
import Features from '@/components/features-8';
import FeatureOne from '@/components/features-one';
import HeroSection from '@/components/hero-section';
import Pricing from '@/components/pricing';

export default function Home() {
	return (
		<div className="">
			<HeroSection />
      <FeatureOne />
      <Features />
      <Pricing />
      <CtaTwo />
      <FAQs />
      
		</div>
	);
}
