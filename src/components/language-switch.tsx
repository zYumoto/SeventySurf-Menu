import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
  className?: string;
};

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { language, toggleLanguage } = useLanguage();
  const isPortuguese = language === "pt";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={cn(
        "relative inline-flex h-11 w-[148px] items-center overflow-hidden rounded-full border border-white/12 bg-white/[0.065] p-1 text-xs font-black uppercase text-white/45 shadow-inner transition hover:border-primary/35 hover:bg-white/[0.085]",
        className
      )}
      aria-label="Change language"
      aria-pressed={!isPortuguese}
    >
      <span className={cn("z-10 grid h-9 w-1/2 place-items-center transition", isPortuguese && "text-primary-foreground")}>BR</span>
      <span className={cn("z-10 grid h-9 w-1/2 place-items-center transition", !isPortuguese && "text-primary-foreground")}>ENG</span>
      <span
        className={cn(
          "absolute left-1 top-1 h-9 w-[68px] rounded-full bg-primary shadow-[0_8px_22px_rgba(229,173,96,0.22)] transition-transform duration-300 ease-out",
          isPortuguese ? "translate-x-0" : "translate-x-[70px]"
        )}
      />
    </button>
  );
}
