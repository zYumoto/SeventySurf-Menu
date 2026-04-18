import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatCurrency, type MenuItem } from "@/lib/data";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <Card className="group h-full overflow-hidden bg-white/[0.045]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {item.featured ? <Badge className="absolute left-4 top-4">Featured</Badge> : null}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{item.category}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">{item.name}</h3>
          </div>
          <p className="rounded-md bg-primary/14 px-3 py-2 text-sm font-black text-primary">{formatCurrency(item.price)}</p>
        </div>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/62">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-white/68">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
