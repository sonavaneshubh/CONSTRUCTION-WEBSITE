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
    coverImage:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=600&fit=crop",
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
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop",
    ],
    featured: true,
    metrics: [
      { label: "Pipeline Span", value: "45 Kilometers" },
      { label: "Storage Capacity", value: "3.5 Million Liters" },
      { label: "Beneficiaries", value: "75,000+ Citizens" },
    ],
  },
  {
    id: "apex-commercial-complex",
    title: "Apex Horizon Corporate Hub & Commercial Tower",
    location: "Commercial IT Park, Pune",
    category: "Buildings & Towers",
    categorySlug: "buildings",
    year: "2023",
    shortDescription:
      "Multi-story corporate commercial complex featuring twin basements, premium glass facade, and earthquake-resistant RCC frame.",
    overview:
      "A modern corporate headquarters building encompassing 220,000 sq.ft of built-up area across G+11 floors. G A Palve and Company executed the complete civil package including deep basement shoring, raft foundation, high-strength concrete superstructure, post-tensioned slabs, and facade sub-structures.",
    scope: [
      "Deep basement excavation with contiguous pile shoring",
      "Mass concrete raft foundation and shear wall construction",
      "Post-tensioned RCC floor slabs for column-free office layouts",
      "Integrated fire suppression, MEP conduits & elevator shafts",
      "Energy-efficient curtain wall framing & granite lobby finishes",
    ],
    status: "Completed",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop",
    ],
    featured: true,
    metrics: [
      { label: "Built-up Area", value: "220,000 Sq.Ft" },
      { label: "Floors", value: "2 Basements + G + 11" },
      { label: "Design Life", value: "75+ Years" },
    ],
  },
  {
    id: "industrial-solar-park",
    title: "15 MW Ground-Mounted Industrial Solar Park",
    location: "Solar Corridor, Gujarat",
    category: "Solar & Clean Energy",
    categorySlug: "solar",
    year: "2024",
    shortDescription:
      "Turnkey civil and structural EPC for 15 MW solar PV generation facility including pile foundations and 33 kV substation.",
    overview:
      "Executed the civil engineering and mounting infrastructure package for a 15 MW utility-scale solar park. The works encompassed land grading across 60 acres, 8,200 driven steel piles, galvanized module mounting structure erection, inverter substations, and internal access road network.",
    scope: [
      "Topographical survey, land clearance & contour grading across 60 acres",
      "Hydraulic pile driving and structural anchoring for 8,200 piles",
      "Assembly of seasonal-tilt hot-dip galvanized mounting structures",
      "Civil construction of 33 kV switchyard, control room & transformer pads",
      "All-weather gravel access roads and boundary security walling",
    ],
    status: "Commissioned & Grid-Tied",
    coverImage:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=900&h=600&fit=crop",
    ],
    featured: true,
    metrics: [
      { label: "Plant Capacity", value: "15 MW Solar PV" },
      { label: "Land Area", value: "60 Acres" },
      { label: "Piles Driven", value: "8,200 Points" },
    ],
  },
  {
    id: "river-bridge-substructure",
    title: "Prestressed Concrete River Bridge & Approaches",
    location: "River Crossing, Karnataka Border",
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
    coverImage:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop",
    ],
    featured: false,
    metrics: [
      { label: "Span Length", value: "320 Meters" },
      { label: "Deep Piles", value: "48 Large-Diameter" },
      { label: "Approach Roads", value: "1.8 Kilometers" },
    ],
  },
  {
    id: "logistics-hub-development",
    title: "Heavy Engineering Logistics Park & Land Development",
    location: "Industrial Corridor, Gujarat",
    category: "Civil & Infrastructure",
    categorySlug: "civil",
    year: "2024",
    shortDescription:
      "Master-planned industrial land development spanning 40 acres with heavy vehicle pavements, PEB warehouses, and storm grids.",
    overview:
      "Comprehensive site development and civil construction of an integrated industrial logistics park. Included bulk cutting and filling of 85,000 cu.m of earth, laser-screeded heavy-duty concrete flooring for warehousing, perimeter security infrastructure, and high-load truck aprons.",
    scope: [
      "85,000 cu.m bulk earthmoving & laser grading",
      "Heavy-duty laser-screeded vacuum dewatered concrete floors (VDF)",
      "Prefabricated engineered building (PEB) foundations and anchor bolts",
      "RCC stormwater channels, culverts & oil-water separator basins",
      "Industrial high-security compound wall and automated toll barriers",
    ],
    status: "Completed",
    coverImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=900&h=600&fit=crop",
    ],
    featured: false,
    metrics: [
      { label: "Park Extent", value: "40 Acres" },
      { label: "Earthwork", value: "85,000 Cu.M" },
      { label: "Paved Apron", value: "45,000 Sq.M" },
    ],
  },
];
