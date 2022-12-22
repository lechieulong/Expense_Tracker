import React from "react";
import { MdOutlineSavings } from "react-icons/md";

const BalanceAmount = () => {
  return (
    <div className="flex flex-wrap gap-10 w-full justify-center p-4 mt-10">
      <div className=" py-2">
        <div className="bg-red-200 justify-center p-6 inline-block ml-8 rounded-full shadow-xl">
          <MdOutlineSavings size={25} />
        </div>
        <div className="flex p-2 gap-8 mb-1 mt-2">
          <p className="text-2xl font-semibold">$20.3</p>
          <span className="text-green-400">-4%</span>
        </div>
        <p className="ml-2 opacity-60">Category</p>
      </div>
      <div className=" py-2">
        <div className="bg-red-200 justify-center p-6 inline-block ml-8 rounded-full shadow-xl drop-shadow-sm">
          <MdOutlineSavings size={25} />
        </div>
        <div className="flex p-2 gap-8 mb-1 mt-2">
          <p className="text-2xl font-semibold">$20.3</p>
          <span className="text-green-400">-4%</span>
        </div>
        <p className="ml-2 opacity-60">Category</p>
      </div>
      <div className="py-2">
        <div className="bg-red-200 justify-center p-6 inline-block ml-8 rounded-full shadow-xl">
          <MdOutlineSavings size={25} />
        </div>
        <div className="flex p-2 gap-8 mb-1 mt-2">
          <p className="text-2xl font-semibold">$20.3</p>
          <span className="text-green-400">-4%</span>
        </div>
        <p className="ml-2 opacity-60">Category</p>
      </div>
      <div className=" py-2  ">
        <div className="bg-red-200 justify-center p-6 inline-block ml-8 rounded-full shadow-xl">
          <MdOutlineSavings size={25} />
        </div>
        <div className="flex p-2 gap-8 mb-1 mt-2">
          <p className="text-2xl font-semibold">$20.3</p>
          <span className="text-green-400">-4%</span>
        </div>
        <p className="ml-2 opacity-60">Category</p>
      </div>
    </div>
  );
};

export default BalanceAmount;
