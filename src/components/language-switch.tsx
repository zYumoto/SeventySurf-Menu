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
        "relative inline-flex h-11 w-32 items-center rounded-full border border-white/12 bg-white/[0.065] px-2 text-xs font-black uppercase text-white/45 shadow-inner transition hover:border-primary/35 hover:bg-white/[0.085]",
        className
      )}
      aria-label="Change language"
      aria-pressed={!isPortuguese}
    >
      <span className={cn("z-10 flex-1 text-center transition", isPortuguese && "text-primary")}>BR</span>
      <span className={cn("z-10 flex-1 text-center transition", !isPortuguese && "text-primary")}>ENG</span>
      <span
        className={cn(
          "absolute top-1 grid h-9 w-14 place-items-center rounded-full bg-primary text-[11px] font-black text-primary-foreground shadow-[0_8px_22px_rgba(229,173,96,0.22)] transition-transform duration-300 ease-out",
          isPortuguese ? "translate-x-0" : "translate-x-[58px]"
        )}
      >
        {isPortuguese ? "BR" : "ENG"}
      </span>
    </button>
  );
}
