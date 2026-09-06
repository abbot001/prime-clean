import { cn } from '@/lib/utils';

// Seamless infinite marquee. Renders the item group twice and translates -50%.
// items: [{ label: string, icon?: ReactNode }]
export default function Marquee({ items, speed = 38, reverse = false, className }) {
  const Group = ({ ariaHidden }) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={ariaHidden}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-muted-foreground">
          {it.icon && <span className="text-accent">{it.icon}</span>}
          <span>{it.label}</span>
          <span className="ml-10 h-1 w-1 rounded-full bg-border" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}