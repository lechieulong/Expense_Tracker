import React from "react";

const AvailableAmount = () => {
  return (
    <div className=" w-6/12 ">
      <div className="mb-8 mt-4">
        <p className="text-gray-300 mb-2">Total Amount</p>
        <p className="md:text-5xl text-3xl">$20.13</p>
      </div>
      <div className="flex justify-between md:text-lg text-sm md:gap-0 gap-4">
        <div className="">
          <p className="opacity-60">Saving Amount</p>
          <p>$20.05</p>
        </div>
        <div className="lg:mr-10">
          <p  className="opacity-60">Available Amount</p>
          <p>$13.13</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableAmount;
