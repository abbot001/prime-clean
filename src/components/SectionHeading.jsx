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
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</span>
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