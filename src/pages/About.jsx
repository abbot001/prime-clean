import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart } from 'lucide-react';
import { Image } from '@/components/ui/image';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';

const VALUES = [
  { title: "Quality", desc: "Finished by hand and inspected before every delivery." },
  { title: "Reliability", desc: "Back when you expect it — every single time." },
  { title: "Care", desc: "Each garment treated with the process it deserves." },
  { title: "Convenience", desc: "Pickup and delivery built around your schedule." },
  { title: "Customer Satisfaction", desc: "Responsive support, every business day." },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="About PRIME CLEAN"
          title="We give people their time back."
          subtitle="PRIME CLEAN exists to make professional laundry and dry cleaning feel effortless — dependable care, delivered with the convenience of a modern service."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]">
            <Image src={IMAGES.studio} alt="PRIME CLEAN studio" className="aspect-[16/10] w-full" fittingType="fill" />
          </div>
          <div>
            <h2 className="display-serif text-3xl sm:text-4xl text-foreground">Our story</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We started PRIME CLEAN with a simple observation: laundry is rarely the problem — the time it takes is.
                Between work, family, and everything else, the weekly wash quietly steals hours people would rather spend elsewhere.
              </p>
              <p>
                So we built a service around the idea that clean clothes should arrive at your door the same way a good
                hospitality experience does — quietly, reliably, and exactly when expected. No queues, no coin machines,
                no piles waiting on the bedroom chair.
              </p>
              <p>
                Today we handle everyday laundry, specialist dry cleaning, pressing, stain treatment and household textiles —
                each one cleaned with the right process and finished by hand before it makes its way back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="rounded-3xl border border-border bg-card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="display-serif mt-5 text-3xl text-foreground">Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To provide dependable, professional laundry and dry-cleaning services while making the entire process
                convenient — so our customers can spend their time on what matters most to them.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background">
                <Heart className="h-5 w-5" />
              </span>
              <h3 className="display-serif mt-5 text-3xl text-foreground">Values</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {VALUES.map((v) => (
                  <li key={v.title} className="rounded-2xl bg-secondary/40 p-4">
                    <p className="text-sm font-semibold text-foreground">{v.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 text-center">
        <h2 className="display-serif text-3xl sm:text-4xl text-foreground">Ready to hand us the laundry?</h2>
        <Link to="/book" className="btn-expand mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground">
          Book a Pickup <ArrowRight className="h-5 w-5" />
        </Link>
      </section>

      <CTASection />
    </>
  );
}