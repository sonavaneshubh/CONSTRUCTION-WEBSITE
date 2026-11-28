// ============================================================
// PROJECTS DATA — G A Palve and Company Infrastructure Portfolio
// ============================================================

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  categorySlug: string;
  year?: string;
  shortDescription: string;
  overview: string;
  scope: string[];
  status: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projectCategories = [
  { label: "All Projects", slug: "all" },
  { label: "Highways & Roads", slug: "roads" },
  { label: "Civil & Infrastructure", slug: "civil" },
  { label: "Buildings & Towers", slug: "buildings" },
  { label: "Water & Utilities", slug: "water" },
  { label: "Solar & Clean Energy", slug: "solar" },
];

export const projects: Project[] = [
  {
    id: "national-highway-expansion",
    title: "Arterial Highway 4-Lane Expansion Corridor",
    location: "State Highway Corridor, Maharashtra",
    category: "Highways & Roads",
    categorySlug: "roads",
    year: "2024",
    shortDescription:
      "28-kilometer heavy-duty highway widening and asphalt resurfacing with cross-drainage culverts and grade separators.",
    overview:
      "This flagship highway development involved upgrading a congested 2-lane roadway into an engineered 4-lane divided carriageway. The scope included extensive earthwork, dense bituminous macadam (DBM) paving, construction of 14 box culverts, high-visibility signage, and anti-crash barriers meeting national highway safety specifications.",
    scope: [
      "4-lane highway geometric widening across 28 km",
      "Excavation, embankment compaction & sub-base grading",
      "Dense bituminous macadam & bituminous concrete wearing coat",
      "Construction of 14 reinforced concrete box culverts",
      "Solar-powered highway lighting & retro-reflective signage",
    ],
    status: "Successfully Completed",
    coverImage: "/images/hero/road-construction.jpg",
    gallery: [
      "/images/hero/road-construction.jpg",
      "/images/hero/highway.jpg",
      "/images/hero/jcb-earthmoving.jpg",
    ],
    featured: true,
    metrics: [
      { label: "Total Length", value: "28 Kilometers" },
      { label: "Culverts Built", value: "14 Structures" },
      { label: "Execution Time", value: "14 Months" },
    ],
  },
  {
    id: "potable-water-transmission",
    title: "Regional Bulk Water Supply & Reservoir Network",
    location: "Western Municipal Sector, Maharashtra",
    category: "Water & Utilities",
    categorySlug: "water",
    year: "2024",
    shortDescription:
      "45 km ductile iron water pipeline network with 2 high-capacity pump houses and 3 elevated service reservoirs.",
    overview:
      "A transformative public utility infrastructure project delivering drinking water to over 75,000 residents across rural and semi-urban clusters. Included raw water intake pump stations, underground ductile iron (DI K9) pipeline laying, electro-mechanical pump installations, automated SCADA monitoring, and elevated water storage tanks.",
    scope: [
      "45 km DI K9 pipeline excavation, laying & hydrostatic pressure testing",
      "Construction of 3 elevated service reservoirs (total 3.5 ML capacity)",
      "High-head raw and clear water pumping stations",
      "Valve chambers, surge protection & pressure relief valves",
      "SCADA-integrated flow meters and remote monitoring station",
    ],
    status: "Operational / Handed Over",
    coverImage: "/images/hero/water-supply-pipeline.jpg",
    gallery: [
      "/images/hero/water-supply-pipeline.jpg",
      "/images/hero/water-infrastructure.jpg",
      "/images/hero/well-excavation.jpg",
    ],
    featured: true,
    metrics: [
      { label: "Pipeline Span", value: "45 Kilometers" },
      { label: "Storage Capacity", value: "3.5 Million Liters" },
      { label: "Beneficiaries", value: "75,000+ Citizens" },
    ],
  },
  {
    id: "rural-well-development",
    title: "Rural Well Construction & Water Resource Development",
    location: "Karjat Taluka, Ahilyanagar District, Maharashtra",
    category: "Water & Utilities",
    categorySlug: "water",
    year: "2023",
    shortDescription:
      "Community well construction, borehole development and source augmentation for rural water supply schemes.",
    overview:
      "A public water resource development programme executed for rural clusters with limited year-round access to safe water. Works included well excavation, structural lining, aquifer-based borehole development, pump installations and a community operated distribution network.",
    scope: [
      "Site survey, aquifer assessment & source selection",
      "Open well excavation, lining & safety parapets",
      "Borehole drilling, casing development & pump installation",
      "Water quality testing and commissioning support",
      "Community training for operation and routine maintenance",
    ],
    status: "Handed Over to Local Bodies",
    coverImage: "/images/hero/well-excavation.jpg",
    gallery: [
      "/images/hero/well-excavation.jpg",
      "/images/hero/water-supply-pipeline.jpg",
    ],
    featured: false,
    metrics: [
      { label: "Wells Developed", value: "18 Sources" },
      { label: "Beneficiary Villages", value: "7 Villages" },
      { label: "Execution Period", value: "9 Months" },
    ],
  },
  {
    id: "river-bridge-substructure",
    title: "Prestressed Concrete River Bridge & Approaches",
    location: "River Crossing, Maharashtra",
    category: "Civil & Infrastructure",
    categorySlug: "civil",
    year: "2023",
    shortDescription:
      "320-meter prestressed concrete bridge with deep bored pile foundations and 1.8 km elevated approach roads.",
    overview:
      "Critical cross-river connectivity bridge engineered to withstand high flood discharges. Required heavy bored cast-in-situ piling into bedrock, massive RCC pier caps, precast prestressed concrete girders, elastomeric bearing placement, and reinforced earth (RE) approach walls.",
    scope: [
      "Bored cast-in-situ concrete piles through riverbed hard strata",
      "RCC piers, abutments & seismic-restrained pier caps",
      "Precast prestressed concrete girder launching with crawler cranes",
      "Reinforced earth (RE) wall embankments on both approaches",
      "High-tensile crash barriers, drainage spouts & wear course paving",
    ],
    status: "Completed & Commissioned",
    coverImage: "/images/hero/bridge-construction.jpg",
    gallery: [
      "/images/hero/bridge-construction.jpg",
      "/images/hero/tower-cranes.jpg",
    ],
    featured: false,
    metrics: [
      { label: "Span Length", value: "320 Meters" },
      { label: "Deep Piles", value: "48 Large-Diameter" },
      { label: "Approach Roads", value: "1.8 Kilometers" },
    ],
  },
];
