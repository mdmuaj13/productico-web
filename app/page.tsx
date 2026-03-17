import type { Metadata } from 'next';
import Solution from '@/components/solution';
import GradientHero from '@/components/gradient-hero';
import Pricing from '@/components/pricing';
import LogoCloud from '@/components/logo-cloud';
import StorefrontSteps from '@/components/storefront-steps';
import ProblemSection from '@/components/problem-section';
import { FeatureBento } from '@/components/feature-bento';
import CTA from '@/components/cta';
import Faq1 from '@/components/faq';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Productico – All-in-One ERP & Inventory Management for Manufacturing',
		description:
			'Streamline your manufacturing business with Productico. Real-time inventory tracking, vendor management, order processing, invoicing, and built-in online storefront. Trusted by 500+ businesses.',
		keywords: [
			'ERP software',
			'inventory management system',
			'manufacturing ERP',
			'stock control',
			'vendor management',
			'order management',
			'e-commerce platform',
			'invoicing software',
			'supply chain management',
			'business automation',
			'production planning',
			'warehouse management',
		],
		openGraph: {
			title: 'Productico – All-in-One ERP & Inventory Management',
			description:
				'Streamline your manufacturing business with Productico. Real-time inventory, vendor management, orders, invoicing & storefront in one platform.',
			url: 'https://productico.app',
			siteName: 'Productico',
			type: 'website',
			locale: 'en_US',
			images: [
				{
					url: '/og-image.png',
					width: 1200,
					height: 630,
					alt: 'Productico ERP Dashboard - All-in-One Business Management',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@productico',
			title: 'Productico – Run Your Entire Business From One Place',
			description:
				'Trusted by 500+ manufacturing businesses. Real-time inventory, orders, vendors & invoicing. Start free for 30 days.',
			images: ['/og-image.png'],
		},
		alternates: {
			canonical: 'https://productico.app',
		},
	};
}

const organizationJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Productico',
	description: 'All-in-one ERP and inventory management platform for manufacturing businesses',
	url: 'https://productico.app',
	logo: 'https://productico.app/icon.svg',
	sameAs: [],
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'sales',
		url: 'https://tally.so/r/3yYzo6',
	},
};

const breadcrumbJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: 'https://productico.app',
		},
	],
};

const webPageJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: 'Productico – ERP & Inventory Management for Manufacturing',
	description:
		'Streamline your manufacturing business with Productico. Real-time inventory tracking, vendor management, order processing, invoicing, and built-in online storefront.',
	url: 'https://productico.app',
	publisher: {
		'@type': 'Organization',
		name: 'Productico',
		logo: 'https://productico.app/icon.svg',
	},
	mainEntity: {
		'@type': 'SoftwareApplication',
		name: 'Productico',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
			name: 'Free Trial',
			description: 'Try Productico free for 30 days. No credit card required.',
		},
	},
};

const faqPageJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: 'What is Productico?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Productico is an all-in-one business management platform that helps you manage products, inventory, orders, warehouses, storefronts, invoicing, and fulfillment — from a single dashboard. Think of it as a central operating system for your product business.',
			},
		},
		{
			'@type': 'Question',
			name: 'Who is Productico built for?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Productico is designed for small and medium businesses that sell physical products — manufacturers, wholesalers, D2C brands, and retailers. If you manage inventory and process orders, Productico is built for you.',
			},
		},
		{
			'@type': 'Question',
			name: 'Is Productico cloud-based?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Yes. Productico is 100% cloud-based. Access your data from any device, anywhere. There are no servers to manage, no installations, and your data is automatically backed up.',
			},
		},
		{
			'@type': 'Question',
			name: 'Can I create an online store with Productico?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Yes. You can launch a branded storefront with product listings, a shopping cart, and checkout — all built in. You can also connect a custom domain so your store feels fully yours.',
			},
		},
		{
			'@type': 'Question',
			name: 'Can I manage multiple warehouses?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Yes. Productico supports multi-warehouse inventory management. You can track stock across locations, manage variant-level quantities, and receive low-stock alerts to prevent overselling.',
			},
		},
		{
			'@type': 'Question',
			name: 'Is there a free trial?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Yes. You can try Productico free for one full month — no credit card required. You\'ll get access to the core platform so you can explore and decide if it\'s right for your business.',
			},
		},
		{
			'@type': 'Question',
			name: 'Can Productico integrate with other tools?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Yes. Productico supports integrations with commonly used business tools. For custom or advanced integrations, our Enterprise plan includes dedicated integration support. Contact our team to discuss your specific needs.',
			},
		},
		{
			'@type': 'Question',
			name: 'What kind of support do you offer?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'All plans include access to our help center and email support. Professional and Enterprise plans include priority support with faster response times. Enterprise customers also get a dedicated account manager.',
			},
		},
	],
};

export default function Home() {
	return (
		<>
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
			/>

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
				<section id="storefront">
					<StorefrontSteps />
				</section>
				<CTA />

				<section id="pricing">
					<Pricing />
				</section>
				<section id="faqs">
					<Faq1 />
				</section>
			</main>
		</>
	);
}
