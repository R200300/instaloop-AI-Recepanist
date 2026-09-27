import { siteConfig } from "@/lib/site-config";

const stats = [
  {
    value: `${siteConfig.stats.unansweredCallsPct}%`,
    label: "of calls to small businesses go unanswered",
  },
  {
    value: `${siteConfig.stats.voicemailNoCallbackPct}%`,
    label: "of callers who reach voicemail never call back",
  },
  {
    value: `${siteConfig.stats.lostToCompetitorPct}%`,
    label: "of unanswered callers call a competitor instead",
  },
  {
    value: `$${(siteConfig.stats.annualLossUSD / 1000).toFixed(0)}K`,
    label: "lost every year by the average small business",
  },
];

export function ProblemSection() {
  return (
    <section id="the-problem" className="px-6 md:px-10 py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-display text-3xl md:text-5xl max-w-[640px] text-balance">
          Every ring your team can&apos;t take is a patient walking to someone else.
        </h2>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6 md:p-8">
              <div className="font-display text-4xl md:text-5xl text-primary">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
