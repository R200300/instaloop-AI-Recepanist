import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { TryItLiveSection } from "@/components/landing/try-it-live-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { FooterSection } from "@/components/landing/footer-section";
import { RetellWidget } from "@/components/widget/retell-widget";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <TryItLiveSection />
      <HowItWorksSection />
      <PricingSection />
      <WhyUsSection />
      <FooterSection />
      <RetellWidget />
    </main>
  );
}
