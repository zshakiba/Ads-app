import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousel = ({ items, renderItem, slidesPerView }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Store Swiper instance

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="carousel-container relative rounded-lg">
      {/* Left Arrow */}
      <button
        ref={prevRef}
        className="absolute top-1/2 -left-4 z-10 p-2 text-primary-300"
      >
        <ChevronLeftIcon className="w-6 h-6 stroke-primary-500" />
      </button>

      {/* Right Arrow */}
      <button
        ref={nextRef}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-primary-300"
      >
        <ChevronRightIcon className="w-6 h-6 stroke-primary-300" />
      </button>

      {/* Swiper Container */}
      <Swiper
        ref={swiperRef} // Assign Swiper instance to ref
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        breakpoints={{
          320: { slidesPerView: Math.max(slidesPerView - 2, 1) },
          480: { slidesPerView: Math.max(slidesPerView - 1, 1) },
          768: { slidesPerView: slidesPerView },
          1024: { slidesPerView: slidesPerView },
          1280: { slidesPerView: slidesPerView },
        }}
        loop={true}
        className="my-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="carousel-cell p-4">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
