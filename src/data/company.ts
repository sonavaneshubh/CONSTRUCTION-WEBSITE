// ============================================================
// COMPANY CONFIGURATION — G A Palve and Company Civil & Infrastructure
// ============================================================

const officeAddress =
  "Alsunde, Taluka Karjat, District Ahilyanagar, Maharashtra, India.";

export const company = {
  name: "G A Palve and Company",
  tagline: "Building Infrastructure. Shaping the Future.",
  subTagline:
    "Delivering dependable construction and infrastructure solutions through quality workmanship, efficient execution, and a commitment to excellence.",
  phone: "+91 9577743777",
  phoneAlternate: "+91 7709737777",
  whatsapp: "919577743777",
  email: "gapalveandcompany@gmail.com",
  address: officeAddress,
  businessHours: "Mon – Sat: 9:00 AM – 6:30 PM",
  website: "https://www.ganeshcompany.com",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  maps: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`,
  },
  whatsappMessage:
    "Hello, I would like to inquire about G A Palve and Company's civil & infrastructure construction services.",
};

// Carbyne-Inspired Skills & Achievement Metrics
export const companySkills = [
  {
    title: "Years of Experience",
    value: 10,
    suffix: "+",
    percentage: 95,
    description: "A decade of dependable civil & municipal engineering execution.",
  },
  {
    title: "Projects Completed",
    value: 50,
    suffix: "+",
    percentage: 98,
    description: "Highways, multi-story buildings, and water pipelines delivered on-schedule.",
  },
  {
    title: "Workforce Deployed",
    value: 350,
    suffix: "+",
    percentage: 92,
    description: "Certified civil engineers, site managers, equipment operators, and technicians.",
  },
  {
    title: "Client Satisfaction",
    value: 100,
    suffix: "%",
    percentage: 100,
    description: "Consistently trusted by government departments, developers, and private partners.",
  },
  {
    title: "Infrastructure Delivered",
    value: 120,
    suffix: "+ km",
    percentage: 96,
    description: "Combined arterial highways, urban corridors, and pipeline networks completed.",
  },
  {
    title: "Quality & Safety Compliance",
    value: 100,
    suffix: "%",
    percentage: 100,
    description: "Zero-compromise safety protocols, strict ISO compliance, and third-party inspection.",
  },
];

export const stats = [
  { label: "Years of Experience", value: "10+", icon: "calendar" },
  { label: "Projects Completed", value: "50+", icon: "building" },
  { label: "Infrastructure Delivered", value: "120+ km", icon: "road" },
  { label: "Client Satisfaction", value: "100%", icon: "users" },
];

export interface Strength {
  title: string;
  description: string;
}

export const strengths: Strength[] = [
  {
    title: "Civil & Highway Project Management",
    description:
      "Systematic planning, resource management, and on-site monitoring ensure complex projects are delivered within timeline.",
  },
  {
    title: "High-Grade Certified Materials",
    description:
      "We source and test certified steel, aggregate, and high-performance concrete mix designs adhering to PWD specifications.",
  },
  {
    title: "Seasoned Engineering Workforce",
    description:
      "Our team brings deep expertise across civil structures, water pipelines, transport engineering, and turnkey contracting.",
  },
  {
    title: "Modern Heavy Machinery Fleet",
    description:
      "Equipped with modern earthmovers, asphalt pavers, piling rigs, and compaction machinery for uninterrupted site execution.",
  },
  {
    title: "Client & Department Focused",
    description:
      "We prioritize transparent communication, milestone compliance, and seamless statutory approvals for government and private projects.",
  },
  {
    title: "Zero-Harm Safety Discipline",
    description:
      "Strict personal protective equipment (PPE) enforcement, daily safety toolboxes, and third-party safety audits on all sites.",
  },
];

export const coreValues = [
  {
    title: "Quality Workmanship",
    description:
      "Every project reflects our commitment to precision, structural durability, and high engineering benchmarks.",
    icon: "shield-check",
  },
  {
    title: "Professional Execution",
    description:
      "We orchestrate complex construction operations with systematic methodology, certified talent, and cutting-edge machinery.",
    icon: "briefcase",
  },
  {
    title: "Safety Standards",
    description:
      "Safety protocols are embedded into every operational phase, safeguarding our workforce, site assets, and the community.",
    icon: "hard-hat",
  },
  {
    title: "Reliable Delivery",
    description:
      "Meticulous planning, proactive risk mitigation, and efficient supply lines guarantee milestone fulfillment on time.",
    icon: "clock",
  },
  {
    title: "Experienced Team",
    description:
      "Decades of collective leadership across civil, transport, structural, and public utility domains.",
    icon: "users",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Open, transparent communication and enduring relationships with government bodies and private investors alike.",
    icon: "target",
  },
];

export const visionMission = {
  vision: {
    title: "Our Vision",
    statement:
      "To build a stronger future through reliable infrastructure, innovative construction, and sustainable development.",
    description:
      "We envision shaping sustainable skylines, resilient transportation networks, and modern water and civic infrastructure that uplift communities and power long-term economic growth.",
  },
  mission: {
    title: "Our Mission",
    statement:
      "To deliver quality construction and infrastructure solutions through professional execution, safety, transparency, and customer satisfaction.",
    description:
      "We are committed to delivering turnkey excellence across civil and government infrastructure, leveraging modern engineering methodologies and certified materials while maintaining unwavering integrity.",
  },
};

export const workProcess = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Understanding project mandates, technical feasibility studies, regulatory reviews, and stakeholder alignment.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "Detailed architectural drafting, structural calculations, resource allocation, and timeline milestones.",
  },
  {
    step: "03",
    title: "Project Execution",
    description:
      "Mobilizing high-performance heavy machinery, procuring certified materials, and executing round-the-clock site work.",
  },
  {
    step: "04",
    title: "Quality Inspection",
    description:
      "Multi-stage lab testing, load analysis, environmental assessments, and strict adherence to PWD & ISO codes.",
  },
  {
    step: "05",
    title: "Project Handover",
    description:
      "Commissioning, comprehensive as-built documentation, client verification, and ongoing maintenance support.",
  },
];

export const clientTestimonials = [
  {
    quote:
      "G A Palve and Company delivered our 18 km highway widening package 3 weeks ahead of the scheduled handover. Their machinery deployment and traffic diversion management were exemplary.",
    clientName: "Executive Engineer",
    organization: "Public Works Department (PWD)",
    location: "Maharashtra",
  },
  {
    quote:
      "From earthwork excavation to final RCC structural completion, their engineering team showed complete transparency and adherence to certified concrete mix designs.",
    clientName: "Project Director",
    organization: "Apex Commercial Developments",
    location: "Pune",
  },
  {
    quote:
      "Their execution of the drinking water transmission line and pumping station provided reliable supply to over 40,000 residents. True infrastructure builders.",
    clientName: "Chief Technical Consultant",
    organization: "Municipal Water Board",
    location: "Western Region",
  },
];

export const latestNews = [
  {
    id: "highway-milestone-2024",
    title: "G A Palve and Company Completes Critical 4-Lane Arterial Road Corridor",
    date: "November 2024",
    category: "Highways & Roads",
    excerpt:
      "Successfully commissioned a high-density 4-lane concrete corridor with advanced drainage, smart signage, and anti-skid surface treatments.",
    image: "/images/hero/road-construction.jpg",
  },
  {
    id: "solar-infra-expansion",
    title: "Expanding Into Renewable Infrastructure & Ground-Mount Solar Parks",
    date: "October 2024",
    category: "Renewable Energy",
    excerpt:
      "Combining civil engineering precision with high-efficiency PV arrays to power industrial complexes with clean, reliable solar energy.",
    image: "/images/hero/solar-farm.jpg",
  },
  {
    id: "water-grid-project",
    title: "Smart Water Pipeline & Elevated Storage Reservoir Commissioned",
    date: "September 2024",
    category: "Water Systems",
    excerpt:
      "Constructed a state-of-the-art potable water distribution pipeline network ensuring 24/7 pressurized municipal supply.",
    image: "/images/hero/water-supply-pipeline.jpg",
  },
];
