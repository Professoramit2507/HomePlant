import React from "react";
import { Link } from "react-router";


const HomeData = ({ homeData }) => {
  console.log("From HomeData", homeData);
  
  return (
    <div className="card bg-[#f5f7f4] text-black w-96 shadow-sm border-2  ">
      <figure>
        <img className="object-cover w-60 " src={homeData.image} alt="plant" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{homeData.plantName}</h2>
        {/* <h2 className="card-title">{homeData.id}</h2> */}
        <h3 className="card-title">Price : {homeData.price}</h3>
        <h3 className="card-title">Rating : {homeData.rating}</h3>
        <p>{homeData.description.split(" ").slice(0, 8).join(" ") + "..."}</p>
        <div className="card-actions flex justify-center">
          <Link to={`/card_details/${homeData.id}`}>
            <button className="btn bg-green-700 text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
