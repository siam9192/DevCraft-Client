import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import QueryPaymentHistory from '../../Hooks/Tanstack/QueryPaymentHistory';
import Dashboardbar from '../../Components/Dashboardbar';
import { Helmet } from 'react-helmet';

const PaymentHistory = () => {
  //  const [paymentHistories,setPaymentHistories] = useState([]);
  const [pages,setPages] = useState([])
  const [currentPage,setCurrentPage] = useState(1)

   const {history,historyRefetch} = QueryPaymentHistory(currentPage)
  useEffect(()=>{
  historyRefetch;
  
  let array = [];
  for(let i = 0; i < Math.ceil(history?.length/5);i++){
   array.push(i+1)
  }
  setPages([...array])
  },[currentPage,history])
  const prev = ()=>{
    const count = currentPage-1;
    if(count > 0){
      setCurrentPage(count)
    }
  }
  const next = ()=>{
    const count = currentPage + 1;
    
    if(count <= pages[pages.length-1]){
      setCurrentPage(count)
    }
  }

   
    return (
        <div className='py-5 space-y-5 h-[100vh]'>
              <Helmet>
            <title>DevCraft||DASHBOARD||PAYMENT||HISTORY</title>
          </Helmet>
      <Dashboardbar pathName={'Payment history'} barText={'Payments'}></Dashboardbar>
        <div className='w-full  py-6 px-3 shadow-md rounded-md bg-white'>
            <h1 className='text-2xl text-black font- font-semibold '>{history?.length} payment history found</h1>
        </div>
        <div className="overflow-x-auto shadow-lg bg-white rounded-md ">
          
  <div className='min-h-[350px]'>
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
     
    
  </table>
  </div>
  <div className='flex justify-center items-center'>
<div className='flex items-center gap-2 text-xl font-semibold text-black'>
{pages.length > 0 && <button onClick={prev}>Prev</button>}
{
pages?.map((page,index)=>{
return <button key={index} className={`${currentPage === page ? 'text-red-500' : ''}`} onClick={()=> setCurrentPage(page)}>{page}</button>
})
}
{pages.length > 0 && <button onClick={next} >Next</button>}
</div>

</div>
  </div>
        </div>
    );
}

export default PaymentHistory;
