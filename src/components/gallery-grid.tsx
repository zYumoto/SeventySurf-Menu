import { useLanguage } from "@/lib/i18n";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    alt: "Ocean wave near sunset",
    label: { pt: "Mar", en: "Ocean" },
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm bar interior",
    label: { pt: "Balcão", en: "Counter" }
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef plating a restaurant dish",
    label: { pt: "Cozinha", en: "Kitchen" }
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    alt: "Cocktail bar",
    label: { pt: "Drinks", en: "Drinks" }
  },
  {
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    alt: "Live music crowd",
    label: { pt: "Som", en: "Sound" }
  }
];

export function GalleryGrid() {
  const { language } = useLanguage();

  return (
    <div className="grid auto-rows-[240px] gap-4 md:grid-cols-4">
      {gallery.map((image) => (
        <div key={image.src} className={`group relative overflow-hidden rounded-lg border border-white/10 ${image.className ?? ""}`}>
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.56)_100%)]" />
          <p className="absolute bottom-4 left-4 rounded-md border border-white/15 bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
            {image.label[language]}
          </p>
        </div>
      ))}
    </div>
  );
}
