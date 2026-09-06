import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ title = "Ready for Cleaner, Fresher Clothes?", subtitle = "Book a pickup in under a minute. We'll handle the rest." }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-center sm:px-16 sm:py-24">
          {/* glow accents */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <h2 className="display-serif mx-auto max-w-3xl text-4xl sm:text-6xl text-background text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-background/70 text-balance">
              {subtitle}
            </p>
            <Link
              to="/book"
              className="btn-expand mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-[0_18px_40px_-12px_hsl(187_85%_53%/0.7)]"
            >
              Book a Pickup
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}