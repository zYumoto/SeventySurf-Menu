import { ArrowRight, ChefHat, Martini, Music2, Waves } from "lucide-react";
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
import { useAdminData } from "@/lib/admin-store";
import { useLanguage } from "@/lib/i18n";

const experiences = [
  {
    icon: Waves
  },
  {
    icon: ChefHat
  },
  {
    icon: Martini
  },
  {
    icon: Music2
  }
];

export function HomePage() {
  const { copy } = useLanguage();
  const { featuredMenuItems, upcomingEvents } = useAdminData();

  return (
    <>
      <Hero />

      <section className="container section-pad">
        <MotionReveal>
          <SectionHeading
            eyebrow={copy.home.experience.eyebrow}
            title={copy.home.experience.title}
            description={copy.home.experience.description}
          />
        </MotionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item, index) => (
            <MotionReveal key={copy.home.experiences[index].title} delay={index * 0.08}>
              <Card className="h-full bg-white/[0.045] p-5">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 font-display text-xl font-bold text-white">{copy.home.experiences[index].title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.62]">{copy.home.experiences[index].description}</p>
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
                eyebrow={copy.home.featured.eyebrow}
                title={copy.home.featured.title}
                description={copy.home.featured.description}
              />
              <Button asChild variant="outline">
                <Link to="/menu">
                  {copy.actions.fullMenu} <ArrowRight className="ml-2 h-4 w-4" />
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
              eyebrow={copy.home.agenda.eyebrow}
              title={copy.home.agenda.title}
              description={copy.home.agenda.description}
            />
            <Button asChild variant="outline">
              <Link to="/events">
                {copy.actions.seeEvents} <ArrowRight className="ml-2 h-4 w-4" />
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
              eyebrow={copy.home.story.eyebrow}
              title={copy.home.story.title}
              description={copy.home.story.description}
            />
            <Button asChild className="mt-8">
              <Link to="/about">{copy.actions.readStory}</Link>
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
            eyebrow={copy.home.gallery.eyebrow}
            title={copy.home.gallery.title}
            description={copy.home.gallery.description}
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
