import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetailsCard = ({ card }) => {
  const navigate = useNavigate();
  console.log(card);

  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Booking successful!", {
      position: "top-right",
      autoClose: 3000,
    });
    e.target.form.reset();
  };

  return (
    <div>
      Card Details Card
      {card && (
        <div className="card bg-base-100 mx-auto shadow-sm border">
          <figure>
            <img
              className="w-[200px] h-[350px] object-cover"
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
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              <FaArrowLeft />
              Back
            </button>

            <form className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="border p-2 w-full mb-4 rounded-md"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="border p-2 w-full mb-4 rounded-md"
                required
              />

              <button
                onClick={handleClick}
                className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition cursor-pointer"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CardDetailsCard;
