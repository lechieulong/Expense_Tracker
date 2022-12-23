import React, { useContext, useRef, useState } from "react";

import Button from "../../components/ui/Button";
import NotionErrand from "./NotionErrand";
//import svg
import digitalMoney from "../../assets/digitalMoney.svg";
import food from "../../assets/food.svg";
import saving from "../../assets/saving.svg";
//import context store
import DataContext from "../../context/DataContext";

const Note = () => {
  const [ctSvg, setCtSvg] = useState(digitalMoney);

  const dataCtx = useContext(DataContext);

  const amountRef = useRef();
  const messageRef = useRef();

  //handle filter button
  const handleFilterCategory = (itemButton) => {
    handleChangeSvg(itemButton);
  };

  //handle change SVG
  const handleChangeSvg = (itemButton) => {
    if (itemButton === "Expense") {
      setCtSvg(food);
    } else if (itemButton === "Saving") {
      setCtSvg(saving);
    } else {
      setCtSvg(digitalMoney);
    }
  };

  //handle add amount
  const handleAddAmount = () => {
    //parse input amount to number
    const value = parseInt(amountRef.current.value);
    const messageValue = messageRef.current.value;

    //check value include string or empty field or not
    if (isNaN(value)) {
      return;
    }
    //use Context and call FC addItem()
    dataCtx.addItem({
      amount: value,
      message: messageValue,
    });

    amountRef.current.focus();
    amountRef.current.value = "";
    
  };

  return (
    <div className="mt-10 md:px-16">
      {/* <Button /> */}
      <div className="flex p-4 gap-10 justify-center items-center ">
        {["Expense", "Saving", "Income"].map((itemButton) => (
          <Button
            key={itemButton}
            title={itemButton}
            bgColor="bg-black"
            textColor="text-white"
            pd="px-8 py-3"
            customFunc={() => {
              handleFilterCategory(itemButton);
            }}
          />
        ))}
      </div>
      
      {/* <Content  /> */}
      <div className=" flex  justify-between mt-10 ">
        <h2 className="ml-6 font-semibold text-xl">Expense Note Day </h2>
        <p>
          Total expense:{" "}
          <span className="ml-4 font-semibold text-xl">
            {" "}
            ${dataCtx.totalAmount}
          </span>{" "}
        </p>
      </div>
      <div className="mt-8 flex gap-16 p-10  ">
        <div className="w-5/12">
          <img src={ctSvg} alt="te" />
        </div>

        <div className="  mt-10 w-7/12 ">
          <div className="flex justify-between w-full">
            <div className=" w-96 ">
              <input
                ref={amountRef}
                type="text"
                className=" p-2 w-full bg-slate-100 focus-within:bg-green-50 focus:outline-none border-1 border-green-200"
                placeholder="Enter amount"
              />
            </div>
            <select className="mr-10 p-2 text-sm bg-black text-white rounded-lg">
              <option value="expense" className="text-sm">
                Expense
              </option>
              <option value="saving" className="text-sm">
                Saving
              </option>
              <option value="income" className="text-sm">
                Income
              </option>
            </select>
          </div>
          <div className=" mt-10 ">
            <textarea
              ref={messageRef}
              name="content"
              cols="30"
              rows="6"
              placeholder="Message u want to note?"
              className="p-4 border-1 border-violet-400 w-full focus-within:bg-green-50 focus:outline-none text-purple-600"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          title="Add"
          bgColor="bg-black"
          textColor="text-white"
          pd="px-16 py-3"
          customFunc={handleAddAmount}
        />
      </div>

      <NotionErrand />
    </div>
  );
};

export default Note;
