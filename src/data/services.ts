// ============================================================
// SERVICES DATA — 8 Core Infrastructure & Construction Services
// ============================================================

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "civil-construction",
    title: "Civil Construction",
    shortDescription:
      "Heavy civil engineering, structural foundations, bridges, and RCC frameworks engineered for maximum load resilience.",
    description:
      "We provide end-to-end civil construction solutions for public, commercial, and industrial infrastructure. Our seasoned civil engineers ensure structural precision, high-grade steel and concrete reinforcement, and strict adherence to structural safety standards from excavation to roof slab completion.",
    capabilities: [
      "Deep foundation & piling works",
      "Reinforced cement concrete (RCC) frameworks",
      "Steel structural fabrication & erection",
      "Industrial flooring & retaining walls",
      "Heavy load-bearing civil structures",
    ],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop",
    icon: "building-2",
  },
  {
    id: "road-construction",
    title: "Road Construction & Development",
    shortDescription:
      "Building high-capacity highways, expressways, rural roads, and arterial corridors with precision paving.",
    description:
      "Our highway engineering division specializes in durable road construction ranging from high-speed expressways to municipal connecting corridors. We handle site grading, sub-base compaction, dense bituminous macadam (DBM) laying, rigid concrete pavement, and stormwater drainage systems.",
    capabilities: [
      "Highways, expressways & bypass roads",
      "Asphalt & rigid concrete paving",
      "Road widening, strengthening & resurfacing",
      "Culverts, cross-drainage & retaining structures",
      "Thermoplastic road marking & safety barriers",
    ],
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=900&h=600&fit=crop",
    icon: "route",
  },
  {
    id: "water-supply-systems",
    title: "Water Supply Systems",
    shortDescription:
      "Complete water pipeline networks, pump houses, treatment facilities, and elevated storage reservoirs.",
    description:
      "We execute critical municipal and rural water supply infrastructure. From bulk raw water transmission lines and high-capacity intake wells to automated water treatment plants (WTP) and elevated storage reservoirs (ESR), we build systems that safeguard public health and community sustainability.",
    capabilities: [
      "Cross-country water transmission pipelines (DI, MS & HDPE)",
      "Elevated service reservoirs (ESR) & ground storage",
      "Pump houses & electro-mechanical installations",
      "Water treatment plants (WTP) & filtration systems",
      "Hydrostatic testing, valve chambers & metering",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=600&fit=crop",
    icon: "droplets",
  },
  {
    id: "pwd-government-contracting",
    title: "PWD & Government Contracting",
    shortDescription:
      "Registered turnkey contractor for public works departments, municipal bodies, and state infrastructure boards.",
    description:
      "As an approved and registered government contractor, G A Palve and Company delivers tender-based infrastructure projects with full compliance to PWD standards. We provide transparent billing, rigorous material certification, time-bound delivery, and milestone verification required by public authorities.",
    capabilities: [
      "PWD tenders & state infrastructure works",
      "Municipal road & civil asset development",
      "Government institutional buildings & offices",
      "Irrigation, canal lining & flood control structures",
      "Complete technical documentation & statutory audits",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop",
    icon: "landmark",
  },
  {
    id: "building-construction",
    title: "Residential & Commercial Building Construction",
    shortDescription:
      "Turnkey construction of multi-story towers, corporate offices, institutional complexes, and gated townships.",
    description:
      "We combine architectural ingenuity with modern construction management to deliver state-of-the-art multi-story complexes. Our integrated approach covers foundation geotechnical engineering, superstructures, MEP (mechanical, electrical, plumbing) coordination, and premium architectural finishing.",
    capabilities: [
      "Multi-story residential towers & luxury housing",
      "Commercial office parks & retail centers",
      "Institutional buildings, schools & healthcare facilities",
      "Underground basements & automated parking levels",
      "High-durability facade & weatherproofing systems",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop",
    icon: "home",
  },
  {
    id: "solar-energy-solutions",
    title: "Solar Energy Solutions",
    shortDescription:
      "Engineering, procurement, and construction (EPC) for utility-scale ground-mount solar parks and industrial rooftops.",
    description:
      "Harnessing clean power through robust civil and electrical infrastructure. We build ground-mount solar power plants, industrial rooftop installations, substations, and transmission lines that provide renewable, cost-effective energy for manufacturing facilities and commercial enterprises.",
    capabilities: [
      "Ground-mount utility solar power parks",
      "Industrial & commercial rooftop solar EPC",
      "Civil piling, mounting structure erection & cabling",
      "Inverter stations, transformers & grid-tie integration",
      "Operation & maintenance (O&M) and performance monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=900&h=600&fit=crop",
    icon: "sun",
  },
  {
    id: "land-development",
    title: "Land Development",
    shortDescription:
      "Comprehensive site grading, bulk earthmoving, drainage planning, and master infrastructure for industrial layouts.",
    description:
      "Transforming raw terrain into development-ready industrial, residential, and commercial layouts. We execute bulk earthmoving, contour grading, perimeter compound walls, utility trenches, internal road networks, and stormwater retention ponds with heavy earthmoving machinery.",
    capabilities: [
      "Bulk excavation, cutting, filling & site grading",
      "Plot demarcation & industrial layout preparation",
      "Stormwater drainage networks & retention basins",
      "Compound walls, security fencing & entrance gates",
      "Underground utility corridors for water, power & telecom",
    ],
    image:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=900&h=600&fit=crop",
    icon: "shovel",
  },
  {
    id: "interior-design",
    title: "Interior Design & Fit-Out",
    shortDescription:
      "Corporate office interiors, architectural fit-outs, acoustic treatments, and bespoke commercial spaces.",
    description:
      "Complementing our structural capability with high-precision interior fit-outs. We design and deliver sophisticated corporate offices, executive suites, conference halls, and retail spaces featuring modern ergonomics, acoustic ceilings, customized joinery, and energy-efficient lighting.",
    capabilities: [
      "Corporate workspace design & turnkey fit-outs",
      "Custom architectural woodwork & cabinetry",
      "Acoustic wall panelling & suspended ceiling systems",
      "Electrical, networking, HVAC & lighting integration",
      "Premium flooring, glass partitions & finishing",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop",
    icon: "palette",
  },
];
