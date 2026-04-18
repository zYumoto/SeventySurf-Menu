import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { EventItem } from "@/lib/data";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="group grid h-full overflow-hidden bg-white/[0.045] md:grid-cols-[0.82fr_1fr]">
      <div className="relative min-h-[220px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 to-transparent" />
      </div>
      <div className="flex flex-col justify-between p-5">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge>{event.day}</Badge>
            <Badge variant="outline">{event.type}</Badge>
          </div>
          <h3 className="font-display text-2xl font-bold text-white">{event.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/62">{event.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-sm text-white/68">
          <span>{event.date}</span>
          <span className="flex items-center gap-2 text-primary">
            <Clock className="h-4 w-4" /> {event.time}
          </span>
        </div>
      </div>
    </Card>
  );
}
