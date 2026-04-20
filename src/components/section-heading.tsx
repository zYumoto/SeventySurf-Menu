import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Badge variant="outline" className="mb-4 uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </Badge>
      <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-white/[0.64] md:text-lg">{description}</p> : null}
    </div>
  );
}
