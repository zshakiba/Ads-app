"use client";
import "keen-slider/keen-slider.min.css";
import "swiper/css";
// import SearchAds from "./_component/SearchAds";
import HeroSection from "./_component/HeroSection";
import PublishedAdsSection from "./_component/PublishedAdsSection";
import CategoriesSection from "./_component/CategoriesSection";
import BenefitsSection from "./_component/BenefitsSection";
import HowItWorksSection from "./_component/HowItWorksSection";
import CommentsSection from "./_component/CommentsSection";
import ActiveDriversSection from "./_component/ActiveDriversSection";

// import { useUserContext } from "./_context/home-context";

export default function Home() {
  // const { user } = useUserContext();
  return (
    <>
      {/* <Map /> */}
      {/* <ProgressStepper /> */}
      {/* <SearchAds /> */}
      <HeroSection />
      <PublishedAdsSection />
      <BenefitsSection />
      <CategoriesSection />
      <HowItWorksSection />
      <ActiveDriversSection />
      <CommentsSection />
    </>
  );
}
