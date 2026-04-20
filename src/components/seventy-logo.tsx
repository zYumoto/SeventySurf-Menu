import { cn } from "@/lib/utils";

type SeventyLogoProps = {
  className?: string;
  markClassName?: string;
};

export function SeventyLogo({ className, markClassName }: SeventyLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 260 92"
        role="img"
        aria-label="Seventy Surf"
        className={cn("h-12 w-36 overflow-visible text-white", markClassName)}
      >
        <text
          x="8"
          y="58"
          fill="currentColor"
          fontFamily='"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive'
          fontSize="58"
          fontWeight="500"
          letterSpacing="-3"
          transform="rotate(-3 110 45)"
        >
          Seventy
        </text>
        <path
          d="M12 63 C45 50, 58 73, 86 61 C116 48, 135 65, 160 55 C188 45, 213 39, 250 43"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
          opacity="0.8"
        />
        <path
          d="M177 54 C164 77, 171 89, 192 75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="4"
          opacity="0.85"
        />
      </svg>
    </span>
  );
}
