import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title,
  description
}: CtaBannerProps) {
  const { copy } = useLanguage();
  const finalTitle = title ?? copy.cta.title;
  const finalDescription = description ?? copy.cta.description;

  return (
    <section className="container py-10">
      <div className="grid gap-6 rounded-lg border border-primary/24 bg-[linear-gradient(135deg,rgba(229,173,96,0.16),rgba(40,115,118,0.13))] p-6 shadow-glow md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">{finalTitle}</h2>
          <p className="mt-3 max-w-2xl text-white/[0.66]">{finalDescription}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">
              {copy.actions.reserveTable} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
              {copy.actions.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
