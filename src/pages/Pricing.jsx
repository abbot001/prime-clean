import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Truck, Clock, Wallet } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { PRICING } from '@/lib/business';

const BUNDLES = [
  { name: "The Weekly Bag", price: "$35", desc: "Up to 20 lbs of wash & fold, folded & packaged. Perfect for busy households.", popular: true },
  { name: "The Executive", price: "$48", desc: "10 shirts & 5 trousers — washed, pressed and on hangers. Boardroom-ready.", popular: false },
  { name: "The Home Refresh", price: "$65", desc: "Bedding bundle: 2 bedsheets, 2 duvets, 4 pillows — fresh & sanitized.", popular: false },
];

export default function Pricing() {
  const [mode, setMode] = useState('items');

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest, readable pricing."
          subtitle="Indicative per-item rates — your final quote is confirmed at pickup based on your actual items."
        />

        {/* Toggle */}
        <div className="mt-9 inline-flex rounded-full border border-border bg-card p-1">
          {[
            { id: 'items', label: 'Individual Items' },
            { id: 'bundles', label: 'Bundle Bags' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setMode(t.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                mode === t.id ? 'bg-accent text-accent-foreground shadow' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fold-line w-full" />
      </div>

      {/* Items view */}
      <div className={`mx-auto max-w-7xl px-5 sm:px-8 py-12 transition-opacity duration-500 ${mode === 'items' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((cat) => (
            <div key={cat.category} className="soft-glow rounded-3xl border border-border bg-card p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="display-serif text-2xl text-foreground">{cat.category}</h3>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{cat.note}</p>
              <ul className="mt-5 divide-y divide-border">
                {cat.items.map((it) => (
                  <li key={it.item} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-foreground/90">{it.item}</span>
                    <span className="font-semibold text-foreground">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bundles view */}
      <div className={`mx-auto max-w-7xl px-5 sm:px-8 py-12 transition-opacity duration-500 ${mode === 'bundles' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <div className="grid gap-6 lg:grid-cols-3">
          {BUNDLES.map((b) => (
            <div
              key={b.name}
              className={`soft-glow relative flex flex-col rounded-3xl border bg-card p-7 ${b.popular ? 'border-accent shadow-[0_18px_50px_-24px_hsl(187_85%_53%/0.5)]' : 'border-border'}`}
            >
              {b.popular && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <h3 className="display-serif text-2xl text-foreground">{b.name}</h3>
              <p className="mt-4 display-serif text-5xl text-foreground">{b.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <Link
                to="/book"
                className={`btn-expand mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${b.popular ? 'bg-accent text-accent-foreground' : 'border border-border text-foreground hover:border-accent'}`}
              >
                Book this bundle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Good-to-know */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { icon: Wallet, title: 'Minimum order', desc: '$25 minimum per pickup.' },
            { icon: Truck, title: 'Pickup & delivery', desc: 'Free on orders over $40, otherwise a flat $5.' },
            { icon: Clock, title: 'Turnaround', desc: 'Standard 48h; express available from 24h.' },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/30 p-5">
              <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-foreground">{c.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          Prices are indicative and may vary by fabric, condition, and special-care requirements. Final pricing is confirmed at pickup.
        </p>
      </section>

      <CTASection title="Clear price. Cleaner clothes." />
    </>
  );
}