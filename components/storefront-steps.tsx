'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Store, Globe, Palette } from 'lucide-react';

const features = [
	{
		step: 'Step 1',
		title: 'Set up your brand',
		content:
			'Add your logo, business name, description, and contact info. First impressions matter.',
		icon: <Store className="text-primary h-6 w-6" />,
		image: '/screenshots/setup.png',
	},
	{
		step: 'Step 2',
		title: 'Add your products',
		content:
			'Upload products with photos, pricing, variants, and inventory. Everything syncs automatically.',
		icon: <Store className="text-primary h-6 w-6" />,
		image: '/screenshots/products.png',
	},
	{
		step: 'Step 3',
		title: 'Customize the look',
		content:
			'Pick a theme and adjust layout, colors, and typography to match your brand.',
		icon: <Palette className="text-primary h-6 w-6" />,
		image: '/screenshots/theme.png',
	},
	{
		step: 'Step 4',
		title: 'Go live',
		content:
			'Publish your store with one click. Connect a custom domain for a professional, branded URL.',
		icon: <Globe className="text-primary h-6 w-6" />,
		image: '/screenshots/live.png',
	},
];

export default function StorefrontSteps() {
	const [currentFeature, setCurrentFeature] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (progress < 100) {
				setProgress((prev) => prev + 100 / (4000 / 100));
			} else {
				setCurrentFeature((prev) => (prev + 1) % features.length);
				setProgress(0);
			}
		}, 100);

		return () => clearInterval(timer);
	}, [progress]);

	return (
		<section className="relative overflow-hidden bg-background py-24 lg:py-32">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.15]" />
				<div className="from-primary/5 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-strips))]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="relative mx-auto mb-16 max-w-2xl sm:text-center">
					<div className="relative z-10">
						<h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
							Launch your storefront in minutes
						</h2>
						<p className="text-muted-foreground font-geist mt-4 md:text-lg">
							A branded online store with products, cart, and checkout — no developers needed.
						</p>
					</div>
					<div
						className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
						style={{
							background:
								'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
						}}></div>
				</motion.div>

				{/* Content Grid */}
				<div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12">
					{/* Left: Features List */}
					<div className="order-2 space-y-6 md:order-1 md:space-y-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								className="group flex cursor-pointer items-center gap-4 md:gap-6"
								initial={{ opacity: 0.4, x: -10 }}
								animate={{
									opacity: index === currentFeature ? 1 : 0.4,
									x: 0,
								}}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								onClick={() => setCurrentFeature(index)}>
								<motion.div
									className={cn(
										'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 transition-all duration-300',
										index === currentFeature
											? 'border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20'
											: 'border-muted bg-muted text-muted-foreground',
									)}
									animate={{
										scale: index === currentFeature ? 1.05 : 1,
									}}
									transition={{ duration: 0.3 }}>
									{feature.icon}
								</motion.div>

								<div className="flex-1 min-w-0">
									<h3 className="text-lg font-semibold md:text-xl transition-colors duration-300">
										{feature.title}
									</h3>
									<p className="text-muted-foreground text-sm md:text-base line-clamp-2">
										{feature.content}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Right: Image Display */}
					<div className="order-1 md:order-2">
						<div
							className={cn(
								'border-primary/20 relative h-[280px] overflow-hidden rounded-2xl border shadow-xl shadow-primary/10 sm:h-[350px] md:h-[400px] lg:h-[450px]',
							)}>
							<AnimatePresence mode="wait">
								{features.map(
									(feature, index) =>
										index === currentFeature && (
											<motion.div
												key={index}
												className="absolute inset-0 overflow-hidden"
												initial={{ y: 50, opacity: 0, scale: 0.95 }}
												animate={{ y: 0, opacity: 1, scale: 1 }}
												exit={{ y: -50, opacity: 0, scale: 0.95 }}
												transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
												<Image
													src={feature.image}
													alt={`Productico storefront setup - ${feature.title}: ${feature.content}`}
													className="h-full w-full object-cover"
													width={1000}
													height={600}
												/>
												<div className="from-background via-background/80 to-background/40 absolute inset-0 bg-linear-to-t" />

												{/* Step Badge */}
												<div className="bg-primary absolute left-4 top-4 rounded-lg px-3 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg">
													{feature.step}
												</div>
											</motion.div>
										),
								)}
							</AnimatePresence>

							{/* Progress Bar */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
								<motion.div
									className="h-full bg-primary"
									initial={{ width: 0 }}
									animate={{ width: `${progress}%` }}
									transition={{ duration: 0.1 }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
