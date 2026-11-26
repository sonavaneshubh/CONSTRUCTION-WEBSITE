import HomeHero from "../components/HomeHero";
import HomeAboutSection from "../components/HomeAboutSection";
import HomeServicesStrip from "../components/HomeServicesStrip";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "G A Palve and Company",
    description:
      "Civil and infrastructure engineering in Maharashtra: roads, bridges, water supply systems, PWD contracting and solar projects delivered with dependable quality.",
  });

  return (
    <div className="home-page min-h-screen bg-[#F5F3EE] text-[#343C43]">
      <HomeHero />
      <HomeAboutSection />
      <HomeServicesStrip />
    </div>
  );
}
