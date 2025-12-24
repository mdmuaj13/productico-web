import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { ReactNode } from 'react';

interface Feature {
	title: string;
	description: string;
	points: string[];
	image: {
		src: string;
		alt: string;
	};
	badge?: string;
}

/** Multicolor badge styles by badge label */
const badgeStyles: Record<string, { bg: string; text: string; ring: string }> = {
	Live: {
		bg: 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500',
		text: 'text-white',
		ring: 'ring-white/25',
	},
	'Supply Chain': {
		bg: 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500',
		text: 'text-white',
		ring: 'ring-white/25',
	},
	Secure: {
		bg: 'bg-gradient-to-r from-slate-700 via-indigo-600 to-sky-500',
		text: 'text-white',
		ring: 'ring-white/20',
	},
	Storefront: {
		bg: 'bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-500',
		text: 'text-white',
		ring: 'ring-white/25',
	},
	IMS: {
		bg: 'bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-500',
		text: 'text-white',
		ring: 'ring-white/25',
	},
	Export: {
		bg: 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500',
		text: 'text-white',
		ring: 'ring-white/25',
	},
};

const getBadgeClass = (badge?: string) => {
	const style = badge ? badgeStyles[badge] : undefined;

	// fallback multicolor badge (if new badge labels are added later)
	const fallback = {
		bg: 'bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white/20 dark:via-white/10 dark:to-white/20',
		text: 'text-white dark:text-white',
		ring: 'ring-white/20',
	};

	const s = style ?? fallback;

	return [
		'absolute left-3 top-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm',
		'backdrop-blur-sm',
		'ring-1',
		s.bg,
		s.text,
		s.ring,
	].join(' ');
};

const features: Feature[] = [
	{
		badge: 'Live',
		title: 'Real-Time Analytics',
		description:
			'Track sales, inventory, and cashflow instantly—so you can act before issues become losses.',
		points: [
			'Live dashboard with KPIs',
			'Profit & loss snapshots',
			'Sales trends by day/week/month',
		],
		image: {
			src: '/images/features/analytics.png',
			alt: 'Analytics dashboard preview',
		},
	},
	{
		badge: 'Supply Chain',
		title: 'Vendor & Supplier Management',
		description:
			'Centralize suppliers, purchase orders, and due payments to keep your supply chain predictable.',
		points: [
			'Vendor profiles & history',
			'Purchase order tracking',
			'Due payment reminders',
		],
		image: {
			src: '/images/features/vendors.png',
			alt: 'Vendor and supplier management preview',
		},
	},
	{
		badge: 'Secure',
		title: 'Cloud-Based Infrastructure',
		description:
			'Access your ERP anywhere with role-based access—no servers, no maintenance overhead.',
		points: ['Role-based permissions', 'Automatic backups', 'Scales as you grow'],
		image: {
			src: '/images/features/cloud.png',
			alt: 'Cloud infrastructure preview',
		},
	},
	{
		badge: 'Storefront',
		title: 'E-Commerce Shop',
		description:
			'Launch your own branded online shop and sync orders with inventory—without extra tools.',
		points: ['Custom storefront', 'Inventory sync', 'Order & delivery workflow'],
		image: {
			src: '/images/features/shop.png',
			alt: 'E-commerce shop preview',
		},
	},
	{
		badge: 'IMS',
		title: 'Inventory Management System',
		description:
			'Manage your inventory with multiple warehouses and also work with multiple variants.',
		points: ['Multiple Warehouse', 'Product Variants', 'Variant wise stock check'],
		image: {
			src: '/images/features/inventory.png',
			alt: 'IMS preview',
		},
	},
	{
		badge: 'Export',
		title: 'Report Generation',
		description:
			'Generate reports in one click and share with your team—export to Excel or PDF anytime.',
		points: ['One-click reports', 'Excel/PDF export', 'Shareable links & access'],
		image: {
			src: '/images/features/reports.png',
			alt: 'Report generation preview',
		},
	},
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
	return (
		<Card className="group overflow-hidden py-0 pb-6 shadow-zinc-950/5 transition hover:-translate-y-0.5 hover:shadow-zinc-950/10 dark:hover:shadow-black/20">
			<div className="relative aspect-16/14 w-full">
				<Image
					src={feature.image.src}
					alt={feature.image.alt}
					fill
					className="object-cover transition duration-300 group-hover:scale-[1.03]"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority={false}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

				{feature.badge ? (
					<span className={getBadgeClass(feature.badge)}>{feature.badge}</span>
				) : null}
			</div>

			<CardHeader className="pb-2">
				<h3 className="text-left text-lg font-semibold">{feature.title}</h3>
				<p className="text-left text-sm text-zinc-600 dark:text-zinc-300">
					{feature.description}
				</p>
			</CardHeader>

			<CardContent className="pt-0">
				<ul className="space-y-2 text-left text-sm text-zinc-700 dark:text-zinc-200">
					{feature.points.map((p, i) => (
						<li key={i} className="flex gap-2 font-semibold">
							<CheckBullet />
							<span>{p}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default function FeaturesGrid() {
	return (
		<section className="bg-zinc-50 py-16 dark:bg-transparent">
			<div className="@container mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Built to cover your needs
					</h2>
					<p className="mt-4 text-pretty text-zinc-600 dark:text-zinc-300">
						Everything you need to run operations—inventory, sales, suppliers,
						customers, and reporting—in one clean workspace.
					</p>
				</div>

				<div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-10 grid max-w-sm gap-6 md:mt-16 md:max-w-none md:grid-cols-2">
					{features.map((feature, index) => (
						<FeatureCard key={index} feature={feature} />
					))}
				</div>
			</div>
		</section>
	);
}

const CheckBullet = () => (
	<span
		aria-hidden
		className="mt-1 inline-flex size-4 items-center justify-center rounded-full border border-zinc-200 bg-white text-[10px] font-bold text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
	>
		✓
	</span>
);

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
		/>
		<div
			aria-hidden
			className="bg-radial to-background absolute inset-0 from-transparent to-75%"
		/>
		<div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
			{children}
		</div>
	</div>
);
