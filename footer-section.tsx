import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FooterSection() {
  return (
    <footer className="px-6 md:px-10 py-16 border-t border-border">
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <div className="font-display text-2xl">{siteConfig.businessName}</div>
          <p className="mt-2 text-muted-foreground max-w-[360px]">
            AI receptionists for {siteConfig.niche.toLowerCase()} — answering every call,
            every time.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <Button size="lg" className="h-12 px-7 text-base w-fit" asChild>
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
            Book a free demo call
          </a>
        </Button>
      </div>
      <p className="mx-auto max-w-[1100px] mt-12 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
      </p>
    </footer>
  );
}
