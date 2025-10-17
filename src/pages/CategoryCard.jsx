/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CategoryCard = ({ toy }) => {
  const { _id, toyName, toyPictureUrl, toyCategory, price, rating } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={toyPictureUrl} alt="toy" className="rounded-xl w-48 h-48" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyName}</h2>
        <p>Category: {toyCategory}</p>
        <p>Price: {price} $</p>
        <div className="flex-col">
          <p className="text-lg font-semibold">Rating: {toy.rating}</p>
          <div className="flex justify-center mt-2">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/toyDetails/${_id}`}>
            {" "}
            <button className="btn-outlined">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
