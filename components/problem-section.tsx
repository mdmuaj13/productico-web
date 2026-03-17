'use client';

import {
	AlertTriangle,
	ArrowDown,
	Box,
	ChartNoAxesColumn,
	ScanLine,
	Warehouse,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PainPoint {
	icon: React.ReactNode;
	number: string;
	title: string;
	description: string;
}

// Display first 5, then show remaining count
const totalProblems = 12;
const displayedCount = 5;

const painPoints: PainPoint[] = [
	{
		icon: <Box className="h-5 w-5" />,
		number: '01',
		title: 'Stock mismatch',
		description: 'Store shows available, warehouse is empty.',
	},
	{
		icon: <ScanLine className="h-5 w-5" />,
		number: '02',
		title: 'Lost orders',
		description: 'Orders scattered across multiple places.',
	},
	{
		icon: <ChartNoAxesColumn className="h-5 w-5" />,
		number: '03',
		title: 'No visibility',
		description: 'Numbers everywhere, but no clear picture.',
	},
	{
		icon: <Warehouse className="h-5 w-5" />,
		number: '04',
		title: 'Warehouse chaos',
		description: 'Multiple locations, zero visibility.',
	},
	{
		icon: <AlertTriangle className="h-5 w-5" />,
		number: '05',
		title: 'Growth = mess',
		description: 'Scaling up means compounding problems.',
	},
];

const remainingCount = totalProblems - displayedCount;

function MoreIndicator({ count }: { count: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.45 }}
		>
			<div className="flex items-center gap-4 py-5 border-b border-border">
				<span className="text-sm font-mono text-muted-foreground/30 mt-1 min-w-[2ch]">
					…
				</span>
				<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground/50">
					<span className="text-sm font-medium">+{count}</span>
				</div>
				<div className="flex-1">
					<p className="text-sm text-muted-foreground/70">
						more common headaches businesses face daily
					</p>
				</div>
			</div>
		</motion.div>
	);
}

function ProblemCard({ item, index }: { item: PainPoint; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, delay: index * 0.08 }}
		>
			<div className="group flex items-start gap-4 py-5 border-b border-border last:border-0">
				<span className="text-sm font-mono text-muted-foreground/50 mt-1 min-w-[2ch]">
					{item.number}
				</span>
				<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
					{item.icon}
				</div>
				<div className="flex-1 space-y-1">
					<h3 className="font-semibold text-foreground">
						{item.title}
					</h3>
					<p className="text-sm text-muted-foreground">
						{item.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export default function ProblemSection() {
	return (
		<section className="relative overflow-hidden bg-background py-24 lg:py-32">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.15]" />
				<div className="from-primary/5 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))]" />
			</div>

			<div className="relative mx-auto max-w-3xl px-6 sm:px-8">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-8 flex justify-center"
				>
					<div className="border-border bg-background/80 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm">
						<AlertTriangle className="h-3.5 w-3.5 text-primary" />
						<span className="font-medium text-foreground">The problem</span>
					</div>
				</motion.div>

				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
				>
					Running a business
					<br />
					<span className="bg-linear-to-tl from-primary/20 via-foreground/85 to-foreground/50 bg-clip-text text-transparent">
						shouldn't be this hard
					</span>
				</motion.h2>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-muted-foreground mx-auto mt-6 max-w-xl text-center text-base sm:text-lg"
				>
					Spreadsheets, inventory apps, order forms, storefronts—all duct-taped
					together. Something always breaks.
				</motion.p>

				{/* Problem list */}
				<div className="mt-16 space-y-0">
					{painPoints.map((item, index) => (
						<ProblemCard key={index} item={item} index={index} />
					))}
					{remainingCount > 0 && <MoreIndicator count={remainingCount} />}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="mt-16 pt-8 border-t border-border"
				>
					<a
						href="#features"
						className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
					>
						<span>See how Productico helps</span>
						<ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
