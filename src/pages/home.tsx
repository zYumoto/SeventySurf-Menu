import { ArrowRight, ChefHat, Martini, Music2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { CtaBanner } from "@/components/cta-banner";
import { EventCard } from "@/components/event-card";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { MenuCard } from "@/components/menu-card";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredMenuItems, upcomingEvents } from "@/lib/data";

const experiences = [
  {
    title: "Signature drinks",
    description: "Bright tropical builds, darker classics and house cocktails made for the first toast and the last track.",
    icon: Martini
  },
  {
    title: "Coastal food",
    description: "Fresh starters, grilled plates, burgers and desserts with a menu that works for dinner or sharing.",
    icon: ChefHat
  },
  {
    title: "Music after dark",
    description: "Acoustic evenings, DJ nights and curated playlists that shift the house from dinner to nightlife.",
    icon: Music2
  },
  {
    title: "Atmosphere",
    description: "Surf references, warm light, premium service and a room that feels relaxed without losing polish.",
    icon: Sparkles
  }
];

export function HomePage() {
  return (
    <>
      <Hero />

      <section className="container section-pad">
        <MotionReveal>
          <SectionHeading
            eyebrow="The experience"
            title="A coastal venue with a late-night pulse."
            description="Seventy Surf mixes restaurant service, cocktail culture and music into one visit that can start with dinner and end under the lights."
          />
        </MotionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <Card className="h-full bg-white/[0.045] p-5">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.description}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#0b1716] py-20 md:py-28">
        <div className="container">
          <MotionReveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Featured menu"
                title="The first round has standards."
                description="House picks across cocktails, starters, mains, burgers and dessert."
              />
              <Button asChild variant="outline">
                <Link to="/menu">
                  Full menu <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </MotionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMenuItems.slice(0, 4).map((item, index) => (
              <MotionReveal key={item.id} delay={index * 0.08}>
                <MenuCard item={item} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <MotionReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Weekly agenda"
              title="Music, brunch, happy hour and nights with movement."
              description="Every week has a reason to come in earlier, stay later or gather the crew."
            />
            <Button asChild variant="outline">
              <Link to="/events">
                See events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </MotionReveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {upcomingEvents.slice(0, 4).map((event, index) => (
            <MotionReveal key={event.id} delay={index * 0.08}>
              <EventCard event={event} />
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#0b1716] py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionReveal>
            <SectionHeading
              eyebrow="About the house"
              title="Surf culture, city nights and a table worth keeping."
              description="The house is inspired by that moment after the beach when the day changes gear: salt still in the air, lights coming on, drinks landing at the table and music pulling the room together."
            />
            <Button asChild className="mt-8">
              <Link to="/about">Read the story</Link>
            </Button>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1500&q=85"
                alt="Friends sharing drinks in a nightlife venue"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="container section-pad">
        <MotionReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Warm tables, sharp drinks and ocean energy."
            description="A visual direction ready for real venue photography."
          />
        </MotionReveal>
        <MotionReveal delay={0.1} className="mt-10">
          <GalleryGrid />
        </MotionReveal>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
