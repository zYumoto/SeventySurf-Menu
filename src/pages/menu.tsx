import { CtaBanner } from "@/components/cta-banner";
import { MenuFilter } from "@/components/menu-filter";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { menuItems } from "@/lib/data";

export function MenuPage() {
  return (
    <>
      <section className="container pb-12 pt-32 md:pt-40">
        <MotionReveal>
          <SectionHeading
            eyebrow="Menu"
            title="Cocktails, coastal plates and late-night cravings."
            description="Filter the menu by category and build the table around drinks, starters, mains, burgers or dessert."
          />
        </MotionReveal>
      </section>
      <section className="container pb-20">
        <MotionReveal delay={0.08}>
          <MenuFilter items={menuItems} />
        </MotionReveal>
      </section>
      <CtaBanner title="Seen enough to get hungry?" description="Reserve a table and start with the house signatures." />
    </>
  );
}
