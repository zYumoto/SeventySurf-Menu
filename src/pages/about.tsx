import { HeartHandshake, Music, Utensils, Waves } from "lucide-react";

import { CtaBanner } from "@/components/cta-banner";
import { GalleryGrid } from "@/components/gallery-grid";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const values = [
  { title: "Experience", description: "Service, lighting, food and drinks designed as one full night.", icon: HeartHandshake },
  { title: "Culture", description: "Surf attitude, city references and playlists that keep the room alive.", icon: Waves },
  { title: "Good food", description: "A generous menu with fresh coastal plates and comfort where it counts.", icon: Utensils },
  { title: "Authenticity", description: "Relaxed energy without costume surf cliches or generic nightlife gloss.", icon: Music }
];

export function AboutPage() {
  return (
    <>
      <section className="container grid gap-10 pb-16 pt-32 md:pt-40 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionReveal>
          <SectionHeading
            eyebrow="About"
            title="A restaurant bar shaped by the coast after sunset."
            description="Seventy Surf was imagined as the place where the beach day turns into dinner, drinks and music. The identity is coastal, but the room is urban: polished enough for a date, relaxed enough for friends, and lively enough for the second round."
          />
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=85"
              alt="Restaurant dining room with guests"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        </MotionReveal>
      </section>

      <section className="bg-[#0b1716] py-20 md:py-28">
        <div className="container">
          <MotionReveal>
            <SectionHeading
              eyebrow="Values"
              title="The brand is more than a menu."
              description="Every touchpoint should make the venue feel like a lifestyle address, not a generic restaurant page."
            />
          </MotionReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <MotionReveal key={value.title} delay={index * 0.08}>
                <Card className="h-full bg-white/[0.045] p-5">
                  <value.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{value.description}</p>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <MotionReveal>
          <SectionHeading eyebrow="Visual mood" title="Salt, fire, music and warm tables." />
        </MotionReveal>
        <MotionReveal delay={0.1} className="mt-10">
          <GalleryGrid />
        </MotionReveal>
      </section>

      <CtaBanner />
    </>
  );
}
