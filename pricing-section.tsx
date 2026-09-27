import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const included = [
  `${siteConfig.pricing.includedMinutes} call minutes included every month`,
  `$${siteConfig.pricing.overagePerMinute.toFixed(2)}/min after that — no surprise overage fees`,
  "Answers every call, 24/7, on your existing number",
  "Books straight into your calendar",
  "Free trial if it's a good fit for your clinic",
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 md:px-10 py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px] grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-5xl text-balance">
            One plan. No missed calls.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-[440px]">
            Compare that to the ${(siteConfig.stats.annualLossUSD / 1000).toFixed(0)}K a year
            the average small business loses to calls nobody picked up.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl">${siteConfig.pricing.monthly}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-9 w-full h-12 text-base" asChild>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a free demo call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
