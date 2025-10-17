import React from "react";

import img1 from "../files/Images/carousel1.jpg";
import img2 from "../files/Images/carousel2.jpg";
import img3 from "../files/Images/carousel3.jpg";
import img4 from "../files/Images/carousel4.jpg";
import img5 from "../files/Images/carousel5.jpg";
import img6 from "../files/Images/carousel6.jpg";

const Gallery = () => {
  return (
    <div className="my-container">
      <div>
        <p className="text-5xl text-color font-bold text-center mt-4 mb-10">
          Our Most Popular Action Figures
        </p>
      </div>
      <div
        className="overflow-x-hidden overflow-y-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="zoom-in"
      >
        <img
          src={img1}
          className="border-4 border-blue-600 p-6 rounded-2xl hover:scale-110 hover:duration-300"
          alt=""
        />
        <img
          src={img2}
          className="border-4 border-blue-600 p-6 rounded-2xl hover:scale-110 hover:duration-300"
          alt=""
        />
        <img
          src={img3}
          className="border-4 border-blue-600 p-6 rounded-2xl hover:scale-110 hover:duration-300"
          alt=""
        />
        <img
          src={img4}
          className="border-4 border-blue-600 p-6 rounded-2xl hover:scale-110 hover:duration-300"
          alt=""
        />
        <img
          src={img5}
          className="border-4 border-blue-600 p-6 rounded-2xl hover:scale-110 hover:duration-300"
          alt=""
        />
        <img
          src={img6}
          className="border-4 border-blue-600 p-6 rounded-2xl hover:scale-110 hover:duration-300"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
