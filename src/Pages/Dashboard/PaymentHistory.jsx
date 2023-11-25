import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import QueryPaymentHistory from '../../Hooks/Tanstack/QueryPaymentHistory';

const PaymentHistory = () => {
  //  const [paymentHistories,setPaymentHistories] = useState([]);
   const {history} = QueryPaymentHistory()
  //  useEffect (()=>{
  //   const {history} = historyHook;
  //   setPaymentHistories(history)
  //  },[])
   
    return (
        <div className='py-5 space-y-5 '>
        <div className='w-full  py-6 px-3 flex justify-between items-center shadow-md rounded-md'>
       <div className='flex items-center gap-2'><MdDashboard className='text-3xl text-blue-600'></MdDashboard> <h3 className='text-xl '>Home/Employees</h3></div>
       <h3 className='text-2xl font-semibold'>Employees</h3>
        </div>
        <div className='w-full  py-6 px-3 shadow-md rounded-md'>
            <h1 className='text-2xl text-black font- font-semibold '>8 People found</h1>
        </div>
        <div className="overflow-x-auto shadow-lg">
  <table className="table">
    {/* head */}
    <thead className='text-black '>
      <tr className='py-5'>
        <th>Month</th>
        <th>Amount</th>
        <th>Transition id</th>
        
      </tr>
    </thead>
    <tbody>
  {
    history?.map((item,index)=>{
   return  <tr key={index}>
<td>{item.month}</td>
<td>
  {item.amount}
</td>
<td>{item.payment_id}</td>
     </tr>

    })
  }
      </tbody>
      <tfoot>
      {/* <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr> */}
    </tfoot>
    
  </table>
  </div>
        </div>
    );
}

export default PaymentHistory;
