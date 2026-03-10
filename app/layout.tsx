import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import FooterSection from '@/components/footer-one';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://productico.app'),
	icons: '/icon.svg',
	title: 'Productico – ERP & Inventory Management for Manufacturing',
	description:
		'All-in-one ERP for manufacturing businesses. Real-time analytics, inventory management, vendor tracking, invoicing, and an online storefront—built to scale.',
	keywords: [
		'productico',
		'ERP software',
		'inventory management',
		'manufacturing ERP',
		'business management software',
		'vendor management',
		'order management',
		'e-commerce storefront',
		'invoicing software',
		'supply chain management',
	],
	openGraph: {
		title: 'Productico – ERP & Inventory Management for Manufacturing',
		description:
			'All-in-one ERP for manufacturing businesses. Real-time analytics, inventory management, vendor tracking, invoicing, and an online storefront.',
		url: 'https://productico.app',
		siteName: 'Productico',
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: '/images/dashboards.png',
				width: 1200,
				height: 630,
				alt: 'Productico ERP Dashboard',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Productico – ERP & Inventory Management for Manufacturing',
		description:
			'All-in-one ERP for manufacturing businesses. Real-time analytics, inventory, vendors, invoicing & storefront.',
		images: ['/images/dashboards.png'],
	},
	alternates: {
		canonical: 'https://productico.app',
	},
	robots: {
		index: true,
		follow: true,
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: 'Productico',
	applicationCategory: 'BusinessApplication',
	operatingSystem: 'Web',
	description:
		'All-in-one ERP for manufacturing businesses. Real-time analytics, inventory management, vendor tracking, invoicing, and an online storefront.',
	url: 'https://productico.app',
	offers: [
		{
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
			name: 'Free Trial',
			description: 'Try Productico free for 1 month.',
		},
		{
			'@type': 'Offer',
			price: '29',
			priceCurrency: 'USD',
			name: 'Professional',
			description:
				'For growing businesses that need unlimited products and orders.',
		},
	],
	aggregateRating: undefined,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Header />
				{children}
				<FooterSection />
			</body>
		</html>
	);
}
