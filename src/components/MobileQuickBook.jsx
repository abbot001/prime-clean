import { Link, useLocation } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { cn } from '@/lib/utils';

// Floating glassmorphic Quick-Book bar — mobile only, hidden on the booking page itself.
export default function MobileQuickBook() {
  const location = useLocation();
  if (location.pathname === '/book') return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 glass-bar border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-18px_rgba(15,23,42,0.3)]">
      <div className="flex items-center gap-2.5">
        <Link
          to="/book"
          className="btn-expand flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
        >
          <Calendar className="h-4 w-4" />
          Schedule Pickup
        </Link>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          aria-label="Call PRIME CLEAN"
          className={cn(
            'grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-foreground'
          )}
        >
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}