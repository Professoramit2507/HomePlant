
import React from "react";
import { Link, useLoaderData } from "react-router";
import Expart from "../Expart/Expart";

const CardTips = () => {
  const tipsData = useLoaderData();
  console.log("Tipsdata from cardtips", tipsData);
  console.log(tipsData.tipId);
  return (
    <div>
      {
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {tipsData.map((tip) => (
            <div
              key={tip.tipId}
              className="border rounded-2xl shadow-md p-4 text-center"
            >
              <img
                src={tip.icon}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
              <p className="text-gray-600 mb-2">{tip.description}</p>
              <span className="text-sm text-green-600 font-medium">
                {tip.category}
              </span>
            </div>
          ))}
        </div>
      }

         <div className="flex justify-center gap-10 mb-8">
        <div className="flex justify-center items-center">
          <Link to="/plants">
            <button className="btn btn-secondary mt-10 text-sm font-bold">
              Back to plants
            </button>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default CardTips;
