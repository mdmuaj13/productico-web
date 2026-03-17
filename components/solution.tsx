'use client';

import {
	Activity,
	BadgeCheck,
	Clock,
	FileDown,
	ShieldCheck,
	Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Solution() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-white py-32 lg:py-40"
		>
			{/* Animated background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[20px_20px]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(239,68,68,0.08),transparent)]" />
			</div>

			<motion.div
				style={{ opacity }}
				className="relative mx-auto max-w-6xl px-6 sm:px-8"
			>
				<div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
					{/* Left - Content */}
					<motion.div style={{ y: y1 }} className="space-y-8">
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
							className="inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-linear-to-r from-red-50 to-orange-50 px-5 py-2 text-sm font-medium text-red-900 shadow-sm"
						>
							<motion.div
								animate={{ rotate: [0, 10, -10, 0] }}
								transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
							>
								<Sparkles className="size-4 text-red-600" />
							</motion.div>
							Invoicing that feels premium
						</motion.div>

						{/* Heading */}
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="text-balance text-4xl font-semibold leading-tight tracking-tight lg:text-5xl"
						>
							Look professional.
							<br />
							<span className="bg-linear-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent">
								Get paid faster.
							</span>
						</motion.h2>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
							className="max-w-lg text-balance text-lg text-zinc-600 leading-relaxed"
						>
							Send clean, branded invoices for every order—automatically. Track
							what's paid, what's due, and share PDF invoices in seconds.
						</motion.p>

						{/* Feature Pills */}
						<div className="grid gap-4 pt-4 sm:grid-cols-2">
							{features.map((feature, index) => (
								<FeaturePill
									key={feature.title}
									icon={feature.icon}
									title={feature.title}
									desc={feature.desc}
									index={index}
								/>
							))}
						</div>

						{/* Trust Badge */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 pt-4"
						>
							<span className="inline-flex items-center gap-2 font-medium text-zinc-800">
								<ShieldCheck className="size-4.5 text-emerald-600" />
								Secure & audit-ready
							</span>
							<span className="h-4 w-px bg-zinc-300" />
							<span>Works with Productico reports</span>
						</motion.div>
					</motion.div>

					{/* Right - Visual */}
					<motion.div style={{ y: y2 }} className="relative">
						{/* Main Card */}
						<motion.div
							initial={{ opacity: 0, rotate: 2 }}
							whileInView={{ opacity: 1, rotate: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
							className="relative"
						>
							<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-200/50">
								{/* Invoice Image */}
								<div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-zinc-100 to-zinc-50">
									<Image
										src="/images/invoice-list.png"
										className="h-full w-full object-cover"
										alt="Invoice preview"
										width={1207}
										height={929}
										priority
									/>

									{/* Shine effect */}
									<motion.div
										animate={{
											x: ['-100%', '200%'],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											repeatDelay: 4,
											ease: 'linear',
										}}
										className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
									/>
								</div>

								{/* Corner accents */}
								<div className="absolute -left-1 -top-1 size-24 rounded-tl-3xl border-l-2 border-t-2 border-red-500" />
								<div className="absolute -right-1 -bottom-1 size-24 rounded-br-3xl border-r-2 border-b-2 border-orange-500" />
							</div>

							{/* Floating Stat Card 1 */}
							<motion.div
								initial={{ opacity: 0, x: -30, y: 20 }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								animate={{
									opacity: 1,
									x: 0,
									y: [0, -8, 0],
								}}
								transition={{
									opacity: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
									x: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
									y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
								}}
								className="absolute -left-4 bottom-16 hidden sm:block"
							>
								<div className="rounded-2xl border border-zinc-200 bg-white/95 p-5 shadow-xl shadow-zinc-200/50 backdrop-blur-sm">
									<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
										This Month
									</p>
									<motion.p
										initial={{ scale: 0.8 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										className="mt-2 text-2xl font-bold text-zinc-900 tracking-tight"
									>
										৳ 2,48,900
									</motion.p>
									<div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
										<motion.div
											animate={{ scale: [1, 1.1, 1] }}
											transition={{ duration: 2, repeat: Infinity }}
										>
											<Activity className="size-3 text-emerald-600" />
										</motion.div>
										<span className="text-xs font-semibold text-emerald-700">
											+18% paid faster
										</span>
									</div>
								</div>
							</motion.div>

							{/* Floating Stat Card 2 */}
							<motion.div
								initial={{ opacity: 0, x: 30, y: 20 }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								animate={{
									opacity: 1,
									x: 0,
									y: [0, -6, 0],
								}}
								transition={{
									opacity: { duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
									x: { duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
									y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
								}}
								className="absolute -right-4 top-12 hidden sm:block"
							>
								<div className="rounded-2xl border border-zinc-200 bg-white/95 p-5 shadow-xl shadow-zinc-200/50 backdrop-blur-sm">
									<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
										Payment Status
									</p>
									<div className="mt-3 space-y-2.5">
										<div className="flex items-center gap-2">
											<motion.span
												animate={{ scale: [1, 1.2, 1] }}
												transition={{ duration: 2, repeat: Infinity }}
												className="inline-flex size-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"
											/>
											<span className="text-sm font-semibold text-zinc-800">Paid</span>
											<span className="ml-auto text-xs font-medium text-zinc-500">
												24
											</span>
										</div>
										<div className="flex items-center gap-2">
											<motion.span
												animate={{ opacity: [1, 0.5, 1] }}
												transition={{ duration: 2, repeat: Infinity }}
												className="inline-flex size-2.5 rounded-full bg-amber-500"
											/>
											<span className="text-sm font-semibold text-zinc-800">Due</span>
											<span className="ml-auto text-xs font-medium text-zinc-500">
												8
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>

						{/* Caption */}
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className="mt-6 text-center text-sm text-zinc-500"
						>
							Auto-generated invoices with branding, status tracking, and one-click
							export.
						</motion.p>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}

const features = [
	{
		icon: <Clock className="size-5" />,
		title: 'Generate instantly',
		desc: 'Create invoices on order confirmation.',
	},
	{
		icon: <Activity className="size-5" />,
		title: 'Payment tracking',
		desc: 'Paid / due / overdue at a glance.',
	},
	{
		icon: <FileDown className="size-5" />,
		title: 'PDF export & share',
		desc: 'Download or send to customers.',
	},
	{
		icon: <BadgeCheck className="size-5" />,
		title: 'Your branding',
		desc: 'Logo, company info, signature.',
	},
];

function FeaturePill({
	icon,
	title,
	desc,
	index,
}: {
	icon: React.ReactNode;
	title: string;
	desc: string;
	index: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{
				duration: 0.5,
				delay: 0.3 + index * 0.1,
				ease: [0.16, 1, 0.3, 1],
			}}
			whileHover={{ scale: 1.02, y: -3 }}
			className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4.5 shadow-sm transition-all hover:shadow-md hover:border-red-200"
		>
			<div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-shadow">
				{icon}
			</div>
			<div className="min-w-0">
				<p className="text-sm font-semibold text-zinc-900">{title}</p>
				<p className="mt-0.5 text-xs text-zinc-500 leading-relaxed">{desc}</p>
			</div>
		</motion.div>
	);
}
