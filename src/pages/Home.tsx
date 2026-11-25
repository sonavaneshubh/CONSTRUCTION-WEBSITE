import HomeHero from "../components/HomeHero";
import HomeAboutSection from "../components/HomeAboutSection";
import HomeServicesStrip from "../components/HomeServicesStrip";

export default function Home() {
  return (
    <div className="home-page min-h-screen bg-[#F5F3EE] text-[#343C43]">
      <HomeHero />
      <HomeAboutSection />
      <HomeServicesStrip />
    </div>
  );
}
