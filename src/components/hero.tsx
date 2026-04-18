import { ArrowRight, MapPin, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/motion-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden pt-24">
      <img
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2200&q=85"
        alt="Busy premium restaurant bar at night"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,8,0.94)_0%,rgba(5,8,8,0.68)_46%,rgba(5,8,8,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,8,0.15)_0%,rgba(5,8,8,0.82)_92%)]" />

      <div className="container relative z-10 flex min-h-[calc(92svh-6rem)] items-center py-16">
        <MotionReveal className="max-w-3xl">
          <div className="mb-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
            <span className="rounded-md border border-white/15 bg-white/8 px-3 py-2">Restaurant</span>
            <span className="rounded-md border border-white/15 bg-white/8 px-3 py-2">Bar</span>
            <span className="rounded-md border border-white/15 bg-white/8 px-3 py-2">Music</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Surf, drinks, food and music in one vibe.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            A place to enjoy great food, signature drinks and unforgettable nights.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Reserve table <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/menu">View menu</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/68 sm:grid-cols-2">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Santos coast, urban nights
            </p>
            <p className="flex items-center gap-2">
              <Music2 className="h-4 w-4 text-primary" /> Live music and DJ weekends
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
