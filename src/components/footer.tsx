import { Instagram, MessageCircle, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b0b]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 font-display text-lg font-black text-primary">
              70
            </span>
            <div>
              <p className="font-display text-xl font-black uppercase tracking-[0.16em] text-white">Seventy Surf</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Restaurant . Bar . Music</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/62">
            Coastal food, signature drinks and late-night energy in a venue built for dinner, friends, music and the next round.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Explore</p>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/62 transition hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Visit</p>
          <div className="space-y-3 text-sm text-white/62">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Seventy Surf. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Waves className="h-4 w-4 text-primary" /> Santos coast energy, after dark.
          </p>
        </div>
      </div>
    </footer>
  );
}
