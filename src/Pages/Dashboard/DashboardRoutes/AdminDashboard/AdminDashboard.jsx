import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { GrWorkshop } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaArrowRight, FaArrowRightToBracket, FaUsers } from 'react-icons/fa6';
import UseAuth from '../../../../Hooks/UserAuth/UseAuth';
import AxiosSecure from '../../../../Hooks/Axios/AxiosSecure';
import { PieChart } from 'recharts';
import Piechart from '../../../../Components/PieChart/Piechart';
import BiaxaBarchart from '../../../../Components/BiaxaBarChart/BiaxaBarchart';
import Charts from '../../../EmployeeDetails/Charts';
import DashboardChart from '../../DashboardChart';


const AdminDashboard = () => {
    const {user} = UseAuth();
    const useAxiosSecure = AxiosSecure();
    const today = new Date();
    const dayOfWeek = today.getDay();
    const [dashboardData,setDashboardData] = useState({})

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayName = weekdays[dayOfWeek];
     const monthName = month[today.getMonth()];
     const year = today.getFullYear();
  useEffect(()=>{
     useAxiosSecure.get('/api/v1/dashboard/admin')
     .then(res => setDashboardData(res.data))
     
  },[])
    
  
console.log(user)
        return (
        <div className='space-y-4'>
       <div className='w-full py-5 px-2 bg-green-300 flex justify-between items-center rounded-md'>
       <div className='flex items-center gap-3'>
        <img src={user?.photoURL} alt="" className='w-14 h-14 rounded-full'/>
        <h1 className='text-black text-2xl'>Welcome {user.displayName.split(' ')[0]} (admin)</h1>
       </div>
       <div>
        <h1 className='text-black text-xl'>{dayName},{today.getMonth()} {monthName} {year}</h1>
       </div>
       </div>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='p-8 bg-blue-600 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Employees</h1>
                    <h1 className='text-white text-2xl font-semibold'>{dashboardData.total_employees}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
          <FaUsers></FaUsers>
          </div>
            </div>
            <div className='p-8 bg-amber-400 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Worksheets</h1>
                    <h1 className='text-white text-2xl font-semibold'>{dashboardData.worksheets}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
          <GrWorkshop></GrWorkshop>
          </div>
            </div>
            <div className='p-8 bg-pink-600 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Fired</h1>
                    <h1 className='text-white text-2xl font-semibold'>{dashboardData.fired}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
          <FaArrowRightToBracket></FaArrowRightToBracket>
          </div>
            </div>
            <div className='p-8 bg-green-600 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Paid Salary</h1>
                    <h1 className='text-white text-2xl font-semibold'>${dashboardData.totalPayedSalaries}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
        <TbMoneybag></TbMoneybag>
          </div>
            </div>

        </div>
        <div className='grid md:grid-cols-2  gap-5 '>
            <div className='bg-white rounded-md shadow-lg  '>
               <div className="py-2 border-b-2 px-3">
               <h1 className='text-2xl text-black font-pop text-capital'>Paid salary chart</h1>
               </div>
  <div className='p-4'>
  {
    // dashboardData.salaries && <DashboardChart salaries={dashboardData.salaries}></DashboardChart>
    // dashboardData.salaries && <Charts salaryHistory={dashboardData.salaries}></Charts>
    dashboardData.salaries && <Piechart salaries={dashboardData.salaries}></Piechart>
  }
  
  </div>
            </div>
            <div className='bg-white rounded-md shadow-lg  '>
               <div className="py-2 border-b-2 px-3">
               <h1 className='text-2xl text-black font-pop'>Recent payment</h1>
               </div>
  <div className='p-4'>
  <div className='flex items-center justify-between  text-xl text-black' >
      <h2>Name</h2><h2>Amount</h2>
      </div>
  {
    dashboardData.recentPayment?.map((payment,index)=>{
      
      return <div className='flex items-center justify-between  text-x text-black' key={index}>
      <h2>{payment.employee_name}</h2><h2>${payment.amount}</h2>
      </div>
    })
  }
  </div>
            </div>
        </div>
        </div>
    );
}

export default AdminDashboard;
