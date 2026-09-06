import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { Image } from '@/components/ui/image';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { SERVICES } from '@/lib/business';
import { SERVICE_IMAGES } from '@/lib/images';

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="Services"
          title="A complete care library for your wardrobe and home."
          subtitle="Each service is handled by specialists and finished by hand — then delivered back to your door."
        />
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fold-line w-full" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 divide-y divide-border">
        {SERVICES.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <article key={s.slug} className="py-14 sm:py-20">
              <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]">
                  <Image src={SERVICE_IMAGES[s.slug]} alt={s.name} className="aspect-[4/3] w-full" fittingType="fill" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">{s.from}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {s.turnaround} turnaround
                    </span>
                  </div>
                  <h2 className="display-serif mt-5 text-4xl sm:text-5xl text-foreground">{s.name}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.short}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.included.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/book"
                    className="btn-expand mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    Book this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <CTASection title="One pickup. Every service." subtitle="Mix and match services in a single booking — we'll sort the rest." />
    </>
  );
}