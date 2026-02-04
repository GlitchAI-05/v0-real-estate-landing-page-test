'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do you determine the value of my property?',
    answer:
      'We conduct a comprehensive market analysis that considers recent sales in your area, current market conditions, property features, and comparable listings. This data-driven approach ensures an accurate and competitive pricing strategy that maximises your return while attracting serious buyers.',
  },
  {
    question: 'What costs are involved in selling?',
    answer:
      'The main costs include estate agent commission, compliance certificates (electrical, beetle, gas, electric fence where applicable), rates clearance, and bond cancellation fees if applicable. We provide a detailed breakdown of all expected costs upfront so there are no surprises.',
  },
  {
    question: 'How long does the selling process take?',
    answer:
      'On average, our properties receive serious enquiries within 21 days. The full process from listing to transfer typically takes 3-4 months, depending on buyer financing and conveyancing timelines. We work to expedite every stage while ensuring a smooth transaction.',
  },
  {
    question: 'Do you handle all the paperwork?',
    answer:
      'Yes, we manage all documentation from listing agreements and offers to purchase, through to liaising with conveyancers for transfer. Our end-to-end service means you can focus on your move while we handle the administrative details.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We specialise in Pretoria East, including Faerie Glen, Moreleta Park, Waterkloof, Garsfontein, Menlo Park, Lynnwood, and surrounding suburbs. Our deep local knowledge ensures accurate pricing and targeted marketing to the right buyers.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Common Questions
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
