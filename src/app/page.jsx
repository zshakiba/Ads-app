"use client";
import "keen-slider/keen-slider.min.css";
import "swiper/css";
import SearchAds from "./(dashboard)/(user)/-/components/SearchAds";
import HeroSection from "./(dashboard)/(user)/-/components/HeroSection";
import PublishedAdsSection from "./(dashboard)/(user)/-/components/PublishedAdsSection";
import BenefitsSection from "./(dashboard)/(user)/-/components/BenefitsSection";
import HowItWorksSection from "./(dashboard)/(user)/-/components/HowItWorksSection";
import TestimonialsSection from "./(dashboard)/(user)/-/components/TestimonialsSection";
import ActiveDriversSection from "./(dashboard)/(user)/-/components/ActiveDriversSection";
import CategoriesSection from "./(dashboard)/(user)/-/components/CategoriesSection";


// export const metadata = {
//   title: "خانه - تبلیغات هوشمند با وانت‌ها",
// };

export default function Home() {
  return (
    <>
      <main>
        {/* <Map /> */}
        {/* <ProgressStepper /> */}
        <SearchAds />
        <HeroSection />
        <PublishedAdsSection />
        <CategoriesSection />
        <BenefitsSection />
        <ActiveDriversSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
