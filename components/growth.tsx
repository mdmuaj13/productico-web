import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	BarChart3,
	FileText,
	Globe,
	Package,
	ShoppingCart,
	ShieldCheck,
	TrendingUp,
} from 'lucide-react';
import Image from 'next/image';

const kpis = [
	{ label: 'Orders today', value: '128', icon: ShoppingCart },
	{ label: 'Revenue (MTD)', value: '৳ 2,48,900', icon: TrendingUp },
	{ label: 'Low stock', value: '9', icon: Package },
];

const tools = [
	{
		title: 'Launch your online store',
		desc: 'Get a branded storefront with products, cart, and checkout—ready in minutes.',
		icon: Globe,
		image: '/images/store.png',
	},
	{
		title: 'Professional invoices',
		desc: 'Auto-generate invoices per order. Share PDFs and track paid / due status.',
		icon: FileText,
		image: '/images/invoice-list.png',
	},
	{
		title: 'Order management',
		desc: 'Track every order from placed → shipped. Keep customers updated with status.',
		icon: ShoppingCart,
		image: '/images/orders.png',
	},
	{
		title: 'Inventory management',
		desc: 'Multi-warehouse stock, variants, and low-stock alerts to avoid overselling.',
		icon: Package,
		image: '/images/features/inventory.png',
	},
	{
		title: 'Reports & exports',
		desc: 'One-click reports. Export to PDF/Excel and share with your team.',
		icon: BarChart3,
		image: '/images/features/reports.png',
	},
	{
		title: 'Secure operations',
		desc: 'Role-based access and audit-friendly activity for better control.',
		icon: ShieldCheck,
		image: '/images/security.png',
	},
];

function KPI({
	label,
	value,
	icon: Icon,
}: {
	label: string;
	value: string;
	icon: React.ElementType;
}) {
	return (
		<Card className="shadow-zinc-950/5">
			<CardContent className="flex items-center gap-3 p-4">
				<div className="flex size-10 items-center justify-center rounded-xl border bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
					<Icon className="size-5" />
				</div>
				<div className="min-w-0">
					<p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
					<p className="text-lg font-semibold leading-tight">{value}</p>
				</div>
			</CardContent>
		</Card>
	);
}

function ToolCard({
	title,
	desc,
	icon: Icon,
	image,
}: {
	title: string;
	desc: string;
	icon: React.ElementType;
	image: string;
}) {
	return (
		<Card className="group overflow-hidden shadow-zinc-950/5">
			<CardHeader className="space-y-2 pb-3">
				<div className="flex items-start gap-3">
					<div className="flex size-10 px-2 items-center justify-center rounded-lg border bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
						<Icon className="size-5" />
					</div>
					<div className="min-w-0">
						<p className="text-sm font-semibold">{title}</p>
						<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
					</div>
				</div>
			</CardHeader>

			<CardContent className="pt-0">
				<div className="relative overflow-hidden rounded-xl border bg-white dark:bg-zinc-950">
					<Image
						src={image}
						alt={`${title} preview`}
						width={1200}
						height={700}
						className="h-45 w-full object-fit md:h-50"
					/>
				</div>
			</CardContent>
		</Card>
	);
}

export default function GrowthTool() {
	return (
		<section className="bg-zinc-50 py-16 dark:bg-muted/25">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Everything you need to run your business
					</h2>
					<p className="mt-4 text-pretty text-zinc-600 dark:text-zinc-300">
						Simple tools that help you sell online, manage orders, track stock,
						and understand performance—without complexity.
					</p>
				</div>

				{/* KPI row (data-driven, simple) */}
				<div className="mt-10 grid gap-3 sm:grid-cols-3 md:mt-14">
					{kpis.map((k, i) => (
						<KPI key={i} label={k.label} value={k.value} icon={k.icon} />
					))}
				</div>

				{/* Tools grid */}
				<div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
					{tools.map((t, i) => (
						<ToolCard
							key={i}
							title={t.title}
							desc={t.desc}
							icon={t.icon}
							image={t.image}
						/>
					))}
				</div>

				{/* small note */}
				<p className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
					All modules work together so your store, orders, inventory, and reports
					stay in sync.
				</p>
			</div>
		</section>
	);
}
