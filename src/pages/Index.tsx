import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CampaignsSection from "@/components/CampaignsSection";
import AdoptionSection from "@/components/AdoptionSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
// import TestimonialsSection from "@/components/TestimonialsSection";
import VolunteerSection from "@/components/VolunteerSection";
import TestimonialsSection from "@/components/TestimonialsSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CampaignsSection />
      <AdoptionSection />
      <TestimonialsSection />
      <VolunteerSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
