import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import {
  events as defaultEvents,
  menuItems as defaultMenuItems,
  type EventItem,
  type MenuItem
} from "@/lib/data";
import { siteConfig } from "@/lib/site";

const MENU_KEY = "seventy-admin-menu";
const EVENTS_KEY = "seventy-admin-events";
const SETTINGS_KEY = "seventy-admin-settings";

export type EditableMenuItem = MenuItem & {
  active: boolean;
};

export type EditableEventItem = EventItem & {
  active: boolean;
};

export type SiteSettings = typeof siteConfig;

type AdminStore = {
  menuItems: EditableMenuItem[];
  visibleMenuItems: EditableMenuItem[];
  featuredMenuItems: EditableMenuItem[];
  events: EditableEventItem[];
  visibleEvents: EditableEventItem[];
  upcomingEvents: EditableEventItem[];
  settings: SiteSettings;
  updateMenuItem: (id: string, patch: Partial<EditableMenuItem>) => void;
  updateEvent: (id: string, patch: Partial<EditableEventItem>) => void;
  updateSettings: (patch: Partial<SiteSettings>) => void;
  resetAdminData: () => void;
  exportAdminData: () => string;
  importAdminData: (value: string) => boolean;
};

const AdminStoreContext = createContext<AdminStore | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function withMenuDefaults(items: MenuItem[]): EditableMenuItem[] {
  return items.map((item) => ({ ...item, active: true }));
}

function withEventDefaults(items: EventItem[]): EditableEventItem[] {
  return items.map((event) => ({ ...event, active: event.time !== "Closed" }));
}

const defaultEditableMenu = withMenuDefaults(defaultMenuItems);
const defaultEditableEvents = withEventDefaults(defaultEvents);

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<EditableMenuItem[]>(() => readStorage(MENU_KEY, defaultEditableMenu));
  const [events, setEvents] = useState<EditableEventItem[]>(() => readStorage(EVENTS_KEY, defaultEditableEvents));
  const [settings, setSettings] = useState<SiteSettings>(() => readStorage(SETTINGS_KEY, siteConfig));

  useEffect(() => {
    window.localStorage.setItem(MENU_KEY, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    window.localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  const value = useMemo<AdminStore>(() => {
    const visibleMenuItems = menuItems.filter((item) => item.active);
    const visibleEvents = events.filter((event) => event.active);

    return {
      menuItems,
      visibleMenuItems,
      featuredMenuItems: visibleMenuItems.filter((item) => item.featured),
      events,
      visibleEvents,
      upcomingEvents: visibleEvents.slice(0, 4),
      settings,
      updateMenuItem: (id, patch) =>
        setMenuItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item))),
      updateEvent: (id, patch) =>
        setEvents((current) => current.map((event) => (event.id === id ? { ...event, ...patch } : event))),
      updateSettings: (patch) => setSettings((current) => ({ ...current, ...patch })),
      resetAdminData: () => {
        setMenuItems(defaultEditableMenu);
        setEvents(defaultEditableEvents);
        setSettings(siteConfig);
      },
      exportAdminData: () =>
        JSON.stringify(
          {
            menuItems,
            events,
            settings
          },
          null,
          2
        ),
      importAdminData: (raw) => {
        try {
          const parsed = JSON.parse(raw) as Partial<Pick<AdminStore, "menuItems" | "events" | "settings">>;
          if (parsed.menuItems) setMenuItems(parsed.menuItems as EditableMenuItem[]);
          if (parsed.events) setEvents(parsed.events as EditableEventItem[]);
          if (parsed.settings) setSettings(parsed.settings as SiteSettings);
          return true;
        } catch {
          return false;
        }
      }
    };
  }, [menuItems, events, settings]);

  return <AdminStoreContext.Provider value={value}>{children}</AdminStoreContext.Provider>;
}

export function useAdminData() {
  const context = useContext(AdminStoreContext);

  if (!context) {
    throw new Error("useAdminData must be used inside AdminDataProvider");
  }

  return context;
}
