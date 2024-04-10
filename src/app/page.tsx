import AdvSection from "@/components/AdvSection";
import DiscoverSection from "@/components/DiscoverSection";
import EarlySection from "@/components/EarlySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      <AdvSection />
      <EarlySection />
      <TeamSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
