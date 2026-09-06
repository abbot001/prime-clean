import { TRUST_BADGES } from '@/lib/business';
import { Sparkles, BadgeCheck, Truck, ShieldCheck, Headphones } from 'lucide-react';

const ICONS = [Sparkles, BadgeCheck, Truck, ShieldCheck, Headphones];

export default function TrustBadges() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16">
      <div className="flex fold-line-wrapper">
        <div className="fold-line w-full" />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {TRUST_BADGES.map((b, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={b.label} className="flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground">{b.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}