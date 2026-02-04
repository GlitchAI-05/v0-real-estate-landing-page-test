'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-background.jpg"
        alt="Beautiful modern home at twilight"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      {/* Subtle cobalt tint overlay */}
      <div className="absolute inset-0 bg-primary/5" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Eyebrow */}
        <p className="mb-4 animate-fade-in text-sm font-medium uppercase tracking-widest text-primary">
          Pretoria East Property Specialist
        </p>

        {/* Headline */}
        <h1 className="mb-6 animate-fade-up text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Sell your home with confidence
        </h1>

        {/* Subheadline */}
        <p 
          className="mx-auto mb-10 max-w-2xl animate-fade-up text-pretty text-lg text-muted-foreground md:text-xl"
          style={{ animationDelay: '100ms' }}
        >
          Local expertise. Honest guidance. Results that speak for themselves.
        </p>

        {/* CTAs */}
        <div 
          className="flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '200ms' }}
        >
          <Button
            size="lg"
            onClick={onOpenModal}
            className="min-w-[200px] px-8 py-6 text-base transition-transform hover:scale-[1.02]"
          >
            Get a Free Valuation
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="group min-w-[200px] px-8 py-6 text-base bg-transparent"
          >
            Meet Tanya
            <ArrowDown className="ml-2 size-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
