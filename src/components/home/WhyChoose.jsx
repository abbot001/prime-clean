import SectionHeading from '@/components/SectionHeading';
import { WHY_CHOOSE } from '@/lib/business';
import { Sparkles, Truck, ShieldCheck, Clock, BadgeCheck, CalendarCheck } from 'lucide-react';

const ICONS = [Sparkles, Truck, ShieldCheck, Clock, BadgeCheck, CalendarCheck];

export default function WhyChoose() {
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeading
          align="center"
          eyebrow="Why PRIME CLEAN"
          title="Trust, built into every fold."
          subtitle="The details that turn a chore into a service you actually look forward to."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={w.title} className="group bg-card p-8 transition-colors hover:bg-accent/5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="display-serif mt-5 text-2xl text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}