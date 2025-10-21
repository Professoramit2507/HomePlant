import React from "react";

const PlantData = ({planData}) => {
  return (
   
     
        <div className="card bg-base-100 w-96 border shadow-sm ">
          <figure>
            <img className="object-cover w-60" src={planData.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{planData.plantName}</h2>
            <h3 className="card-title">Price : {planData.price}</h3>
            <h3 className="card-title">Rating : {planData.rating}</h3>
            <p>{planData.description}</p>
            <div className="card-actions flex justify-center">
              <button className="btn btn-soft btn-primary">View Details</button>
            </div>
          </div>
          
        </div>
    
  );
};

export default PlantData;
