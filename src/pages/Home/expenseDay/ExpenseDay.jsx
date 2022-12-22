import React from "react";

const ExpenseDay = () => {
  return (
    <div className="sm:p-10 p-2">
      <h2 className="text-xl font-semibold mb-6">Expense day</h2>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between py-6 px-4 rounded-lg shadow-xl">
          <p className="ml-6 sm:text-[16px] text-[14px]">Food Expense</p>
          <div className="flex sm:gap-6 gap-2 mr-8">
            <p>$13.15</p>
            <small>-4%</small>
          </div>
        </div>
        <div className="flex justify-between py-6 px-4 shadow-lg rounded-lg">
          <p className="ml-6 sm:text-[16px] text-[14px]">Food Expense</p>
          <div className="flex sm:gap-6 gap-2 mr-8">
            <p>$13.15</p>
            <small>-4%</small>
          </div>
        </div>
        <div className="flex justify-between py-6 px-4 shadow-xl rounded-lg">
          <p className="ml-6 sm:text-[16px] text-[14px]">Food Expense</p>
          <div className="flex sm:gap-6 gap-2 mr-8">
            <p>$13.15</p>
            <small>-4%</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDay;
