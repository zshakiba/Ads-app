import { ads } from "@/constants/data";
import Button from "@/ui/Button";
import Carousel from "@/ui/Carousel";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PublishedAdsSection = () => {
  // Function to render each ad card
  const renderAdCard = (ad) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={ad.imageUrl}
        alt={ad.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <p className="text-sm font-medium">{ad.title}</p>
        <p className="text-xs text-gray-500 mt-1">{ad.description}</p>
        <p
          className={`text-xs mt-2 ${
            ad.status === "منتشر شده" ? "text-green-500" : "text-red-500"
          }`}
        >
          {ad.status}
        </p>
      </div>
    </div>
  );

  return (
    // <div className="container xl:max-w-screen-xl text-center">
    <div className="flex-row justify-center w-full pt-4 md:pt-0">
      <div className="mx-auto p-0">
        <div className="py-6 px-24">
          <div className="flex justify-between border-b border-secondary-300">
            <p className="text-base font-bold p-2 text-secondary-500">
              آخرین تبلیغات منتشر شده
            </p>
            <div className="flex justify-center items-center">
              <p className="text-sm p-2 text-primary-500">مشاهده همه</p>
              <ChevronLeftIcon className="w-4 h-4 stroke-primary-500" />
            </div>
          </div>

          {/* Carousel for Ads */}
          <div className="p-8  rounded-2xl">
            <Carousel
              items={ads}
              renderItem={renderAdCard}
              slidesPerView={5}
              options={{ slidesPerView: 5 }} // Customize options for this section
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default PublishedAdsSection;
