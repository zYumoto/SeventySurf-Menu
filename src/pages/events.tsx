import { CtaBanner } from "@/components/cta-banner";
import { EventCard } from "@/components/event-card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { events } from "@/lib/data";

export function EventsPage() {
  return (
    <>
      <section className="container pb-12 pt-32 md:pt-40">
        <MotionReveal>
          <SectionHeading
            eyebrow="Weekly agenda"
            title="The week moves from easy dinners to full nights."
            description="Live music, DJ sets, special dinners, brunch and happy hour placeholders ready for admin editing."
          />
        </MotionReveal>
      </section>
      <section className="container pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {events.map((event, index) => (
            <MotionReveal key={event.id} delay={index * 0.04}>
              <EventCard event={event} />
            </MotionReveal>
          ))}
        </div>
      </section>
      <CtaBanner title="Planning a group night?" description="Send a message for birthday tables, private areas and dinner before the music." />
    </>
  );
}
