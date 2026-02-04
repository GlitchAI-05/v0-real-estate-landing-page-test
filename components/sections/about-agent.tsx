'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export function AboutAgent() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:order-1">
            <Image
              src="/images/agent-placeholder.jpg"
              alt="Tanya Bossof - Principal Agent at Cobalt Realty"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Content */}
          <div className="lg:order-0">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Meet Your Agent
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Tanya Bossof
            </h2>
            <p className="mb-2 text-lg text-muted-foreground">
              Principal Agent, Cobalt Realty
            </p>

            <div className="mb-8 space-y-4 text-muted-foreground">
              <p>
                With over a decade of experience in Pretoria East property sales,
                I&apos;ve helped hundreds of families navigate one of life&apos;s biggest
                decisions with confidence and clarity.
              </p>
              <p>
                My approach is simple: honest advice, transparent communication,
                and a genuine commitment to achieving the best outcome for you.
                Every property and every client is unique, and I take the time to
                understand your specific needs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <a
                href="tel:+27123456789"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                +27 12 345 6789
              </a>
              <a
                href="mailto:tanya@cobaltrealty.co.za"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                tanya@cobaltrealty.co.za
              </a>
            </div>

            {/* CTA */}
            <Button asChild className="group">
              <Link href="/contact">
                Contact Tanya
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
