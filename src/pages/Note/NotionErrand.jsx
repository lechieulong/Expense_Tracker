import React from "react";
import {TiDelete} from 'react-icons/ti'
import {CiEdit} from 'react-icons/ci'


const NotionErrand = () => {
  return (
    <div className="mt-10  p-4 h-max mb-40 ">
      <h2 className="font-semibold mb-10">Notion Errand</h2>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between py-6 px-4 bg-green-200aq rounded-lg shadow-xl">
          <p className="ml-6 sm:text-[16px] text-[14px]">Food Expense</p>
          <div className="flex sm:gap-6 gap-2 mr-8">
            <p><TiDelete size={30}/></p>
            <p><CiEdit size={30}/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotionErrand;
