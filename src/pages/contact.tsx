import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { ReservationForm } from "@/components/reservation-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export function ContactPage() {
  return (
    <section className="container grid gap-10 pb-20 pt-32 md:pt-40 lg:grid-cols-[0.92fr_1.08fr]">
      <MotionReveal>
        <SectionHeading
          eyebrow="Contact"
          title="Reserve, ask, follow or find the house."
          description="Use the reservation form for table requests, or go straight to WhatsApp and Instagram for quick contact."
        />

        <div className="mt-8 grid gap-4">
          <Card className="bg-white/[0.045] p-5">
            <p className="flex items-center gap-3 font-bold text-white">
              <MapPin className="h-5 w-5 text-primary" /> Address
            </p>
            <p className="mt-3 text-white/64">{siteConfig.address}</p>
          </Card>
          <Card className="bg-white/[0.045] p-5">
            <p className="flex items-center gap-3 font-bold text-white">
              <Phone className="h-5 w-5 text-primary" /> Hours
            </p>
            <p className="mt-3 text-white/64">{siteConfig.hours}</p>
          </Card>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-4 w-4" /> Instagram
            </a>
          </Button>
        </div>

        <div className="mt-8 flex min-h-[280px] items-center justify-center rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(40,115,118,0.16))] p-6 text-center">
          <div>
            <MapPin className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 font-display text-2xl font-bold text-white">Map placeholder</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/58">
              Replace this block with a Google Maps embed for {siteConfig.mapLabel}.
            </p>
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <ReservationForm />
      </MotionReveal>
    </section>
  );
}
