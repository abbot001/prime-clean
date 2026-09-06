import { cn } from '@/lib/utils';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className }) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-2.5', align === 'center' && 'justify-center')}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="display-serif mt-4 text-4xl sm:text-5xl text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}