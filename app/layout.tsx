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
	icons: '/icon.svg',
	title: 'Productico',
	description:
		"Boost efficiency and enhance control over your business processes with our productico ERP and inventory management solution. Optimize resource utilization, automate workflows, and stay ahead of the competition. Explore a comprehensive suite of features tailored to meet your organization's unique needs.",
	keywords: [
		'productico',
		'InventoryManagement',
		'ERP',
		'EnterpriseSolutions',
		'BusinessOperations',
		'E-commerce',
		'F-commerce',
	],
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
				<Header />
				{children}
				<FooterSection />
			</body>
		</html>
	);
}
