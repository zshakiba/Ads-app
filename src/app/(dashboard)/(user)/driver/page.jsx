"use client";
import "keen-slider/keen-slider.min.css";
import "swiper/css";
import HeroSection from "../-/components/HeroSection";
import PublishedAdsSection from "../-/components/PublishedAdsSection";
import BenefitsSection from "../-/components/BenefitsSection";
import HowItWorksSection from "../-/components/HowItWorksSection";
import TestimonialsSection from "../-/components/TestimonialsSection";
import SearchAds from "../-/components/SearchAds";
import ActiveDriversSection from "../-/components/ActiveDriversSection";
import CategoriesSection from "../-/components/CategoriesSection";
import ProgressStepper from "@/ui/ProgressStepper";
import Map from "@/ui/Map";
import FilterCheckbox from "@/ui/FilterSidebar";
import { FocusCards } from "@/ui/FocusCards";
import Header from "shared-components/Header";
import Footer from "shared-components/Footer";

// export const metadata = {
//   title: "خانه - تبلیغات هوشمند با وانت‌ها",
// };

export default function Home() {
  return (
    <>
      <main>
        {/* <Map /> */}
        {/* <ProgressStepper /> */}

        <Header />
        <SearchAds />
        <div className="mx-auto min-h-screen xl:max-w-7xl 2xl:max-w-screen-2xl pt-0">
          <HeroSection />
          <PublishedAdsSection />
          <CategoriesSection />
          <BenefitsSection />
          <ActiveDriversSection />
          <HowItWorksSection />
          <TestimonialsSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
