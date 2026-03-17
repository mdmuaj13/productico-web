'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from '@/components/ui/accordion';

const items = [
	{
		id: '1',
		title: 'What is Productico?',
		content:
			'Productico is an all-in-one business management platform that helps you manage products, inventory, orders, warehouses, storefronts, invoicing, and fulfillment — from a single dashboard. Think of it as a central operating system for your product business.',
	},
	{
		id: '2',
		title: 'Who is Productico built for?',
		content:
			'Productico is designed for small and medium businesses that sell physical products — manufacturers, wholesalers, D2C brands, and retailers. If you manage inventory and process orders, Productico is built for you.',
	},
	{
		id: '3',
		title: 'Is Productico cloud-based?',
		content:
			'Yes. Productico is 100% cloud-based. Access your data from any device, anywhere. There are no servers to manage, no installations, and your data is automatically backed up.',
	},
	{
		id: '4',
		title: 'Can I create an online store with Productico?',
		content:
			'Yes. You can launch a branded storefront with product listings, a shopping cart, and checkout — all built in. You can also connect a custom domain so your store feels fully yours.',
	},
	{
		id: '5',
		title: 'Can I manage multiple warehouses?',
		content:
			'Yes. Productico supports multi-warehouse inventory management. You can track stock across locations, manage variant-level quantities, and receive low-stock alerts to prevent overselling.',
	},
	{
		id: '6',
		title: 'Is there a free trial?',
		content:
			'Yes. You can try Productico free for one full month — no credit card required. You\'ll get access to the core platform so you can explore and decide if it\'s right for your business.',
	},
	{
		id: '7',
		title: 'Can Productico integrate with other tools?',
		content:
			'Yes. Productico supports integrations with commonly used business tools. For custom or advanced integrations, our Enterprise plan includes dedicated integration support. Contact our team to discuss your specific needs.',
	},
	{
		id: '8',
		title: 'What kind of support do you offer?',
		content:
			'All plans include access to our help center and email support. Professional and Enterprise plans include priority support with faster response times. Enterprise customers also get a dedicated account manager.',
	},
];

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 10,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
			duration: 0.4,
		},
	}),
};

export default function Faq1() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<motion.h2
						className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						Frequently Asked{' '}
						<span className="from-primary bg-gradient-to-r to-rose-400 bg-clip-text text-transparent">
							Questions
						</span>
					</motion.h2>
					<motion.p
						className="text-muted-foreground mx-auto max-w-2xl md:text-lg"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						Everything you need to know about Productico and how it can help
						manage your business.
					</motion.p>
				</div>

				<motion.div
					className="relative mx-auto max-w-3xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}>
					{/* Decorative gradient */}
					<div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
					<div className="bg-primary/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />

					<Accordion
						type="single"
						collapsible
						className="border-border/40 bg-card/30 w-full rounded-xl border p-2 backdrop-blur-sm"
						defaultValue="1">
						{items.map((item, index) => (
							<motion.div
								key={item.id}
								custom={index}
								variants={fadeInAnimationVariants}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}>
								<AccordionItem
									value={item.id}
									className={cn(
										'bg-card/50 my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all',
										'data-[state=open]:bg-card/80 data-[state=open]:shadow-md',
									)}>
									<AccordionPrimitive.Header className="flex">
										<AccordionPrimitive.Trigger
											className={cn(
												'group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium',
												'hover:text-primary transition-all duration-300 outline-none',
												'focus-visible:ring-primary/50 focus-visible:ring-2',
												'data-[state=open]:text-primary',
											)}>
											{item.title}
											<PlusIcon
												size={18}
												className={cn(
													'text-primary/70 shrink-0 transition-transform duration-300 ease-out',
													'group-data-[state=open]:rotate-45',
												)}
												aria-hidden="true"
											/>
										</AccordionPrimitive.Trigger>
									</AccordionPrimitive.Header>
									<AccordionContent
										className={cn(
											'text-muted-foreground overflow-hidden pt-0 pb-4',
											'data-[state=open]:animate-accordion-down',
											'data-[state=closed]:animate-accordion-up',
										)}>
										<div className="border-border/30 border-t pt-3">
											{item.content}
										</div>
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</motion.div>

				{/* Footer CTA */}
				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}>
					<p className="text-muted-foreground">
						Can't find what you're looking for?{' '}
						<a
							href="/contact"
							className="text-primary font-medium underline-offset-4 hover:underline">
							Contact our support team →
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
