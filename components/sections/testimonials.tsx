'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Tanya made selling our family home stress-free. Her market knowledge is unmatched and she guided us through every step with patience and professionalism.',
    author: 'Johan & Marie V.',
    location: 'Faerie Glen',
    rating: 5,
  },
  {
    quote:
      'Professional, responsive, and achieved above asking price. Tanya understood exactly what we wanted and delivered beyond our expectations.',
    author: 'Pieter S.',
    location: 'Moreleta Park',
    rating: 5,
  },
  {
    quote:
      'We were nervous first-time sellers but Tanya guided us every step of the way. Her honest advice and calm demeanour made all the difference.',
    author: 'Lerato M.',
    location: 'Waterkloof',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
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
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Client Stories
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What our clients say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={ref}
          className={`grid gap-6 md:grid-cols-3 ${isVisible ? 'stagger-children' : ''}`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass hover-lift flex flex-col rounded-xl p-8"
            >
              {/* Quote Icon */}
              <Quote className="mb-4 size-8 text-primary/20" />

              {/* Quote Text */}
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Author */}
              <div className="mt-4 border-t pt-4">
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
