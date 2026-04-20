export const siteConfig = {
  name: "Seventy Surf",
  phone: "+55 13 98120-0835",
  whatsapp: "https://wa.me/5513981200835",
  instagram: "https://instagram.com/seventysurf",
  email: "contato.seventy@gmail.com",
  address: "Rua Quinze de Novembro, 53 - Centro, Santos - SP",
  hours: "Qua 17h-00h | Qui 18h-01h | Sex-Sáb 19h-02h",
  mapLabel: "Seventy Surf, Santos"
};

export const navItems = [
  { labelKey: "home", href: "/" },
  { labelKey: "menu", href: "/menu" },
  { labelKey: "events", href: "/events" },
  { labelKey: "about", href: "/about" },
  { labelKey: "contact", href: "/contact" }
] as const;
