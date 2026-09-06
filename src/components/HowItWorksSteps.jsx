import { Link } from 'react-router-dom';
import { Calendar, Truck, Sparkles, PackageCheck, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '@/lib/business';
import SectionHeading from '@/components/SectionHeading';

const ICONS = [Calendar, Truck, Sparkles, PackageCheck];

export default function HowItWorksSteps({ withCta = false }) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeading
        align="center"
        eyebrow="The Chronos Flow"
        title="Four steps. Zero hassle."
        subtitle="A transparent journey from your doorstep back to your doorstep."
      />

      <div className="relative mt-16">
        {/* connecting pulse line (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {HOW_IT_WORKS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div key={s.step} className="relative animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-card text-accent shadow-sm">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                      {s.step}
                    </span>
                  </span>
                </div>
                <h3 className="display-serif mt-5 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {withCta && (
        <div className="mt-14 flex justify-center">
          <Link
            to="/book"
            className="btn-expand inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[0_18px_40px_-12px_hsl(187_85%_53%/0.6)]"
          >
            Schedule Your Pickup
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      )}
    </section>
  );
}