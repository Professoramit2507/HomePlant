import React from "react";
import { Link } from "react-router";

const PlantData = ({ planData }) => {
  
  console.log('plantdata 12 ta:',planData)
  return (
    <div className="card bg-base-100 w-96 border shadow-sm ">
      <figure>
        <img className="object-cover w-60" src={planData.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{planData.plantName}</h2>
        {/* <h2 className="card-title">{planData.id}</h2> */}
        <h3 className="card-title">Price : {planData.price}</h3>
        <h3 className="card-title">Rating : {planData.rating}</h3>
        <p>
          {" "}
          {planData.description
            .split(" ") 
            .slice(0, 8)
            .join(" ") + "..."}{" "}
        </p>
        <div className="card-actions flex justify-center">
          <Link to={`/card_details/${planData.id}`}>
              <button className="btn btn-soft btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantData;
