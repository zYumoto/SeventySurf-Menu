import { useLanguage, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
  className?: string;
};

const options: Language[] = ["pt", "en"];

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-white/12 bg-white/[0.055] p-1 text-xs font-bold uppercase text-white/55",
        className
      )}
      aria-label="Language selector"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={cn(
            "h-8 rounded-full px-3 transition",
            language === option ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-white/10 hover:text-white"
          )}
          aria-pressed={language === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
