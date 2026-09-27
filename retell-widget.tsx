"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const FAB_SELECTORS = [
  "#retell-widget-trigger",
  ".retell-widget-fab",
  "[data-retell-fab]",
  "#retell-widget button",
];

function clickWidgetFab(): boolean {
  for (const selector of FAB_SELECTORS) {
    const el = document.querySelector<HTMLElement>(selector);
    if (el) {
      el.click();
      return true;
    }
  }
  return false;
}

export function RetellWidget() {
  const [micError, setMicError] = useState<string | null>(null);
  const [bubbleVisible, setBubbleVisible] = useState(false);

  // Repeating attention bubble: visible 5s, hidden 5s, on a loop.
  useEffect(() => {
    let shown = true;
    setBubbleVisible(true);
    const interval = setInterval(() => {
      shown = !shown;
      setBubbleVisible(shown);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function handleTrigger(e: Event) {
      const target = (e.target as HTMLElement)?.closest("[data-retell-trigger]");
      if (!target) return;
      e.preventDefault();
      setMicError(null);

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((t) => t.stop());
      } catch {
        setMicError(
          `Mic not found — check your microphone and try again, or call us at ${siteConfig.phoneDisplay}.`
        );
        return;
      }

      const found = clickWidgetFab();
      if (!found) {
        setMicError(
          `Tap the "Talk to our receptionist" bubble in the bottom-right corner to start the call.`
        );
      }
    }

    document.addEventListener("click", handleTrigger);
    return () => document.removeEventListener("click", handleTrigger);
  }, []);

  return (
    <>
      {siteConfig.retell.voiceAgentId && siteConfig.retell.publicKey && (
        <Script
          id="retell-widget"
          src="https://dashboard.retellai.com/retell-widget-v2.js"
          type="module"
          strategy="afterInteractive"
          data-voice-public-key={siteConfig.retell.publicKey}
          data-voice-agent-id={siteConfig.retell.voiceAgentId}
          data-color="#1F4E4A"
          data-fab-text="Talk to our receptionist"
          data-show-ai-popup="false"
        />
      )}

      {/* Custom repeating attention bubble, cycling every 5s independent of the widget's own one-time popup */}
      <div
        className={`fixed bottom-24 right-6 z-40 max-w-[240px] rounded-2xl bg-card border border-border shadow-lg px-4 py-3 text-sm text-foreground transition-all duration-500 ${
          bubbleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!bubbleVisible}
      >
        Want to hear how we answer your calls? Talk to me.
      </div>

      {micError && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[90vw] rounded-xl bg-foreground text-background px-5 py-3 text-sm shadow-xl"
        >
          {micError}
        </div>
      )}
    </>
  );
}
