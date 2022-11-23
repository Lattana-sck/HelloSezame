import React from 'react'

function result({monthlyBudget}) {
  if(monthlyBudget !== 0)

  return (
    <div className='shadow-2xl border border-black-800 rounded flex flex-col w-1/4 p-6 m-auto mt-6 text-center justify-center content-center'>
    <h1 className='font-bold text-lg'>Payment</h1><br/>
    <p>
        HelloSezame Program : <br/> 
        $ {monthlyBudget} / month
        For 12 years
    </p>
  </div>
  )
}

export default result