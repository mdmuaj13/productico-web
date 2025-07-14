import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Solution() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
					<div className="lg:col-span-2">
						<div className="md:pr-6 lg:pr-0">
							<h2 className="text-3xl font-semibold lg:text-4xl">
								Look Professional,
								<br /> Get Paid
							</h2>
							<p className="mt-6">
								Create clean, branded invoices for every single order. Build
								customer trust and track your sales.
							</p>
						</div>
						<ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
							<li>
								<Mail className="size-5" />
								Generate Instantly
							</li>
							<li>
								<Zap className="size-5" />
								Track Payment Status
							</li>
							<li>
								<Activity className="size-5" />
								Share PDF Invoices
							</li>
							<li>
								<DraftingCompass className="size-5" />
								Your Branding
							</li>
						</ul>
					</div>
					<div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
						<div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
							<Image
								src="/images/invoice.webp"
								className="hidden h-full w-full rounded-[15px] object-cover dark:block"
								alt="payments illustration dark"
								width={1207}
								height={929}
							/>
							<Image
								src="/images/invoice-list.png"
								className="h-full w-full rounded-[15px] object-cover shadow dark:hidden"
								alt="payments illustration light"
								width={1207}
								height={929}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
