import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import CTASection from '@/components/CTASection';
import { FAQS } from '@/lib/business';

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-foreground">{item.q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-400 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-4">
        <SectionHeading
          eyebrow="How it works"
          title="From doorstep to doorstep, with you informed at every step."
          subtitle="No mystery, no waiting on hold — just a clean, transparent process."
        />
      </section>

      <HowItWorksSteps withCta />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeading align="center" eyebrow="FAQ" title="Answers, before you ask." />
        <div className="mt-10">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      <CTASection title="See it for yourself." />
    </>
  );
}