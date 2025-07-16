import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	Settings2,
	Sparkles,
	Zap,
	LucideIcon,
	BookText,Store, 
	HandFist,
} from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
	icon: LucideIcon;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: Zap,
		title: 'Real-Time Analytics',
		description:
			'Access insightful analytics and reports in real-time to make data-driven decisions and monitor the health of your business.',
	},
	{
		icon: HandFist,
		title: 'Vendor and Supplier Management',
		description:
			'Optimize your supply chain by efficiently managing relationships with vendors and suppliers through integrated tools.',
	},
	{
		icon: Sparkles,
		title: 'Cloud-Based Infrastructure',
		description:
			'Leverage the benefits of a cloud-based ERP solution, including scalability, accessibility, and reduced infrastructure costs.',
	},
	{
		icon: Store,
		title: 'E-Commerce shop',
		description:
			'Unlock a world of convenience and setup your own customized e-commerce shop with minimal effort.',
	},
	{
		icon: Settings2,
		title: 'Customer Relationship Management (CRM)',
		description:
			'Strengthen customer relationships with CRM functionalities that enhance lead management, sales processes, and customer interactions.',
	},
	{
		icon: BookText,
		title: 'Report Generation',
		description:
			'Try our one click report generation feature and share them with your team. Download and store them in excel or pdf format.',
	},
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
	const IconComponent = feature.icon;

	return (
		<Card className="group shadow-zinc-950/5">
			<CardHeader className="pb-3">
				<CardDecorator>
					<IconComponent className="size-6" aria-hidden />
				</CardDecorator>

				<h3 className="mt-6 font-medium">{feature.title}</h3>
			</CardHeader>

			<CardContent>
				<p className="text-sm text-left">{feature.description}</p>
			</CardContent>
		</Card>
	);
};

export default function FeaturesGrid() {
	return (
		<section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
			<div className="@container mx-auto max-w-6xl px-6">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Built to cover your needs
					</h2>
					{/* <p className="mt-4">
						Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
						repellendus.
					</p> */}
				</div>
				<div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
					{features.map((feature, index) => (
						<FeatureCard key={index} feature={feature} />
					))}
				</div>
			</div>
		</section>
	);
}

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
