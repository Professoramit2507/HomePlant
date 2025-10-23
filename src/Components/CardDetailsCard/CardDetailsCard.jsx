import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const CardDetailsCard = ({ card }) => {
  const navigate = useNavigate();
  console.log(card);
  return (
    <div>
      Card Details Card
      {card && (
        <div className="card bg-base-100  mx-auto shadow-sm border">
          <figure>
            <img
              className="w-[400px] h-[350px] object-cover"
              src={card.image}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{card.plantName}</h2>
            <p>{card.description}</p>
            <h3 className="font-semibold text-1xl">Price : {card.price}</h3>
            <h3 className="font-semibold text-1xl">Rating : {card.rating}</h3>
            <h3 className="font-semibold text-1xl">
              Stock : {card.availableStock}
            </h3>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center btn btn-primary"
            >
              <FaArrowLeft></FaArrowLeft>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetailsCard;
