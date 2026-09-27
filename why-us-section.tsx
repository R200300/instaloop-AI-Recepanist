import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    title: "Built for dental clinics",
    description:
      "Not a generic chatbot. The agent knows how a dental front desk talks — appointments, insurance questions, emergency triage.",
  },
  {
    title: "Local and hands-on",
    description:
      "We set it up, connect it to your number, and tune it with you until it sounds right for your clinic.",
  },
  {
    title: "Up to 5x return",
    description:
      "Clinics using InstaLoop AI typically recover far more in booked visits each month than the plan costs.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="px-6 md:px-10 py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-display text-3xl md:text-5xl max-w-[520px] text-balance">
          Why {siteConfig.businessName}
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="text-lg font-medium">{reason.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
