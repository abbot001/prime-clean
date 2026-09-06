import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient brand glows — blue + yellow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute top-24 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 pb-20 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left — brand & narrative */}
          <div className="animate-fade-up">
            <span className="capsule">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-cyan" />
              Live &amp; ready to take orders
            </span>

            <h1 className="display-serif mt-6 text-[3.5rem] leading-[0.92] sm:text-7xl lg:text-[6rem] text-balance">
              <span className="text-primary">PRIME</span>{' '}
              <span className="text-accent">CLEAN</span>
            </h1>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80">
              Laundry &amp; Dry Cleaning Service
            </p>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
              Fresh clothes, zero hassle — professional laundry and dry cleaning with convenient pickup and delivery right to your doorstep.
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                to="/book"
                className="btn-expand inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[0_18px_40px_-12px_hsl(47_100%_58%/0.55)]"
              >
                Book a Pickup
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                View Services
              </Link>
            </div>

            <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground/70">
              Free pickup · No subscription · Cancel anytime
            </p>

            <div className="mt-8 flex items-center gap-5">
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

          {/* Right — folded, pressed clothes */}
          <div className="relative animate-fade-in">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="orbital h-[118%] w-[118%]" />
            </div>

            <div className="glass-card relative overflow-hidden rounded-[2rem] p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src={IMAGES.hero}
                  alt="Neatly folded and pressed clothes"
                  className="aspect-[4/5] w-full sm:aspect-[5/5]"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating glass quick-stat card */}
            <div className="absolute -left-4 bottom-8 animate-float glass-bar rounded-2xl border border-border p-4 shadow-xl sm:-left-8">
              <p className="text-xs font-medium text-muted-foreground">Next pickup window</p>
              <p className="display-serif mt-1 text-2xl text-foreground">Today, 2–4 PM</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-cyan" />
                Available
              </div>
            </div>

            <div
              className="absolute -right-3 top-8 animate-float glass-bar rounded-2xl border border-border px-4 py-3 shadow-xl sm:-right-6"
              style={{ animationDelay: '1.6s' }}
            >
              <p className="display-serif text-3xl text-foreground">48h</p>
              <p className="text-xs text-muted-foreground">avg. turnaround</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}