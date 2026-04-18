import { useMemo, useState } from "react";

import { MenuCard } from "@/components/menu-card";
import { Button } from "@/components/ui/button";
import { menuCategories, type MenuCategory, type MenuItem } from "@/lib/data";
import { cn } from "@/lib/utils";

type MenuFilterProps = {
  items: MenuItem[];
};

export function MenuFilter({ items }: MenuFilterProps) {
  const [active, setActive] = useState<MenuCategory>("All");

  const visibleItems = useMemo(() => {
    if (active === "Todos") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3">
        {menuCategories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={active === category ? "default" : "outline"}
            className={cn("shrink-0", active !== category && "text-white/75")}
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
