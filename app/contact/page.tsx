import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact Tanya Bossof',
  description:
    'Get in touch with Tanya Bossof, Principal Agent at Cobalt Realty. Expert property services in Pretoria East.',
}

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+27 12 345 6789',
    href: 'tel:+27123456789',
    description: 'Call during office hours',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+27 12 345 6789',
    href: 'https://wa.me/27123456789?text=Hi%20Tanya%2C%20I%27m%20interested%20in%20selling%20my%20property.',
    description: 'Quick response on WhatsApp',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'tanya@cobaltrealty.co.za',
    href: 'mailto:tanya@cobaltrealty.co.za',
    description: 'For detailed enquiries',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            Cobalt Realty
          </Link>
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Agent Info */}
          <div>
            {/* Image */}
            <div className="relative mb-8 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
              <Image
                src="/images/agent-placeholder.jpg"
                alt="Tanya Bossof - Principal Agent at Cobalt Realty"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>

            {/* Name & Title */}
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
              Tanya Bossof
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Principal Agent, Cobalt Realty
            </p>

            {/* Bio */}
            <p className="text-muted-foreground">
              With over a decade of experience in Pretoria East property sales,
              I&apos;m committed to helping you achieve the best outcome for your
              property sale. Whether you have questions, need advice, or want to
              schedule a property valuation, I&apos;m here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('https') ? '_blank' : undefined}
                    rel={method.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                    className="glass hover-lift flex items-start gap-4 rounded-xl p-6 transition-all"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <method.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{method.label}</p>
                      <p className="text-primary">{method.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Info */}
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4 font-semibold text-foreground">Office Details</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Pretoria East, Gauteng
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Monday - Friday: 8am - 5pm</p>
                      <p>Saturday: 9am - 1pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="overflow-hidden rounded-xl border bg-muted">
              <div className="flex aspect-video items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 size-8 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    Map placeholder - Pretoria East
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Cobalt Realty. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
