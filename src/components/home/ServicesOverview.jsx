import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/business';
import { SERVICE_IMAGES } from '@/lib/images';

export default function ServicesOverview() {
  const services = SERVICES.map((s) => ({ ...s, image: SERVICE_IMAGES[s.slug] }));
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="The Fabric Library"
          title="Every garment, treated as a masterwork."
          subtitle="From everyday laundry to specialist stain care — choose the service your wardrobe needs."
        />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
        <div className="soft-glow flex flex-col justify-between rounded-3xl border border-dashed border-border bg-secondary/30 p-6">
          <div>
            <h3 className="display-serif text-2xl text-foreground">Not sure what you need?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us about your items and we'll recommend the right service and an honest estimate.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Ask our team →
          </a>
        </div>
      </div>
    </section>
  );
}