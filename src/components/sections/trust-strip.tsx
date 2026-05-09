import { Container } from "@/components/ui/container";

export function TrustStrip() {
  return (
    <section className="py-10 md:py-14 border-b border-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "2–6 wks", label: "Typical project timeline" },
            { value: "Direct", label: "You talk to the builders" },
            { value: "Flat-rate", label: "No hourly billing surprises" },
            { value: "Handoff", label: "You own everything we build" },
          ].map((item, i) => (
            <div key={item.label} className={i > 0 ? "md:border-l md:border-border md:pl-8" : ""}>
              <p className="text-sm font-medium text-text-primary">{item.value}</p>
              <p className="text-xs text-text-muted mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
