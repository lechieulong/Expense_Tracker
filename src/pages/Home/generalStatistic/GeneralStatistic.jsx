import React from "react";
import {FaHome} from 'react-icons/fa'

const GeneralStatistic = () => {
  return (
    <div className="p-4">
      <div className=" flex justify-between mb-10 mt-2">
        <h2 className="font-semibold text-md:xl text-lg">Statistic</h2>
        <select name="statistic" id="statistic" className="md:p-1 text-[14px] bg-slate-100">
          <option value="2022" >Dec 2022</option>
          <option value="2023">Jan 2023</option>
          <option value="2024">July 2024</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2  py-4 px-2 rounded-lg shadow-xl bg-green-200">
          <div className="flex flex-col justify-center items-center p-2 rounded-lg bg-slate-100">
            <FaHome/>
          </div>
          <div className="flex flex-col  ">
            <small className="opacity-70">Total income</small>
            <p >$13.15</p>
          </div>
          <small className="flex flex-col justify-center items-center px-2 bg-violet-200 rounded-lg">+4%</small>  
        </div>
        <div className="flex justify-between gap-2  py-4 px-2 rounded-lg shadow-xl bg-green-200">
          <div className="flex flex-col justify-center items-center p-2 rounded-lg bg-slate-100">
            <FaHome/>
          </div>
          <div className="flex flex-col  ">
            <small className="opacity-70">Total income</small>
            <p >$13.15</p>
          </div>
          <small className="flex flex-col justify-center items-center px-2 bg-violet-200 rounded-lg">+4%</small>  
        </div>
        <div className="flex justify-between gap-2 py-4 px-2 rounded-lg shadow-xl bg-green-200">
          <div className="flex flex-col justify-center items-center p-2 rounded-lg bg-slate-100">
            <FaHome/>
          </div>
          <div className="flex flex-col  ">
            <small className="opacity-70">Total income</small>
            <p >$13.15</p>
          </div>
          <small className="flex flex-col justify-center items-center px-2 bg-violet-200 rounded-lg">+4%</small>  
        </div>
     
      </div>
    </div>
  );
};

export default GeneralStatistic;
