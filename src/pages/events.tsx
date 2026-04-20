import { CtaBanner } from "@/components/cta-banner";
import { EventCard } from "@/components/event-card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { useAdminData } from "@/lib/admin-store";
import { useLanguage } from "@/lib/i18n";

export function EventsPage() {
  const { copy } = useLanguage();
  const { visibleEvents } = useAdminData();

  return (
    <>
      <section className="container pb-12 pt-32 md:pt-40">
        <MotionReveal>
          <SectionHeading
            eyebrow={copy.events.eyebrow}
            title={copy.events.title}
            description={copy.events.description}
          />
        </MotionReveal>
      </section>
      <section className="container pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleEvents.map((event, index) => (
            <MotionReveal key={event.id} delay={index * 0.04}>
              <EventCard event={event} />
            </MotionReveal>
          ))}
        </div>
      </section>
      <CtaBanner title={copy.events.ctaTitle} description={copy.events.ctaDescription} />
    </>
  );
}
