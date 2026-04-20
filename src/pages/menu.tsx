import { CtaBanner } from "@/components/cta-banner";
import { MenuFilter } from "@/components/menu-filter";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { menuItems } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function MenuPage() {
  const { copy } = useLanguage();

  return (
    <>
      <section className="container pb-12 pt-32 md:pt-40">
        <MotionReveal>
          <SectionHeading eyebrow={copy.menu.eyebrow} title={copy.menu.title} description={copy.menu.description} />
        </MotionReveal>
      </section>
      <section className="container pb-20">
        <MotionReveal delay={0.08}>
          <MenuFilter items={menuItems} />
        </MotionReveal>
      </section>
      <CtaBanner title={copy.menu.ctaTitle} description={copy.menu.ctaDescription} />
    </>
  );
}
