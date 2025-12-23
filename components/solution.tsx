import {
	Activity,
	BadgeCheck,
	Clock,
	FileDown,
	ShieldCheck,
	Sparkles,
} from 'lucide-react';
import Image from 'next/image';

export default function Solution() {
	return (
		<section className="relative overflow-hidden py-16">
			{/* background */}
			<div aria-hidden className="absolute inset-0 -z-10">
				<div className="absolute -top-32 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full  blur-3xl" />
				<div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full  blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,24,27,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
			</div>

			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
					{/* left */}
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-100">
							<Sparkles className="size-4" />
							Invoicing that feels premium
						</div>

						<h2 className="mt-5 text-balance text-3xl font-semibold leading-tight lg:text-4xl">
							Look professional.
							<br />
							Get paid faster.
						</h2>

						<p className="mt-5 max-w-xl text-pretty text-zinc-600 dark:text-zinc-300">
							Send clean, branded invoices for every order—automatically. Track
							what’s paid, what’s due, and share PDF invoices in seconds.
						</p>

						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							<FeaturePill
								icon={<Clock className="size-5" />}
								title="Generate instantly"
								desc="Create invoices on order confirmation."
							/>
							<FeaturePill
								icon={<Activity className="size-5" />}
								title="Payment status tracking"
								desc="Paid / due / overdue at a glance."
							/>
							<FeaturePill
								icon={<FileDown className="size-5" />}
								title="PDF export & share"
								desc="Download or send to customers."
							/>
							<FeaturePill
								icon={<BadgeCheck className="size-5" />}
								title="Your branding"
								desc="Logo, company info, and signature."
							/>
						</div>

						<div className="mt-8 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
							<span className="inline-flex items-center gap-2">
								<ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
								Secure & audit-ready
							</span>
							<span className="h-4 w-px bg-zinc-200 dark:bg-white/10" />
							<span>Works with Productico reports</span>
						</div>
					</div>

					{/* right */}
					<div className="relative">
						<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/60 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
							<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 to-transparent p-px dark:from-white/10">
								<div className="relative rounded-[15px] bg-white dark:bg-zinc-950">
									<Image
										src="/images/invoice.webp"
										className="hidden h-full w-full rounded-[15px] object-cover dark:block"
										alt="Invoice preview dark"
										width={1207}
										height={929}
										priority={false}
									/>
									<Image
										src="/images/invoice-list.png"
										className="h-full w-full rounded-[15px] object-cover shadow dark:hidden"
										alt="Invoice preview light"
										width={1207}
										height={929}
										priority={false}
									/>

									{/* subtle overlay highlight */}
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 rounded-[15px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]"
									/>
								</div>
							</div>

							{/* floating stats */}
							<div className="pointer-events-none absolute -left-3 bottom-10 hidden sm:block">
								<div className="rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
									<p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
										This month
									</p>
									<p className="mt-1 text-lg font-semibold">৳ 2,48,900</p>
									<p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
										+18% paid faster
									</p>
								</div>
							</div>

							<div className="pointer-events-none absolute -right-3 top-10 hidden sm:block">
								<div className="rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
									<p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
										Status
									</p>
									<div className="mt-2 flex items-center gap-2">
										<span className="inline-flex size-2 rounded-full bg-emerald-500" />
										<p className="text-sm font-medium">Paid</p>
									</div>
									<div className="mt-2 flex items-center gap-2">
										<span className="inline-flex size-2 rounded-full bg-amber-500" />
										<p className="text-sm font-medium">Due</p>
									</div>
								</div>
							</div>
						</div>

						{/* small caption */}
						<p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
							Auto-generated invoices with branding, status, and export.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function FeaturePill({
	icon,
	title,
	desc,
}: {
	icon: React.ReactNode;
	title: string;
	desc: string;
}) {
	return (
		<div className="flex gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
			<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white shadow-sm dark:from-white/20 dark:to-white/5">
				{icon}
			</div>
			<div className="min-w-0">
				<p className="text-sm font-semibold">{title}</p>
				<p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">{desc}</p>
			</div>
		</div>
	);
}
