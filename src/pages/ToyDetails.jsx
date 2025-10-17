import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../hooks/useTitle";

const ToyDetails = () => {
  const toy = useLoaderData();
  useTitle("Toy-Details");

  return (
    <div className="my-container">
      <div className="card lg:card-side bg-base-100 shadow-xl p-6">
        <figure>
          <img
            className="rounded-xl lg:w-full"
            src={toy.toyPictureUrl}
            alt="toy"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-5xl text-color font-bold mb-6">{toy.toyName}</h2>
          <h2 className="text-slate-400 mb-8">{toy.description}</h2>
          <p className="text-lg font-semibold">Seller Name: {toy.sellerName}</p>
          {toy.sellerEmail ? (
            <p className="text-lg font-semibold">Seller Email: {toy.sellerEmail}</p>
          ) : (
            ""
          )}
          <p className="text-lg font-semibold">Category: {toy.toyCategory}</p>
          <p className="text-lg font-semibold">Price: {toy.price} $</p>
          <p className="text-lg font-semibold">
            Available Quantity: {toy.availableQuantity} pcs
          </p>
          <div className="flex-col">
            <p className="text-lg font-semibold">Rating: {toy.rating}</p>
            <div className="flex justify-center mt-2">
              <Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
