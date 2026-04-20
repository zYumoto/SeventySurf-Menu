import { CalendarDays, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/i18n";

export function ReservationForm() {
  const { copy } = useLanguage();

  return (
    <form
      className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-5 md:p-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">{copy.reservation.name}</Label>
        <Input id="name" placeholder={copy.reservation.namePlaceholder} autoComplete="name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">{copy.reservation.phone}</Label>
          <Input id="phone" placeholder="+55 13 99999-9999" autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="guests">{copy.reservation.guests}</Label>
          <Input id="guests" type="number" min="1" placeholder="4" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="date">{copy.reservation.date}</Label>
          <Input id="date" type="date" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="time">{copy.reservation.time}</Label>
          <Input id="time" type="time" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">{copy.reservation.message}</Label>
        <Textarea id="message" placeholder={copy.reservation.messagePlaceholder} />
      </div>
      <Button type="submit" size="lg" className="mt-2">
        <CalendarDays className="mr-2 h-4 w-4" /> {copy.reservation.submit}
      </Button>
      <p className="flex items-center gap-2 text-xs leading-5 text-white/[0.45]">
        <Send className="h-4 w-4 text-primary" /> {copy.reservation.note}
      </p>
    </form>
  );
}
