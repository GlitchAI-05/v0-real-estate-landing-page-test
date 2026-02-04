'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  onOpenModal: () => void
  variant?: 'default' | 'accent'
}

export function CTABanner({ onOpenModal, variant = 'default' }: CTABannerProps) {
  const isAccent = variant === 'accent'

  return (
    <section
      className={`py-16 lg:py-20 ${
        isAccent ? 'bg-primary text-primary-foreground' : 'bg-muted/50'
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <h2
          className={`mb-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl ${
            isAccent ? 'text-primary-foreground' : 'text-foreground'
          }`}
        >
          Ready to sell your property?
        </h2>
        <p
          className={`mb-8 text-pretty ${
            isAccent ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
        >
          Get a free, no-obligation property valuation today. Discover what your
          home is worth in the current market.
        </p>
        <Button
          size="lg"
          onClick={onOpenModal}
          variant={isAccent ? 'secondary' : 'default'}
          className="group px-8 py-6 text-base transition-transform hover:scale-[1.02]"
        >
          Get Your Free Valuation
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}
