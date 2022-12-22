import React from 'react'
import Button from '../../../components/ui/Button';
import AvailableAmount from './AvailableAmount';
import DigitalMoney from '../../../assets/digitalMoney.svg'


const CardBalance = () => {
  return (
    <div className="h-[19rem]  p-8 mx-3 my-3 rounded-2xl shadow-2xl bg-black text-white">
      <div className="flex justify-between mb-4 ">
        <h2 className="text-xl font-bold tracking-wider">My Wallet</h2>
        <Button title="View All" />
      </div>
      <div className="flex   justify-between ">
        <div className="flex flex-col justify-center items-center md:ml-4">
        <img src={DigitalMoney} alt="digital_money" className="md:w-40 md:h-40 w-24 h-24 " />
        </div>
        <AvailableAmount/>
      </div>
    </div>
  )
}

export default CardBalance