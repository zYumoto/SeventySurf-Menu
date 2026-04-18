const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef plating a restaurant dish",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm bar interior"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Ocean wave near sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium cocktail bar"
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    alt: "Friends dining together"
  }
];

export function GalleryGrid() {
  return (
    <div className="grid auto-rows-[240px] gap-4 md:grid-cols-4">
      {gallery.map((image) => (
        <div key={image.src} className={`relative overflow-hidden rounded-lg border border-white/10 ${image.className ?? ""}`}>
          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/14" />
        </div>
      ))}
    </div>
  );
}
