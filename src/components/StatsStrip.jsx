// Glass metric strip — sits under the hero, echoing a premium dashboard feel.
const STATS = [
  { value: '48h', label: 'Avg. turnaround' },
  { value: '2,000+', label: 'Happy customers' },
  { value: '5.0★', label: 'Average rating' },
  { value: '24/7', label: 'Online booking' },
];

export default function StatsStrip() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="glass-card rounded-2xl p-5 text-center sm:p-6 sm:text-left"
          >
            <div className="metric-value text-4xl sm:text-5xl">{s.value}</div>
            <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}