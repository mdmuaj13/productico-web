'use client';
import { cn } from '@/lib/utils';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { motion } from 'motion/react';

export function FeatureBento() {
	return (
		<section className="relative overflow-hidden bg-background py-24 lg:py-32">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.15]" />
				<div className="from-primary/5 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-strips))]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-6 sm:px-8">

				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
				>
					Everything you need.
					<br />
					<span className="bg-clip-text text-transparent bg-gradient-to-t from-neutral-400 via-neutral-200 to-neutral-500 dark:from-neutral-600 dark:via-neutral-400 dark:to-neutral-500">
						Nothing you don't.
					</span>
				</motion.h2>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-muted-foreground mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg"
				>
					One workspace for inventory, sales, suppliers, customers, and reporting.
				</motion.p>

				{/* Bento Grid */}
				<div className="mt-16">
					<BentoGrid className="mx-auto md:auto-rows-[20rem]">
						{items.map((item, i) => (
							<BentoGridItem
								key={i}
								title={item.title}
								description={item.description}
								header={item.header}
								className={cn('[&>p:text-lg]', item.className)}
							/>
						))}
					</BentoGrid>
				</div>
			</div>
		</section>
	);
}

// Real-Time Analytics Dashboard
const AnalyticsDashboard = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full gap-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1.5">
					<div className="h-2.5 w-12 bg-neutral-200 dark:bg-neutral-700 rounded" />
					<motion.div
						animate={{ opacity: [1, 0.5, 1] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="h-1.5 w-1.5 rounded-full bg-red-500"
					/>
				</div>
				<div className="flex gap-1">
					<div className="h-2 w-6 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
					<div className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
				</div>
			</div>

			<div className="grid grid-cols-3 gap-1.5">
				{[1, 2, 3].map((i) => (
					<div key={i} className="bg-white dark:bg-neutral-900 rounded p-1.5 border border-neutral-200 dark:border-neutral-800">
						<div className="flex justify-between items-start mb-1">
							<div className="h-1 w-6 bg-neutral-200 dark:bg-neutral-700 rounded" />
							<div className="h-1.5 w-1.5 rounded-full bg-red-500/20 flex items-center justify-center">
								<div className="w-1 h-1 rounded-full bg-red-500" />
							</div>
						</div>
						<div className="h-2 w-8 bg-neutral-200 dark:bg-neutral-700 rounded" />
					</div>
				))}
			</div>

			<div className="flex-1 bg-white dark:bg-neutral-900 rounded p-1.5 border border-neutral-200 dark:border-neutral-800 min-h-0">
				<div className="h-1.5 w-8 bg-neutral-200 dark:bg-neutral-700 rounded mb-1" />
				<div className="relative h-12">
					<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
						<motion.path
							d="M0,35 Q10,30 20,25 T40,20 T60,15 T80,10 T100,5"
							fill="none"
							stroke="currentColor"
							strokeWidth="0.5"
							className="text-neutral-900 dark:text-white"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 1.5, delay: 0.3 }}
						/>
					</svg>
					<div className="absolute bottom-0 left-0 right-0 flex gap-0.5 items-end h-full">
						{[30, 50, 40, 70, 55, 85, 65, 90, 75, 95, 80, 60].map((h, i) => (
							<motion.div
								key={i}
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: `${h * 0.7}%`, opacity: 0.4 }}
								transition={{ delay: 0.3 + i * 0.03, duration: 0.3 }}
								className="flex-1 bg-neutral-900 dark:bg-white rounded-t"
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

// Vendor & Supplier Management
const VendorManagement = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full gap-1.5">
			<div className="flex items-center justify-between">
				<div className="h-2.5 w-14 bg-neutral-200 dark:bg-neutral-700 rounded" />
				<div className="h-5 w-5 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-600 text-xs">
					+
				</div>
			</div>
			{[1, 2, 3].map((i) => (
				<motion.div
					key={i}
					whileHover={{ x: 3 }}
					className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded p-1.5 border border-neutral-200 dark:border-neutral-800">
					<div className="flex items-center gap-1.5">
						<div className="h-5 w-5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
						<div className="h-2 w-14 bg-neutral-200 dark:bg-neutral-700 rounded" />
					</div>
					<div className="h-2 w-6 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
				</motion.div>
			))}
		</motion.div>
	);
};

// Cloud-Based & Secure
const CloudSecure = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full items-center justify-center">
			<motion.div
				animate={{ y: [0, -5, 0] }}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className="flex flex-col items-center gap-3">
				<div className="w-9 h-9 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
					<svg className="w-4.5 h-4.5 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
				</div>
				<div className="flex gap-1.5">
					{[1, 2, 3].map((i) => (
						<motion.div
							key={i}
							whileHover={{ scale: 1.1 }}
							className="w-5 h-5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
						/>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

// Online Store
const OnlineStore = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full gap-2">
			<div className="flex items-center justify-between">
				<div className="flex gap-1">
					<div className="h-2.5 w-8 bg-neutral-200 dark:bg-neutral-700 rounded" />
					<div className="h-2.5 w-6 bg-neutral-200 dark:bg-neutral-700 rounded" />
				</div>
				<div className="h-4 w-4 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
			</div>
			<div className="flex gap-1.5 flex-1">
				{[1, 2, 3].map((i) => (
					<motion.div
						key={i}
						whileHover={{ scale: 1.03, y: -2 }}
						className="flex-1 bg-white dark:bg-neutral-900 rounded p-1.5 border border-neutral-200 dark:border-neutral-800 flex flex-col">
						<div className="h-10 bg-neutral-100 dark:bg-neutral-800 rounded mb-1" />
						<div className="h-1.5 w-8 bg-neutral-200 dark:bg-neutral-700 rounded mb-1" />
						<div className="h-1.5 w-6 bg-neutral-200 dark:bg-neutral-700 rounded" />
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

// Inventory Management
const InventoryManagement = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full gap-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1">
					<div className="h-2.5 w-12 bg-neutral-200 dark:bg-neutral-700 rounded" />
					<div className="flex gap-0.5">
						<div className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
						<div className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
						<div className="h-1 w-1 rounded-full bg-red-500" />
					</div>
				</div>
				<motion.div
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-red-500/30">
					!
				</motion.div>
			</div>

			<div className="flex gap-1 mb-2">
				{['Main', 'WH B', 'Store'].map((tab, i) => (
					<div
						key={i}
						className={cn(
							'h-4.5 px-2 rounded-full text-[9px] flex items-center',
							i === 0
								? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
								: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400',
						)}>
						{tab}
					</div>
				))}
			</div>

			<div className="grid grid-cols-2 gap-1 flex-1">
				{[
					{ stock: 3, status: 'critical' },
					{ stock: 45, status: 'good' },
					{ stock: 12, status: 'low' },
					{ stock: 78, status: 'good' },
				].map((product, i) => (
					<motion.div
						key={i}
						whileHover={{ scale: 1.02 }}
						className={cn(
							'bg-white dark:bg-neutral-900 rounded p-1 border relative overflow-hidden',
							product.status === 'critical'
								? 'border-red-300 dark:border-red-700'
								: product.status === 'low'
									? 'border-orange-300 dark:border-orange-700'
									: 'border-neutral-200 dark:border-neutral-800',
						)}>
						<div className="absolute bottom-0 left-0 right-0 h-0.5">
							<motion.div
								initial={{ width: 0 }}
								animate={{ width: `${product.stock}%` }}
								transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
								className={cn(
									'h-full',
									product.status === 'critical'
										? 'bg-red-500'
										: product.status === 'low'
											? 'bg-orange-500'
											: 'bg-neutral-300 dark:bg-neutral-600',
								)}
							/>
						</div>

						<div className="flex gap-1">
							<div
								className={cn(
									'h-5 w-5 rounded flex items-center justify-center',
									product.status === 'critical'
										? 'bg-red-50 dark:bg-red-900/20'
										: 'bg-neutral-100 dark:bg-neutral-800',
								)}>
								<div
									className={cn(
										'w-3 h-3 rounded',
										product.status === 'critical'
											? 'bg-red-200 dark:bg-red-800'
											: 'bg-neutral-200 dark:bg-neutral-700',
									)}
								/>
							</div>
							<div className="flex-1">
								<div className="h-1 w-8 bg-neutral-200 dark:bg-neutral-700 rounded mb-0.5" />
							</div>
						</div>

						<div className="flex justify-between items-center">
							<div className="flex gap-0.5">
								<div className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
								<div className="h-1 w-3 bg-neutral-200 dark:bg-neutral-700 rounded" />
							</div>
							{product.status === 'critical' && (
								<div className="h-2 w-2 rounded-full bg-red-500 flex items-center justify-center">
									<div className="h-1 w-1 rounded-full bg-white" />
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

// Reports & Exports
const ReportsExports = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full items-center justify-center">
			<motion.div whileHover={{ scale: 1.03 }} className="bg-white dark:bg-neutral-900 rounded-lg p-2.5 border border-neutral-200 dark:border-neutral-800 w-full max-w-[180px]">
				<div className="flex items-center gap-1.5 mb-2">
					<div className="h-5 w-5 rounded bg-neutral-900 dark:bg-white flex items-center justify-center">
						<svg className="w-3 h-3 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					</div>
					<div className="h-1.5 w-14 bg-neutral-200 dark:bg-neutral-700 rounded" />
				</div>
				<div className="space-y-1 mb-2">
					{[1, 2, 3].map((i) => (
						<div key={i} className="h-1 bg-neutral-200 dark:bg-neutral-700 rounded" style={{ width: `${80 - i * 15}%` }} />
					))}
				</div>
				<div className="flex gap-1">
					<div className="h-4 px-2 bg-neutral-200 dark:bg-neutral-700 rounded text-[9px] flex items-center">XLS</div>
					<div className="h-4 px-2 bg-red-500 rounded text-white text-[9px] flex items-center">PDF</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

// Customization
const Customization = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-col w-full h-full gap-2">
			<div className="flex items-center justify-between">
				<div className="h-2.5 w-10 bg-neutral-200 dark:bg-neutral-700 rounded" />
				<div className="flex gap-1">
					<div className="h-2.5 w-2.5 rounded bg-neutral-200 dark:bg-neutral-700" />
					<div className="h-2.5 w-2.5 rounded bg-neutral-400 dark:bg-neutral-600" />
					<div className="h-2.5 w-2.5 rounded bg-neutral-900 dark:bg-white" />
				</div>
			</div>
			<div className="flex gap-1.5 flex-1">
				<motion.div whileHover={{ scale: 1.03 }} className="flex-1 bg-white dark:bg-neutral-900 rounded p-1.5 border border-neutral-200 dark:border-neutral-800">
					<div className="flex items-center gap-1 mb-1">
						<div className="h-1.5 w-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
						<div className="h-1 w-8 bg-neutral-200 dark:bg-neutral-700 rounded" />
					</div>
					<div className="h-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded mb-0.5" />
				</motion.div>
				<motion.div whileHover={{ scale: 1.03 }} className="flex-1 bg-neutral-900 dark:bg-white rounded p-1.5 border border-neutral-900 dark:border-white">
					<div className="flex items-center gap-1 mb-1">
						<div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-neutral-900" />
						<div className="h-1 w-8 bg-white dark:bg-neutral-900 rounded" />
					</div>
					<div className="h-1 w-full bg-white/80 dark:bg-neutral-900/80 rounded mb-0.5" />
				</motion.div>
			</div>
		</motion.div>
	);
};

const items = [
	{
		title: 'Real-Time Analytics',
		description: (
			<span className="text-sm">
				Track sales, inventory, and cash flow from a live dashboard.
			</span>
		),
		header: <AnalyticsDashboard />,
		className: 'md:col-span-2',
	},
	{
		title: 'Vendor & Supplier Management',
		description: (
			<span className="text-sm">
				Centralize supplier info, track purchase orders, and payments.
			</span>
		),
		header: <VendorManagement />,
		className: 'md:col-span-1',
	},
	{
		title: 'Inventory Management',
		description: (
			<span className="text-sm">
				Multi-warehouse stock tracking with product variants.
			</span>
		),
		header: <InventoryManagement />,
		className: 'md:col-span-1',
	},
	{
		title: 'Cloud-Based & Secure',
		description: (
			<span className="text-sm">
				Access from anywhere. Role-based permissions and auto backups.
			</span>
		),
		header: <CloudSecure />,
		className: 'md:col-span-1',
	},
	{
		title: 'Reports & Exports',
		description: (
			<span className="text-sm">
				Generate reports in one click. Export to Excel or PDF.
			</span>
		),
		header: <ReportsExports />,
		className: 'md:col-span-1',
	},
	{
		title: 'Customization',
		description: (
			<span className="text-sm">
				Tailor workflows, fields, and dashboards to fit your business needs.
			</span>
		),
		header: <Customization />,
		className: 'md:col-span-1',
	},
	{
		title: 'Online Store',
		description: (
			<span className="text-sm">
				Launch a branded storefront with inventory sync.
			</span>
		),
		header: <OnlineStore />,
		className: 'md:col-span-2',
	},
];
