import Link from 'next/link';
import { PrimaryLogo } from './primary-logo';

const links = [
	{
		title: 'Features',
		href: '#features',
	},
	{
		title: 'Solution',
		href: '#solution',
	},
	{
		title: 'Pricing',
		href: '#pricing',
	},
	{
		title: 'Contact',
		href: 'https://tally.so/r/3yYzo6',
	},
];

const socialLinks = [
	{
		name: 'X/Twitter',
		href: 'https://x.com/mdmuaj',
		icon: (
			<svg
				className="size-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true">
				<path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
			</svg>
		),
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/company/productico/?viewAsMember=true',
		icon: (
			<svg
				className="size-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true">
				<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
			</svg>
		),
	},
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/producticosaas',
		icon: (
			<svg
				className="size-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true">
				<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
			</svg>
		),
	},
	{
		name: 'Threads',
		href: 'https://www.threads.com/@mohaiminulhasanmuaz',
		icon: (
			<svg
				className="size-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				aria-hidden="true">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
				/>
			</svg>
		),
	},
];

export default function FooterSection() {
	return (
		<footer className="relative overflow-hidden bg-background">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-[0.03]">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[16px_16px]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8">
				{/* Logo */}
				<Link
					href="/"
					aria-label="go home"
					className="mx-auto mb-12 block size-fit">
					<PrimaryLogo />
				</Link>

				{/* Navigation Links */}
				<nav className="mb-10" aria-label="Footer navigation">
					<ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
						{links.map((link) => (
							<li key={link.title}>
								<Link
									href={link.href}
									className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200">
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Social Links */}
				<div className="mb-10 flex justify-center gap-6">
					{socialLinks.map((social) => (
						<Link
							key={social.name}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.name}
							className="text-muted-foreground hover:text-foreground transition-colors duration-200">
							{social.icon}
						</Link>
					))}
				</div>

				{/* Copyright */}
				<p className="text-muted-foreground text-center text-sm">
					© {new Date().getFullYear()} Producti.co. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
