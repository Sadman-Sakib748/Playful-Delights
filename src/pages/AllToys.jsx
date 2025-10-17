/* eslint-disable no-undef */
/* eslint-disable no-extra-semi */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://assignment-11-server-iota-nine.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://assignment-11-server-iota-nine.vercel.app/getToysByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  useTitle("All Toys");

  return (
    <div className="my-container">
      <p className="text-5xl text-center font-bold text-color mb-6">
        This is all the toys our collection contains
      </p>
      <div className="flex justify-center mt-8 mb-6">
        {" "}
        <input
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleSearch}
          type="text"
          placeholder="Search here"
          className="input input-bordered input-primary w-full max-w-xs text-center"
        />
      </div>
      <div className="overflow-x-auto">
        <table
          className="table table-zebra w-full text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          {toys?.map((toy, index) => (
            <tbody key={toy._id}>
              <tr className="hover">
                <th>{index + 1}.</th>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.toyCategory}</td>
                <td>{toy.price} $</td>
                <td>{toy.availableQuantity} pcs</td>
                <Link to={`/toyDetails/${toy._id}`}>
                  {" "}
                  <td>
                    <button className="btn-outlined">View Details</button>
                  </td>
                </Link>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
