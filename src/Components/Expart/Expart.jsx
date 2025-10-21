import React from "react";
import { Link, useLoaderData } from "react-router";

const Expart = () => {
  const expertData = useLoaderData();

  console.log("ExpertData:", expertData);

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-24 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
        Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 justify-items-center">
        {expertData.map((expert) => (
          <div
            key={expert.expertId}
            className="border rounded-2xl  p-6 w-full mx-auto ml-0 md:ml-36 max-w-xs text-center bg-white"
          >
            <img
              src={expert.image}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
            <p className="text-gray-600 mb-2">{expert.specialization}</p>
            <span className="text-sm text-green-600 font-medium">
              Experience: {expert.experience}
            </span>
          </div>
        ))}
      </div>


      <div className="flex justify-center gap-10 mb-8">
        <div className="flex justify-center items-center">
          <Link to="/plants">
            <button className="btn btn-primary mt-10 text-sm font-bold">
              Back to plants
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expart;
