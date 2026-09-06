import { Shirt, Sparkles, Wind, Droplets, BedDouble } from 'lucide-react';
import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/StatsStrip';
import Marquee from '@/components/Marquee';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChoose from '@/components/home/WhyChoose';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import Testimonials from '@/components/home/Testimonials';
import TrustBadges from '@/components/home/TrustBadges';
import CTASection from '@/components/CTASection';

const SERVICE_TICKER = [
  { label: 'Wash & Fold', icon: <Shirt className="h-4 w-4" /> },
  { label: 'Dry Cleaning', icon: <Sparkles className="h-4 w-4" /> },
  { label: 'Ironing & Pressing', icon: <Wind className="h-4 w-4" /> },
  { label: 'Stain Removal', icon: <Droplets className="h-4 w-4" /> },
  { label: 'Curtain & Bedding Care', icon: <BedDouble className="h-4 w-4" /> },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Marquee items={SERVICE_TICKER} className="mt-16 border-y border-border bg-secondary/20 py-4 sm:mt-24" />
      <ServicesOverview />
      <WhyChoose />
      <HowItWorksSteps withCta />
      <Testimonials />
      <TrustBadges />
      <CTASection />
    </>
  );
}