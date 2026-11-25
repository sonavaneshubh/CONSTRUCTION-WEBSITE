import HomeHero from "../components/HomeHero";
import HomeAboutSection from "../components/HomeAboutSection";
import HomeServicesStrip from "../components/HomeServicesStrip";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#4A4F55]">
      <HomeHero />
      <HomeAboutSection />
      <HomeServicesStrip />
    </div>
  );
}
