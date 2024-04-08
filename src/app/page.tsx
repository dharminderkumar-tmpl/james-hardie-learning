import HeroSection from "./components/HeroSection";
import ExploreAll from "./components/ExploreAll";
import ArchitectureSection from "./components/ArchitectureSection";
import Hardiedifference from "./components/Hardiedifference";
import Builder from "./components/Builder";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen  w-full ">
      <div className="" style={{}}>
        <HeroSection />
      </div>
      <ExploreAll />
      <ArchitectureSection />
      <Hardiedifference />
      <Builder />
      <Footer />
    </main>
  );
}
