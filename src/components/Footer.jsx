import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MessageCircle, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS, SERVICE_OPTIONS } from '@/lib/business';

const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi PRIME CLEAN, I'd like to book a pickup.")}`;

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-gradient-to-b from-background to-secondary/40">
      {/* Freshness watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 display-serif text-[18vw] leading-none font-medium text-foreground/[0.03] select-none whitespace-nowrap"
      >
        PRIME CLEAN
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="display-serif text-xl tracking-tight">
                PRIME<span className="text-accent"> CLEAN</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {BUSINESS.tagline} Professional laundry and dry cleaning, handled with care and returned fresh to your door.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={BUSINESS.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href={BUSINESS.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href={BUSINESS.social.twitter} aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'How It Works', to: '/how-it-works' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_OPTIONS.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>WhatsApp us</span>
                </a>
              </li>
              {BUSINESS.email && (
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{BUSINESS.email}</span>
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{BUSINESS.serviceArea}</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  {BUSINESS.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span className="text-foreground/80">{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex fold-line-wrapper">
          <div className="fold-line w-full" />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PRIME CLEAN. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Terms</Link>
            <Link to="/book" className="font-semibold text-accent">Book a Pickup →</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}