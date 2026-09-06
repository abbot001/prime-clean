import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChoose from '@/components/home/WhyChoose';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import Testimonials from '@/components/home/Testimonials';
import TrustBadges from '@/components/home/TrustBadges';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="fold-line w-full" /></div>
      <ServicesOverview />
      <WhyChoose />
      <HowItWorksSteps withCta />
      <Testimonials />
      <TrustBadges />
      <CTASection />
    </>
  );
}