'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.15]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 md:p-16 lg:p-20">
          {/* Background gradient circles */}
          <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
            <div className="absolute top-1/2 right-[-20%] aspect-square h-[600px] w-[600px] -translate-y-1/2">
              <div className="absolute inset-0 rounded-full bg-white opacity-10"></div>
              <div className="absolute inset-0 scale-[0.7] rounded-full bg-white opacity-10"></div>
              <div className="absolute inset-0 scale-[0.4] rounded-full bg-white opacity-10"></div>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="font-geist text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-primary-foreground/90 mt-4 max-w-2xl text-lg md:text-xl">
              Join thousands of product-based businesses already using Productico
              to manage inventory, sales, and operations from one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                asChild
                className="group bg-background text-primary hover:bg-background/90 inline-flex w-full items-center justify-between rounded-full px-6 sm:w-auto">
                <a href="https://tally.so/r/3yYzo6">
                  <span className="font-semibold">Start Free Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 bg-primary/10 text-primary-foreground hover:bg-primary/20 inline-flex w-full items-center justify-between rounded-full px-6 backdrop-blur-sm sm:w-auto">
                <a href="https://tally.so/r/3yYzo6">
                  <span>Schedule a Demo</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <p className="text-primary-foreground/70 mt-6 text-sm">
              No credit card required • Free 30-day trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
