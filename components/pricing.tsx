'use client';

import { buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import NumberFlow from '@number-flow/react';

// Define your plans
const plans = [
	{
		name: 'FREE',
		price: '0',
		yearlyPrice: '0',
		period: 'month',
		features: [
			'Live dashboard with KPIs',
			'Profit & loss snapshots',
			'Sales trends by day/week/month',
			'Vendor profiles & history',
			'Purchase order tracking',
			'Role-based permissions',
			'Automatic backups',
			'Basic inventory management',
			'One-click reports',
			'Excel/PDF export',
		],
		description:
			'Try Productico free for 1 month. Perfect for exploring the platform.',
		buttonText: 'Start Free Trial',
		href: 'https://tally.so/r/3yYzo6',
		isPopular: false,
	},
	{
		name: 'PROFESSIONAL',
		price: '19',
		yearlyPrice: '15',
		period: 'per month',
		features: [
			'Everything in Free',
			'Unlimited products',
			'Unlimited orders',
			'Custom domain',
			'Advanced analytics & reporting',
			'Priority support',
			'Team collaboration',
			'Due payment reminders',
			'Multiple warehouse support',
			'Product variants management',
			// 'Shareable report links',
		],
		description:
			'For growing businesses that need unlimited products and orders.',
		buttonText: 'Get Started',
		href: 'https://tally.so/r/3yYzo6',
		isPopular: true,
	},
	{
		name: 'ENTERPRISE',
		price: '199',
		yearlyPrice: '159',
		period: 'per month',
		features: [
			'Everything in Professional',
			'Custom domain with SSL',
			'Shareable report links',
			'Unlimited reports',
			'Custom storefront',
			'SLA agreement',
			'Dedicated account manager',
			'Custom integrations',
			'Advanced security features',
			'SSO authentication',
			'Priority support (24-hour response)',
		],
		description:
			'For large organizations that need custom solutions and dedicated support.',
		buttonText: 'Contact Sales',
		href: 'https://tally.so/r/3yYzo6',
		isPopular: false,
	},
];

interface PricingPlan {
	name: string;
	price: string;
	yearlyPrice: string;
	period: string;
	features: string[];
	description: string;
	buttonText: string;
	href: string;
	isPopular: boolean;
}

interface PricingProps {
	plans: PricingPlan[];
	title?: string;
	description?: string;
}

export default function CongestedPricing() {
	const [isMonthly, setIsMonthly] = useState(true);
	const isDesktop = useMediaQuery('(min-width: 768px)');
	const switchRef = useRef<HTMLButtonElement>(null);

	const handleToggle = (checked: boolean) => {
		setIsMonthly(!checked);
		if (checked && switchRef.current) {
			const rect = switchRef.current.getBoundingClientRect();
			const x = rect.left + rect.width / 2;
			const y = rect.top + rect.height / 2;

			confetti({
				particleCount: 50,
				spread: 60,
				origin: {
					x: x / window.innerWidth,
					y: y / window.innerHeight,
				},
				colors: [
					'hsl(var(--primary))',
					'hsl(var(--accent))',
					'hsl(var(--secondary))',
					'hsl(var(--muted))',
				],
				ticks: 200,
				gravity: 1.2,
				decay: 0.94,
				startVelocity: 30,
				shapes: ['circle'],
			});
		}
	};

	return (
		<div className="py-20">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mb-12 space-y-4 text-center">
					<h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
						Simple pricing for growing manufacturing businesses
					</h2>
					<p className="text-muted-foreground text-lg">
						All plans include real-time analytics, vendor management, and
						cloud-based infrastructure.
					</p>
				</div>

				<div className="mb-10 flex justify-center">
					<label className="relative inline-flex cursor-pointer items-center">
						<Label>
							<Switch
								ref={switchRef as any}
								checked={!isMonthly}
								onCheckedChange={handleToggle}
								className="relative"
							/>
						</Label>
					</label>
					<span className="ml-2 font-semibold">
						Annual billing <span className="text-primary">(Save 20%)</span>
					</span>
				</div>

				<div className="sm:2 grid grid-cols-1 gap-4 md:grid-cols-3">
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							initial={{ y: 50, opacity: 1 }}
							whileInView={
								isDesktop
									? {
											y: plan.isPopular ? -20 : 0,
											opacity: 1,
											x: index === 2 ? -30 : index === 0 ? 30 : 0,
											scale: index === 0 || index === 2 ? 0.94 : 1.0,
										}
									: {}
							}
							viewport={{ once: true }}
							transition={{
								duration: 1.6,
								type: 'spring',
								stiffness: 100,
								damping: 30,
								delay: 0.4,
								opacity: { duration: 0.5 },
							}}
							className={cn(
								`bg-background relative rounded-2xl border-[1px] p-6 text-center lg:flex lg:flex-col lg:justify-center`,
								plan.isPopular ? 'border-primary border-2' : 'border-border',
								'flex flex-col',
								!plan.isPopular && 'mt-5',
								index === 0 || index === 2
									? 'z-0 translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] transform'
									: 'z-10',
								index === 0 && 'origin-right',
								index === 2 && 'origin-left',
							)}>
							{plan.isPopular && (
								<div className="bg-primary absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl px-2 py-0.5">
									<Star className="text-primary-foreground h-4 w-4 fill-current" />
									<span className="text-primary-foreground ml-1 font-sans font-semibold">
										Popular
									</span>
								</div>
							)}
							<div className="flex flex-1 flex-col">
								<h3 className="text-muted-foreground text-base font-semibold">
								{plan.name}
							</h3>
								<div className="mt-6 flex items-center justify-center gap-x-2">
									<span className="text-foreground text-5xl font-bold tracking-tight">
										<NumberFlow
											value={
												isMonthly
													? Number(plan.price)
													: Number(plan.yearlyPrice)
											}
											format={{
												style: 'currency',
												currency: 'USD',
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											}}
											transformTiming={{
												duration: 500,
												easing: 'ease-out',
											}}
											willChange
											className="font-variant-numeric: tabular-nums"
										/>
									</span>
									{plan.period !== 'Next 3 months' && (
										<span className="text-muted-foreground text-sm leading-6 font-semibold tracking-wide">
											/ {plan.period}
										</span>
									)}
								</div>

								<p className="text-muted-foreground text-xs leading-5">
									{isMonthly ? 'billed monthly' : 'billed annually'}
								</p>

								<ul className="mt-5 flex flex-col gap-2">
									{plan.features.map((feature, idx) => (
										<li key={idx} className="flex items-start gap-2">
											<Check className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
											<span className="text-left">{feature}</span>
										</li>
									))}
								</ul>

								<hr className="my-4 w-full" />

								<Link
									prefetch={false}
									href={plan.href}
									className={cn(
										buttonVariants({
											variant: 'outline',
										}),
										'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter',
										'hover:bg-primary hover:text-primary-foreground hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-1',
										plan.isPopular
											? 'bg-primary text-primary-foreground'
											: 'bg-background text-foreground',
									)}>
									{plan.buttonText}
								</Link>
								<p className="text-muted-foreground mt-6 text-xs leading-5">
									{plan.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
