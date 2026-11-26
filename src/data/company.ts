// ============================================================
// COMPANY CONFIGURATION — G A Palve and Company Civil & Infrastructure
// ============================================================

const officeAddress =
  "G A PALVE And COMPANY, Nandgaon, Alsunde, Maharashtra 414402";

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
    directionsUrl: "https://maps.app.goo.gl/UWn5hW5Fe78MNVx97?g_st=aw",
  },
  whatsappMessage:
    "Hello, I would like to inquire about G A Palve and Company's civil & infrastructure construction services.",
};

export const stats = [
  { label: "Years of Experience", value: "10+", icon: "calendar" },
  { label: "Projects Completed", value: "50+", icon: "building" },
  { label: "Infrastructure Delivered", value: "120+ km", icon: "road" },
  { label: "Client Satisfaction", value: "100%", icon: "users" },
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
      "We are committed to delivering dependable civil and government infrastructure projects, using modern engineering methods and certified materials while maintaining unwavering integrity.",
  },
};
