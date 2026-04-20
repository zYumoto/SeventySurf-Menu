import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { copy } = useLanguage();

  return (
    <section className="container py-20">
      <MotionReveal>
        <SectionHeading
          eyebrow={copy.testimonials.eyebrow}
          title={copy.testimonials.title}
          description={copy.testimonials.description}
          align="center"
        />
      </MotionReveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {copy.testimonials.items.map((testimonial, index) => (
          <MotionReveal key={testimonial.name} delay={index * 0.08}>
            <Card className="h-full bg-white/[0.045] p-6">
              <p className="text-lg leading-8 text-white/[0.78]">"{testimonial.quote}"</p>
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
