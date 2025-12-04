import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import PlantData from "../PlantData/PlantData";
import CardTips from "../Tips/CardTips";

const Plants = () => {
  const plantData = useLoaderData();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 bg-white"
    >
      <h1 className="text-3xl font-bold text-center py-6">
        Discover <span className="text-green-600">Plants</span>
      </h1>

      <Suspense fallback={<span className="block text-center">Loading...</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-11/12 mx-auto">
          {plantData.map((plant) => (
            <PlantData key={plant.id} planData={plant} />
          ))}
        </div>
      </Suspense>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mb-10">
        <Link to="/CardTips">
          <button className="btn btn-neutral text-sm font-semibold w-full sm:w-auto py-3 px-6 rounded-md transition-all duration-300 hover:bg-neutral-600 hover:text-white">
            Click for Card Tips
          </button>
        </Link>

        <Link to="/expert">
          <button className="btn btn-accent text-sm font-semibold w-full sm:w-auto py-3 px-6 rounded-md transition-all duration-300 hover:bg-accent-600 hover:text-white">
            Our Expert
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Plants;
