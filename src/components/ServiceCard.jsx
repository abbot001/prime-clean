import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services`}
      className="soft-glow glass-card group relative flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full glass-bar border border-white/40 px-3 py-1 text-xs font-semibold text-foreground">
          {service.from}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display-serif text-2xl text-foreground">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}