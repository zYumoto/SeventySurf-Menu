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

const categoryImageIds: Record<string, string[]> = {
  burgers: [
    "1568901346375-23c9450c58cd",
    "1551782450-a2132b4ba21d",
    "1571091718767-18b5b1457add",
    "1586190848861-99aa4a171e90"
  ],
  acompanhamentos: ["1573080496219-bb080dd4f877", "1639024471283-03518883512d"],
  "para-compartilhar": ["1550547660-d9450f859349", "1568901346375-23c9450c58cd"],
  sanduiches: ["1528735602780-2552fd46c7af", "1509722747041-616f39b57569"],
  sucos: ["1622597467836-f3285f2131b8", "1600271886742-f049cd451bba"],
  softs: ["1581006852262-e4307cf6283a", "1622597467836-f3285f2131b8"],
  mocktails: ["1544145945-f90425340c7e", "1497534446932-c925b458314e", "1551024709-8f23befc6f87"],
  cervejas: ["1608270586620-248524c67de9", "1535958636474-b021ee887b13", "1571613316887-6f8d5cbf7ef7"],
  "cervejas-especiais": ["1535958636474-b021ee887b13", "1608270586620-248524c67de9"],
  baldes: ["1567696911980-2eed69a46042", "1608270586620-248524c67de9"],
  "drinks-autorais": [
    "1566417713940-fe7c737a9ef2",
    "1551538827-9c037cb4f32a",
    "1544145945-f90425340c7e",
    "1536935338788-846bb9981813"
  ],
  classicos: ["1551024709-8f23befc6f87", "1497534446932-c925b458314e", "1566417713940-fe7c737a9ef2"],
  "mais-pedidos": ["1551538827-9c037cb4f32a", "1514362545857-3bc16c4c7d1b", "1551024709-8f23befc6f87"],
  energeticos: ["1622543925917-763c34d1a86e"],
  "drinks-prontos": ["1629203851122-3726ecdf080e", "1581006852262-e4307cf6283a"],
  "drinks-red-bull": ["1622543925917-763c34d1a86e", "1551538827-9c037cb4f32a"],
  doses: ["1527281400683-1aae777175f8", "1514362545857-3bc16c4c7d1b"]
};

const itemImageIds: Record<string, string> = {
  "burgers:Burger Bacon": "1568901346375-23c9450c58cd",
  "burgers:Melt": "1520072959219-c595dc870360",
  "burgers:Smash Duplo": "1571091718767-18b5b1457add",
  "burgers:Smash": "1551782450-a2132b4ba21d",
  "burgers:Burger de Grão de Bico": "1586190848861-99aa4a171e90",
  "acompanhamentos:Batata Frita (individual)": "1573080496219-bb080dd4f877",
  "acompanhamentos:Batata Frita com Cheddar & Bacon": "1639024471283-03518883512d",
  "para-compartilhar:Mini Burger com Batata Frita": "1550547660-d9450f859349",
  "sanduiches:Carne de Panela": "1528735602780-2552fd46c7af",
  "sanduiches:Carne de Jaca": "1509722747041-616f39b57569",
  "sucos:Laranja com Gengibre": "1600271886742-f049cd451bba",
  "sucos:Abacaxi com Hortelã": "1622597467836-f3285f2131b8",
  "mocktails:Mobisco": "1544145945-f90425340c7e",
  "mocktails:Pink Lemonade": "1497534446932-c925b458314e",
  "drinks-autorais:Martí": "1566417713940-fe7c737a9ef2",
  "drinks-autorais:Brisa": "1551538827-9c037cb4f32a",
  "drinks-autorais:Latino": "1544145945-f90425340c7e",
  "drinks-autorais:Honey Deuxe": "1497534446932-c925b458314e",
  "classicos:Aperol Spritz": "1551024709-8f23befc6f87",
  "classicos:Gin Tônica Clássica": "1566417713940-fe7c737a9ef2",
  "classicos:Mojito": "1551538827-9c037cb4f32a",
  "classicos:Moscow Mule": "1536935338788-846bb9981813",
  "mais-pedidos:Espresso Martini": "1514362545857-3bc16c4c7d1b",
  "mais-pedidos:Negroni": "1551024709-8f23befc6f87",
  "drinks-red-bull:Vodka + Red Bull": "1622543925917-763c34d1a86e",
  "doses:Licor 43": "1527281400683-1aae777175f8",
  "doses:Campari": "1551024709-8f23befc6f87"
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

function getImageLock(id: string) {
  return [...id].reduce((total, character) => total + character.charCodeAt(0), 0) + 700;
}

function getImageFromPool(categorySlug: string, id: string) {
  const pool = categoryImageIds[categorySlug] ?? categoryImageIds["drinks-autorais"];
  return pool[getImageLock(id) % pool.length];
}

function getMenuImageUrl(id: string, item: MenuCatalogItem, categorySlug: string) {
  const imageId = itemImageIds[`${categorySlug}:${item.name}`] ?? getImageFromPool(categorySlug, id);

  return `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=1200&q=80`;
}

export const menuItems = menuCatalog.menu.flatMap((section) =>
  section.items.map((item) => {
    const id = `${section.slug}-${slugify(item.name)}`;

    return {
      ...item,
      id,
      category: section.category,
      categorySlug: section.slug,
      featured: featuredNames.has(item.name),
      image: getMenuImageUrl(id, item, section.slug),
      tags: [section.category]
    };
  })
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
