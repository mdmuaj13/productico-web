import {
	BarChart3,
	Truck,
	ShieldCheck,
	Store,
	Package,
	FileText,
	CheckCircle2,
} from 'lucide-react';
import { Card } from './ui/card';

const features = [
	{
		badge: 'Live',
		title: 'Real-Time Analytics',
		description:
			'Track sales, inventory, and cash flow from a live dashboard — so you can act before issues become losses.',
		points: [
			'KPI dashboard',
			'Profit & loss snapshots',
			'Sales trends by day, week, month',
		],
		icon: BarChart3,
		className: 'md:col-span-2 md:row-span-2',
	},
	{
		badge: 'Supply Chain',
		title: 'Vendor & Supplier Management',
		description:
			'Centralize supplier info, track purchase orders, and stay on top of payments.',
		points: [
			'Vendor profiles & history',
			'Purchase order tracking',
			'Due payment reminders',
		],
		icon: Truck,
		className: 'md:col-span-1 md:row-span-2',
	},
	{
		badge: 'Secure',
		title: 'Cloud-Based & Secure',
		description:
			'Access your workspace from anywhere. Role-based permissions, auto backups, zero server maintenance.',
		points: [
			'Role-based permissions',
			'Automatic backups',
			'Scales as you grow',
		],
		icon: ShieldCheck,
		className: 'md:col-span-1',
	},
	{
		badge: 'Storefront',
		title: 'Online Store',
		description:
			'Launch a branded storefront and sync orders with inventory — without third-party tools.',
		points: ['Custom storefront', 'Inventory sync', 'Built-in order workflow'],
		icon: Store,
		className: 'md:col-span-1',
	},
	{
		badge: 'IMS',
		title: 'Inventory Management',
		description:
			'Multi-warehouse stock tracking with product variants and low-stock alerts.',
		points: [
			'Multiple warehouses',
			'Product variants',
			'Variant-level stock tracking',
		],
		icon: Package,
		className: 'md:col-span-1',
	},
	{
		badge: 'Export',
		title: 'Reports & Exports',
		description:
			'Generate reports in one click. Export to Excel or PDF. Share with your team instantly.',
		points: ['One-click reports', 'Excel / PDF export', 'Shareable links'],
		icon: FileText,
		className: 'md:col-span-3',
	},
];

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

const getBadgeClass = (badge: string) => {
	const style = badgeStyles[badge] || {
		bg: 'bg-zinc-800',
		text: 'text-white',
		ring: 'ring-white/20',
	};

	return [
		'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase shadow-sm',
		'backdrop-blur-sm ring-1',
		style.bg,
		style.text,
		style.ring,
	].join(' ');
};

export default function BentoFeatures() {
	return (
		<section className="bg-zinc-50 py-24 dark:bg-transparent">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl tracking-tight text-zinc-950 dark:text-white">
						Everything you need. Nothing you don't.
					</h2>
					<p className="mt-6 text-lg text-pretty text-zinc-600 dark:text-zinc-400">
						One workspace for inventory, sales, suppliers, customers, and reporting.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
					{features.map((feature, i) => {
						const Icon = feature.icon;
						return (
							<Card
								key={i}
								className={`group relative overflow-hidden bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.className}`}
							>
								{/* Subtle Background Glow on Hover */}
								<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								<div className="relative z-10 flex flex-col h-full">
									<div className="flex items-start justify-between mb-6">
										<div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
											<Icon className="w-6 h-6" />
										</div>
										<span className={getBadgeClass(feature.badge)}>
											{feature.badge}
										</span>
									</div>

									<div className="mt-auto">
										<h3 className="text-xl font-semibold text-zinc-950 dark:text-white mb-2 tracking-tight">
											{feature.title}
										</h3>
										<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
											{feature.description}
										</p>

										<ul className="space-y-2.5 mt-auto">
											{feature.points.map((point, idx) => (
												<li
													key={idx}
													className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 font-medium"
												>
													<CheckCircle2 className="w-4 h-4 text-emerald-500" />
													<span>{point}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
