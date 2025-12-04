import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router-dom";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

function Slide() {
  const data = useLoaderData();

  return (
    <div className="w-full md:w-11/12 mx-auto py-10 bg-base-300 rounded-2xl mb-10">
      {data && data.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,  // For smaller screens (mobile/tablet)
            },
            1024: {
              slidesPerView: 3,  // For large screens (desktop)
            },
          }}
          className="rounded-xl shadow-lg"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 h-64 object-cover rounded-xl shadow-md transition-all transform hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">Loading images...</p>
      )}
    </div>
  );
}

export default Slide;
