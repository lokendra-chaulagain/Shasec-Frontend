import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import StatSection from "./components/StatSection";

export default function Home() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col max-w-6xl ">
        <HeroSection />
        <FeatureSection />
        <StatSection />
      </div>
    </div>
  );
}
