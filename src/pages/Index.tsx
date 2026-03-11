import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { ThemeToggle } from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import PoliciesSection from "@/components/PoliciesSection";
import CareSection from "@/components/CareSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isVisible={loading} />
      <ThemeToggle />
      <main className={loading ? "overflow-hidden h-screen" : ""}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <PoliciesSection />
        <CareSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
