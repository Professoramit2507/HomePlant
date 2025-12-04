import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import HomeData from "../HomeData/HomeData";
import { AuthContext } from "../../Provider/AuthProvider";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Slide from "../Slide/Slide";

const Home = () => {
  const homeData = useLoaderData();
  const plantsOfTheWeek = useLoaderData();

  console.log(homeData);
  return (
    <motion.div className="">
      <h1 className="text-2xl font-bold text-center py-5">
        This is <span className="text-green-600">Home </span>
      </h1>

      <div>
        <Slide></Slide>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto p-10">
        <Suspense fallback={<span>Loading...</span>}>
          {homeData.map((homeData) => (
            <HomeData key={homeData.id} homeData={homeData}></HomeData>
          ))}
        </Suspense>
      </div>

      <div className="card-actions flex justify-center">
        <Link to="/plants">
          <button className="btn btn-secondary">See All</button>
        </Link>
      </div>

      <section className="mt-5 mb-5 bg-[#f5f7f4] m-10 p-10 rounded-2xl">
  <h1 className="text-center py-4 text-2xl font-bold">
    Plant of the Week
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
    {plantsOfTheWeek.slice(0, 3).map((plant) => (
      <div
        key={plant.id}
        className="bg-white border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
      >
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h2 className="text-xl font-semibold text-center mb-2">{plant.plantName}</h2>
        <p className="text-sm text-gray-600 text-center">{plant.description.slice(0, 100)}...</p>
      </div>
    ))}
  </div>
</section>

    </motion.div>
  );
};

export default Home;
