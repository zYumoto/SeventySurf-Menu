import eventsData from "@/data/events.json";
import menuData from "@/data/menu.json";

export const menuCatalog = menuData as MenuCatalog;
export const menuCategories = ["Todos", ...menuCatalog.menu.map((section) => section.category)];

export type MenuCategory = string;

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  price: number;
  featured: boolean;
  image: string;
  tags: string[];
};

export type MenuCatalog = {
  restaurant: string;
  currency: "BRL";
  menu: MenuSection[];
};

export type MenuSection = {
  slug: string;
  category: string;
  items: MenuCatalogItem[];
};

export type MenuCatalogItem = {
  name: string;
  price: number;
  description: string;
};

export type EventItem = {
  id: string;
  date: string;
  day: string;
  title: string;
  description: string;
  time: string;
  type: string;
  image: string;
};

const categoryImages: Record<string, string> = {
  burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
  acompanhamentos: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
  "para-compartilhar": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  sanduiches: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
  sucos: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1200&q=80",
  softs: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=1200&q=80",
  mocktails: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
  cervejas: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1200&q=80",
  "cervejas-especiais": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1200&q=80",
  baldes: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=1200&q=80",
  "drinks-autorais": "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80",
  classicos: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
  "mais-pedidos": "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
  energeticos: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=1200&q=80",
  "drinks-prontos": "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=1200&q=80",
  "drinks-red-bull": "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1200&q=80",
  doses: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1200&q=80"
};

const featuredNames = new Set([
  "Burger Bacon",
  "Mini Burger com Batata Frita",
  "Martí",
  "Brisa",
  "Espresso Martini",
  "Batata Frita com Cheddar & Bacon",
  "Aperol Spritz",
  "Mobisco"
]);

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const menuItems = menuCatalog.menu.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    id: `${section.slug}-${slugify(item.name)}`,
    category: section.category,
    categorySlug: section.slug,
    featured: featuredNames.has(item.name),
    image: categoryImages[section.slug] ?? categoryImages["drinks-autorais"],
    tags: [section.category]
  }))
);

export const events = eventsData as EventItem[];
export const featuredMenuItems = menuItems.filter((item) => item.featured);
export const upcomingEvents = events.filter((event) => event.time !== "Closed").slice(0, 4);

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: menuCatalog.currency
  }).format(value);
}
