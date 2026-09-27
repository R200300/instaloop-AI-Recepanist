import { PhoneIncoming, Wand2, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Wand2,
    title: "We build your receptionist",
    description:
      "We script and train an AI voice agent on your services, hours, and booking flow — tuned for a dental clinic front desk.",
  },
  {
    icon: PhoneIncoming,
    title: "We attach it to your number",
    description:
      "Your existing clinic phone number stays exactly the same. Patients dial the number they already know.",
  },
  {
    icon: ShieldCheck,
    title: "You never miss a call again",
    description:
      "Every call gets answered, every time — nights, weekends, lunch breaks — and booked straight into your calendar.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 md:px-10 py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-display text-3xl md:text-5xl max-w-[520px] text-balance">
          Live in three steps.
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-accent">{i + 1}</span>
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
