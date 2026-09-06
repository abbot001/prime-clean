import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { cn } from '@/lib/utils';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        'sticky top-[3px] z-50 transition-all duration-500',
        scrolled ? 'glass-bar border-b border-border/70 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.25)]' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="PRIME CLEAN home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="display-serif text-xl tracking-tight text-foreground">
              PRIME<span className="text-accent"> CLEAN</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={cn(
                        'absolute left-4 right-4 -bottom-0.5 h-px bg-accent transition-transform duration-300 origin-left',
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="btn-expand hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_-10px_hsl(187_85%_53%/0.6)] hover:bg-accent/90"
            >
              Book a Pickup
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out glass-bar border-b border-border',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="grid gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/book"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-base font-semibold text-accent-foreground"
          >
            Book a Pickup
          </Link>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-medium text-foreground"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </header>
  );
}