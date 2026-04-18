import eventsData from "@/data/events.json";
import menuData from "@/data/menu.json";

export const menuCategories = [
  "All",
  "Drinks",
  "Starters",
  "Main Dishes",
  "Burgers/Sandwiches",
  "Desserts"
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  id: string;
  name: string;
  category: Exclude<MenuCategory, "All">;
  description: string;
  price: number;
  featured: boolean;
  image: string;
  tags: string[];
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

export const menuItems = menuData as MenuItem[];
export const events = eventsData as EventItem[];
export const featuredMenuItems = menuItems.filter((item) => item.featured);
export const upcomingEvents = events.filter((event) => event.time !== "Closed").slice(0, 4);
