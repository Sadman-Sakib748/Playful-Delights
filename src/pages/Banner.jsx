import React from "react";
import banner1 from "../files/Animations/banner-1.json";
import Lottie from "react-lottie";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: banner1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="my-container md:flex justify-center items-center gap-4">
      <div
        className="overflow-x-hidden overflow-y-hidden lg:flex md:w-3/4 bg-gradient-to-r  from-cyan-400 via-indigo-300 to-cyan-400 text-center p-12 rounded-lg mb-4"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <p className="text-7xl font-extrabold text-white">Playful Delights</p>
          <p className="text-3xl font-semibold mt-4 mb-4 text-slate-700">
            Exclusive Toy Place
          </p>
          <p className="text-slate-700 mb-6">
            Premium action figures and customization for your child. You can get
            the best of everything here.
          </p>
          <button className="btn-primary">Explore Now</button>
        </div>
        <div
          className="overflow-x-hidden overflow-y-hidden"
          data-aos="fade-down"
        >
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>

      <div className="overflow-x-hidden overflow-y-hidden" data-aos="fade-down">
        <div className="bg-gradient-to-r  from-orange-500 via-orange-100 to-orange-400 text-center p-12 rounded-lg mb-4">
          <p className="text-4xl font-extrabold text-white">
            Most Selling Figures
          </p>
          <button className="btn-outlined mt-2">See Now</button>
        </div>
        <div className="bg-gradient-to-r  from-green-800 via-green-400 to-green-600 text-center p-12 rounded-lg">
          <p className="text-4xl font-extrabold text-white">
            Discounted Products
          </p>
          <button className="btn-outlined mt-2">Visit Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
