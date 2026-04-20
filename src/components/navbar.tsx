import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/language-switch";
import { useAdminData } from "@/lib/admin-store";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { copy } = useLanguage();
  const { settings } = useAdminData();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#091112]/[0.78] backdrop-blur-xl">
      <div className="container flex h-18 items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 font-display text-lg font-black text-primary">
            70
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-black uppercase tracking-[0.16em] text-white">Seventy</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-primary">Surf</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/[0.08] hover:text-white",
                pathname === item.href && "bg-white/10 text-white"
              )}
            >
              {copy.nav[item.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <Button asChild variant="outline">
            <a href={settings.instagram} target="_blank" rel="noreferrer">
              {copy.nav.instagram}
            </a>
          </Button>
          <Button asChild>
            <Link to="/contact">{copy.nav.reserve}</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#091112] px-4 py-4 lg:hidden">
          <nav className="container grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-semibold text-white/[0.72]",
                  pathname === item.href && "bg-white/10 text-white"
                )}
              >
                {copy.nav[item.labelKey]}
              </Link>
            ))}
            <LanguageSwitch className="mt-2" />
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                {copy.nav.reserve}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
