import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import PlantData from "../PlantData/PlantData";
import CardTips from "../Tips/CardTips";

const Plants = () => {
  const plantData = useLoaderData();
  //console.log('plantdata 12 ta:',plantData)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 bg-white"
    >
      <h1 className="text-3xl font-bold text-center py-6">
        This is <span className="text-green-600">Plant</span>
      </h1>

      <Suspense
        fallback={<span className="block text-center">Loading...</span>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto py-5">
          {plantData.map((plantData) => (
            <PlantData key={plantData.id} planData={plantData} />
          ))}
        </div>
      </Suspense>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mb-10">
        <Link to="/CardTips">
          <button className="btn btn-neutral text-sm font-semibold w-full sm:w-auto">
            Click for Card Tips
          </button>
        </Link>

        <Link to="/expert">
          <button className="btn btn-accent text-sm font-semibold w-full sm:w-auto">
            Our Expert
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Plants;
