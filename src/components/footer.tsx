import { Instagram, MessageCircle, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import { SeventyLogo } from "@/components/seventy-logo";
import { Button } from "@/components/ui/button";
import { useAdminData } from "@/lib/admin-store";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/site";

export function Footer() {
  const { copy } = useLanguage();
  const { settings } = useAdminData();

  return (
    <footer className="border-t border-white/10 bg-[#070b0b]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="mb-5">
            <Link to="/" aria-label="Home">
              <SeventyLogo markClassName="h-14 w-44 text-white transition hover:text-primary" />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{copy.footer.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/[0.62]">{copy.footer.description}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">{copy.footer.explore}</p>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/[0.62] transition hover:text-primary">
                {copy.nav[item.labelKey]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">{copy.footer.visit}</p>
          <div className="space-y-3 text-sm text-white/[0.62]">
            <p>{settings.address}</p>
            <p>{settings.hours}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a href={settings.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> {copy.actions.whatsapp}
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={settings.instagram} target="_blank" rel="noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> {copy.nav.instagram}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-xs text-white/[0.45] md:flex-row md:items-center md:justify-between">
          <p>{copy.footer.rights}</p>
          <p className="flex items-center gap-2">
            <Waves className="h-4 w-4 text-primary" /> {copy.footer.signoff}
          </p>
        </div>
      </div>
    </footer>
  );
}
