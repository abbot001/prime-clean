import SectionHeading from '@/components/SectionHeading';
import { TESTIMONIALS } from '@/lib/business';
import { Star, Quote } from 'lucide-react';

function initials(name) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Fresh words"
        title="Customers who got their evenings back."
        subtitle="Real convenience, felt in everyday life."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="soft-glow glass-card flex flex-col rounded-3xl p-7">
            <Quote className="h-7 w-7 text-accent/40" />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <div className="mt-6 flex items-center gap-1 text-accent">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-sm font-semibold text-foreground">
                {initials(t.name)}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}