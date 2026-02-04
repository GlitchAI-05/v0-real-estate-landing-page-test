'use client'

import { useEffect, useRef, useState } from 'react'

const metrics = [
  {
    value: 21,
    suffix: 'Days',
    description: 'Average time to first serious enquiry',
  },
  {
    value: 97,
    suffix: '%',
    description: 'Asking price achieved on average',
  },
  {
    value: 150,
    suffix: '+',
    description: 'Properties sold in Pretoria East',
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="flex items-baseline justify-center gap-1">
      <span className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
        {displayValue}
      </span>
      <span className="text-2xl font-semibold text-primary sm:text-3xl">
        {suffix}
      </span>
    </div>
  )
}

export function TrustMetrics() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.description}
              className="glass hover-lift rounded-xl p-8 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <p className="mt-3 text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
