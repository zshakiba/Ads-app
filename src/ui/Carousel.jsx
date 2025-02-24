import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Swiper navigation module
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const Carousel = ({ items, renderItem, slidesPerView }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="carousel-container relative  rounded-lg">
      {" "}
      {/* Added rounded-lg */}
      {/* Custom Left Arrow */}
      <button
        ref={prevRef}
        className="absolute top-1/2 -left-4  z-10  p-2 text-primary-300  "
      >
        <ChevronLeftIcon className="w-6 h-6 stroke-primary-500" />
      </button>
      {/* Custom Right Arrow */}
      <button
        ref={nextRef}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-primary-300"
      >
        <ChevronRightIcon className="w-6 h-6 stroke-primary-300" />
      </button>
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]} // Include Navigation module
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: slidesPerView - 2 },
          768: { slidesPerView: slidesPerView - 1 },
          1024: { slidesPerView: slidesPerView },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Dynamically assign navigation elements after Swiper initializes
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
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
