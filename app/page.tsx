'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { TrustMetrics } from '@/components/sections/trust-metrics'
import { Services } from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { AboutAgent } from '@/components/sections/about-agent'
import { FAQ } from '@/components/sections/faq'
import { CTABanner } from '@/components/sections/cta-banner'
import { ValuationModal } from '@/components/valuation-modal'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <Header onOpenModal={openModal} />

      <main>
        {/* Hero Section */}
        <Hero onOpenModal={openModal} />

        {/* Trust Metrics */}
        <TrustMetrics />

        {/* Services */}
        <Services />

        {/* CTA Banner 1 */}
        <CTABanner onOpenModal={openModal} variant="accent" />

        {/* Testimonials */}
        <Testimonials />

        {/* About Agent */}
        <AboutAgent />

        {/* CTA Banner 2 */}
        <CTABanner onOpenModal={openModal} />

        {/* FAQ */}
        <FAQ />

        {/* CTA Banner 3 (Pre-Footer) */}
        <CTABanner onOpenModal={openModal} variant="accent" />
      </main>

      <Footer />

      {/* Valuation Modal */}
      <ValuationModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* Back to Top */}
      <BackToTop />
    </>
  )
}
