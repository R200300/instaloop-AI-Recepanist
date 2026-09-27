"use client";

import { Button } from "@/components/ui/button";
import { Phone, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[640px]">
          <p className="text-sm font-medium text-primary mb-5">
            AI receptionists for {siteConfig.niche.toLowerCase()}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground text-balance">
            Never miss another patient call.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-[520px] leading-relaxed">
            Your front desk can&apos;t answer every ring. Our AI receptionist
            can — day or night, on the phone number you already use.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" className="h-12 px-7 text-base" asChild>
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                <PhoneCall className="mr-1" />
                Book a free demo call
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-7 text-base" data-retell-trigger>
              <Phone className="mr-1" />
              Talk to our AI receptionist
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            No forms. Click the button, and it picks up like a real front-desk call.
          </p>
        </div>
      </div>
    </section>
  );
}
