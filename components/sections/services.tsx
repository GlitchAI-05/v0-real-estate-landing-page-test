'use client'

import { useEffect, useRef, useState } from 'react'
import { BarChart3, Camera, Handshake, HeartHandshake } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description:
      'Accurate pricing based on comprehensive local market data and recent sales in your area.',
  },
  {
    icon: Camera,
    title: 'Professional Marketing',
    description:
      'High-quality photography, staging advice, and optimised listings to attract qualified buyers.',
  },
  {
    icon: Handshake,
    title: 'Expert Negotiation',
    description:
      'Skilled negotiation to maximise your sale price while ensuring a smooth transaction.',
  },
  {
    icon: HeartHandshake,
    title: 'End-to-End Support',
    description:
      'From listing to transfer, we handle everything so you can focus on your next chapter.',
  },
]

export function Services() {
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
    <section id="services" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            What We Offer
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services designed for sellers
          </h2>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 ${isVisible ? 'stagger-children' : ''}`}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="glass hover-lift rounded-xl p-8"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
