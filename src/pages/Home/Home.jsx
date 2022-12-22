import React from 'react'
import GeneralStatistic from './generalStatistic/GeneralStatistic';
import CardBalance from './cardBalance/CardBalance';
import BalanceAmount from './balanceAmount/BalanceAmount';
import ExpenseDay from './expenseDay/ExpenseDay';

const Home = () => {
  return (
    <div className="lg:px-6 bg-slate-50">
      <h2 className="ml-12 text-3xl font-semibold mt-6">Home</h2>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-9/12 w-full ">
          <CardBalance />
          <BalanceAmount />
          <ExpenseDay/>
        </div>
        <div className="flex-1 shadow-lg border-1 ">
          <GeneralStatistic/>
        </div>
      </div>


    
    </div>
  )
}

export default Home