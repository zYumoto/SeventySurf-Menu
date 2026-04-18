import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote: "Dinner turned into drinks, drinks turned into music. Exactly the kind of place Santos needed.",
    name: "Marina C.",
    detail: "Friday table"
  },
  {
    quote: "The cocktails feel serious, the food is generous and the room has that beach-after-dark energy.",
    name: "Rafael M.",
    detail: "Bar regular"
  },
  {
    quote: "Great for groups without losing the premium feel. We booked for eight and stayed all night.",
    name: "Bianca T.",
    detail: "Birthday dinner"
  }
];

export function Testimonials() {
  return (
    <section className="container py-20">
      <MotionReveal>
        <SectionHeading
          eyebrow="Word on the coast"
          title="Built for nights people talk about later."
          description="Realistic guest notes for the kind of venue Seventy Surf is designed to become."
          align="center"
        />
      </MotionReveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <MotionReveal key={testimonial.name} delay={index * 0.08}>
            <Card className="h-full bg-white/[0.045] p-6">
              <p className="text-lg leading-8 text-white/78">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.detail}</p>
              </div>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
