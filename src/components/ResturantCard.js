import React from "react";
import "./ResturantCard.css";
import { FaLocationDot } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";

function ResturantCard({
  name,
  rating,
  address,
  outcode,
  postcode,
  type_of_food,
}) {
  return (
    <>
      <div className="cart">
        <div className="ratingContainer">
          <h1>{name}</h1>
          <p>
            Rating : <span>{rating}</span>
          </p>
        </div>
        <p className="address">
          <FaLocationDot />
          {address}
        </p>
        <span className="code">
          {outcode} {postcode}
        </span>

        <div className="foodInfo">
          <p className="foodType">
          <GiForkKnifeSpoon className="knife"/>{type_of_food}</p>
          <p>View Menu</p>
        </div>
      </div>
    </>
  );
}

export default ResturantCard;
