import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CtaTwo() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h2 className="text-foreground text-balance text-2xl font-semibold lg:text-3xl">Build 10x Faster with Productico</h2>
                        </div>
                        <div className="flex justify-end gap-3">
                            <Button
                                asChild
                                size="lg">
                                <Link href="#">Book A Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
