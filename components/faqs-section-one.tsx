'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is an ERP system, and how does it benefit my business?',
            answer: 'Enterprise resource planning (ERP) is a software that helps organizations handle their everyday tasks like accounting, purchasing, project management, financial planning, risk management, and supply chain operations.',
        },
        {
            id: 'item-2',
            question: 'Is the ERP application cloud-based or on-premise?',
            answer: "In simple terms, cloud ERP is when a company stores its important data on a vendor's platform. On-premise ERP means the company keeps its data on its own hardware, right at its own location.",
        },
        {
            id: 'item-3',
            question: 'Can I customize the ERP workflows to match the specific needs of my business?',
            answer: "These modules cover a lot, but customization lets you adjust them to fit your specific needs. Whether it's adding new things, changing existing ones, or creating new modules, customization makes sure your ERP system fits your business perfectly.",
        },
        {
            id: 'item-4',
            question: 'What types of businesses or industries is your ERP application designed for?',
            answer: 'My ERP application is versatile, serving diverse industries such as f-commerce, agency, photography, and Manufacturing. Its adaptability makes it suitable for businesses of varying sizes, streamlining processes for enhanced efficiency and management across different sectors.',
        },
        {
            id: 'item-5',
            question: 'What is the pricing structure for your ERP application, and are there any hidden fees?',
            answer: 'Our ERP application offers a free plan with select modules. The Pro plan is $9/month. Enterprise pricing is customized based on client needs. No hidden fees—transparent pricing for tailored solutions.',
        },
        {
            id: 'item-6',
            question: "Is there a trial period or demo available for us to assess the ERP system's suitability for our business?",
            answer: "Certainly! We offer a free trial period and provide demos to help you assess the ERP system's fit for your business. Experience its features firsthand before making an informed decision tailored to your needs.",
        },
        {
            id: 'item-7',
            question: 'Can Productico Integrate with Other Software?',
            answer: 'Absolutely! Productico seamlessly integrates with various software applications, enhancing connectivity and efficiency in your workflow. Enjoy a smooth and collaborative experience across your preferred tools with our versatile integration capabilities.',
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
