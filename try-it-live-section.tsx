"use client";

import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function TryItLiveSection() {
  return (
    <section id="try-it-live" className="px-6 md:px-10 py-24">
      <div className="mx-auto max-w-[1100px] rounded-3xl bg-primary text-primary-foreground px-8 md:px-16 py-16 md:py-20 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
          <Mic className="h-6 w-6" />
        </div>
        <h2 className="mt-8 font-display text-3xl md:text-5xl text-balance max-w-[720px] mx-auto">
          This is the exact receptionist we build for {siteConfig.niche.toLowerCase()}.
        </h2>
        <p className="mt-5 text-primary-foreground/80 text-lg max-w-[520px] mx-auto">
          Talk to it right now, the same way one of your patients would.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="mt-9 h-12 px-8 text-base"
          data-retell-trigger
        >
          Talk to it now
        </Button>
      </div>
    </section>
  );
}
