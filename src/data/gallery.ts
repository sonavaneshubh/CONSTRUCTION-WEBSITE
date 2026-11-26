export interface GalleryImage {
  src: string;
  label: string;
  group: string;
}

export interface GalleryGroup {
  title: string;
  images: Array<Omit<GalleryImage, "group">>;
}

export const galleryGroups: GalleryGroup[] = [
  {
    title: "Roads & Highways",
    images: [
      { src: "/images/hero/road-construction.jpg", label: "Road Construction" },
      { src: "/images/hero/highway.jpg", label: "Highway Corridor" },
      { src: "/images/hero/land-development.jpg", label: "Land Development" },
    ],
  },
  {
    title: "Water & Utilities",
    images: [
      { src: "/images/hero/water-supply-pipeline.jpg", label: "Water Supply Pipeline" },
      { src: "/images/hero/water-infrastructure.jpg", label: "Water Infrastructure" },
      { src: "/images/hero/well-excavation.jpg", label: "Well Excavation" },
    ],
  },
  {
    title: "Bridges & Buildings",
    images: [
      { src: "/images/hero/bridge-construction.jpg", label: "Bridge Construction" },
      { src: "/images/hero/tower-cranes.jpg", label: "Tower Cranes" },
      { src: "/images/hero/commercial-building.jpg", label: "Commercial Building" },
      { src: "/images/hero/construction.jpg", label: "Civil Construction" },
    ],
  },
  {
    title: "Machinery, Solar & Interiors",
    images: [
      { src: "/images/hero/jcb-earthmoving.jpg", label: "JCB & Earthmoving" },
      { src: "/images/hero/solar-farm.jpg", label: "Solar Farm" },
      { src: "/images/hero/interior-office.jpg", label: "Interior Fit-out" },
    ],
  },
];

export const galleryImages: GalleryImage[] = galleryGroups.flatMap((group) =>
  group.images.map((image) => ({ ...image, group: group.title })),
);
