import React from "react";
import { Link } from "react-router";

const HomeData = ({ homeData }) => {
  console.log("From HomeData", homeData);

  return (
    <div className="card bg-[#f5f7f4] text-black w-full md:w-72 lg:w-80 xl:w-96 shadow-md hover:shadow-lg transition-all rounded-lg p-4">
      <figure>
        <img
          className="object-cover w-full h-48 rounded-md mb-4"
          src={homeData.image}
          alt={homeData.plantName}
        />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title text-xl font-semibold">{homeData.plantName}</h2>
        <h3 className="text-lg font-medium text-gray-700">Price: {homeData.price}</h3>
        <h3 className="text-lg font-medium text-gray-700">Rating: {homeData.rating}</h3>
        <p className="text-sm text-gray-600">{homeData.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        <div className="card-actions flex justify-center">
          <Link to={`/card_details/${homeData.id}`}>
            <button className="btn bg-green-700 text-white hover:bg-green-800 rounded-md px-6 py-2 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
