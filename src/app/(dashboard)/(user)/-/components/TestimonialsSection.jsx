import Button from "@/ui/Button";
import Carousel from "@/ui/Carousel";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const { testimonials } = require("@/constants/data");
const { default: Avatar } = require("@/ui/Avatar");

const TestimonialsSection = () => {
  const renderCard = (item) => (
    <div
      key={item.id}
      className="bg-secondary-50 shadow-lg  p-6 rounded-xl flex flex-col items-center text-center keen-slider__slide number-slide1 "
    >
      <p className="text-start text-secondary-600 leading-relaxed text-xs italic mb-8 h-3/4 ">
        "{item.comment}"
      </p>
      <div className="flex  justify-center items-start gap-8">
        <Avatar src={item.avatar} width={60} height={60} className="mb-2 " />
        <div className="flex flex-col justify-center items-start gap-y-1 ">
          <h3 className="text-sm font-bold text-secondary-500">{item.name}</h3>
          <p className="text-xs text-secondary-50 font-extrabold bg-primary-500 rounded-full px-4 py-1">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-row justify-center w-full pt-4 md:pt-0">
      <div className="mx-auto p-0">
        <div className="py-6 px-24">
          <div className="flex justify-between border-b border-secondary-300">
            <p className="text-base font-bold p-2 text-secondary-500">
              نظرات کاربران ما
            </p>
            <div className="flex justify-center items-center">
              <p className="text-sm p-2 text-primary-500">مشاهده همه</p>
              <ChevronLeftIcon className="w-4 h-4 text-secondary-500" />
            </div>
          </div>

          <div className="px-8  rounded-xl ">
            <Carousel
              items={testimonials}
              renderItem={renderCard}
              slidesPerView={4}
              options={{ slidesPerView: 5 }} // Customize options for this section
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsSection;
