import React from "react";

const SecondSection = () => {
  return (
    <div className="my-container">
      <p className="text-5xl text-color font-bold text-center mt-4 mb-6">
        Why Love Us
      </p>
      <hr className="border-2 w-12 mx-auto mb-24" />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-24 mb-24">
        <div
          className="overflow-x-hidden overflow-y-hidden"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="w-32 h-32 bg-purple-800 rounded-full text-center text-5xl font-bold text-slate-300 mb-6">
            1
          </p>
          <p className="text-lg font-semibold text-pink-500 mb-2">
            Variety of toys
          </p>
          <p>You can choose from our vast collection of toys</p>
        </div>
        <div
          className="overflow-x-hidden overflow-y-hidden"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="w-32 h-32 bg-green-600 rounded-full text-center text-5xl font-bold text-slate-300 mb-6">
            2
          </p>
          <p className="text-lg font-semibold text-pink-500 mb-2">
            Customization
          </p>
          <p>You can customize your own toy just the way you like it</p>
        </div>
        <div
          className="overflow-x-hidden overflow-y-hidden"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="w-32 h-32 bg-yellow-600 rounded-full text-center text-5xl font-bold text-slate-300 mb-6">
            3
          </p>
          <p className="text-lg font-semibold text-pink-500 mb-2">
            Fast Delivery
          </p>
          <p>We can deliver any toys you order within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
