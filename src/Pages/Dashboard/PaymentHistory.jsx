import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import QueryPaymentHistory from '../../Hooks/Tanstack/QueryPaymentHistory';
import Dashboardbar from '../../Components/Dashboardbar';

const PaymentHistory = () => {
  //  const [paymentHistories,setPaymentHistories] = useState([]);
   const {history} = QueryPaymentHistory()
  //  useEffect (()=>{
  //   const {history} = historyHook;
  //   setPaymentHistories(history)
  //  },[])
   
    return (
        <div className='py-5 space-y-5 '>
      <Dashboardbar pathName={'Payment history'} barText={'Payments'}></Dashboardbar>
        <div className='w-full  py-6 px-3 shadow-md rounded-md bg-white'>
            <h1 className='text-2xl text-black font- font-semibold '>{history?.length} People found</h1>
        </div>
        <div className="overflow-x-auto shadow-lg bg-white rounded-md">
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
