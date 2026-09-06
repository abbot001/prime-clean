import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left — narrative */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-cyan" />
              Live &amp; ready to take orders
            </div>

            <h1 className="display-serif mt-6 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[5.5rem] text-foreground text-balance">
              Fresh Clothes.
              <br />
              <span className="text-accent">Zero Hassle.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
              Professional laundry and dry cleaning with convenient pickup and delivery right to your doorstep.
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                to="/book"
                className="btn-expand inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[0_18px_40px_-12px_hsl(187_85%_53%/0.6)]"
              >
                Book a Pickup
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-4 text-base font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                View Services
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-2">
                {['AR', 'DK', 'SM', 'JL'].map((i) => (
                  <span key={i} className="grid h-9 w-9 place-items-center rounded-full border-2 border-background bg-secondary text-xs font-semibold text-foreground">
                    {i}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">Loved by 2,000+ happy customers</p>
              </div>
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4)]">
              <Image
                src={IMAGES.hero}
                alt="Crisp white linen fabric catching the light"
                className="aspect-[4/5] w-full sm:aspect-[5/5]"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
            </div>

            {/* Floating glass quick-stat card */}
            <div className="absolute -left-4 bottom-8 sm:-left-8 glass-bar rounded-2xl border border-border p-4 shadow-xl">
              <p className="text-xs font-medium text-muted-foreground">Next pickup window</p>
              <p className="display-serif mt-1 text-2xl text-foreground">Today, 2–4 PM</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-cyan" />
                Available
              </div>
            </div>

            <div className="absolute -right-3 top-8 sm:-right-6 glass-bar rounded-2xl border border-border px-4 py-3 shadow-xl">
              <p className="display-serif text-3xl text-foreground">48h</p>
              <p className="text-xs text-muted-foreground">avg. turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}