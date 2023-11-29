import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { GrWorkshop } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FaArrowRight, FaArrowRightToBracket, FaUsers } from 'react-icons/fa6';
import UseAuth from '../../../../Hooks/UserAuth/UseAuth';
import AxiosSecure from '../../../../Hooks/Axios/AxiosSecure';
import DashboardChart from '../../DashboardChart';


const EmployeeDashboard = () => {
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
     useAxiosSecure.get(`/api/v1/dashboard/employee/${user.email}`)
     .then(res => setDashboardData(res.data))
     
  },[])
    
  

        return (
        <div className='space-y-4'>
       <div className='w-full py-5 px-2 bg-green-300 flex justify-between items-center rounded-md'>
       <div className='flex items-center gap-3'>
        <img src={user?.photoURL} alt="" className='w-14 h-14 rounded-full'/>
        <h1 className='text-black text-2xl'>Welcome {user.displayName.split(' ')[0]}</h1>
       </div>
       <div>
        <h1 className='text-black text-xl'>{dayName},{today.getMonth()} {monthName} {year}</h1>
       </div>
       </div>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
            <div className='p-8 bg-amber-400 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Worksheets</h1>
                    <h1 className='text-white text-2xl font-semibold'>{dashboardData.worksheets?.length}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
          <GrWorkshop></GrWorkshop>
          </div>
            </div>
            <div className='p-8 bg-blue-600 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Salary count</h1>
                    <h1 className='text-white text-2xl font-semibold'>{dashboardData?.salaryCount}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
          <TbMoneybag></TbMoneybag>
          </div>
            </div>
            <div className='p-8 bg-green-600 flex items-center justify-between rounded-lg'>
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Total Salary</h1>
                    <h1 className='text-white text-2xl font-semibold'>${dashboardData?.total_salaries}</h1>
                </div>
          <div className='text-black text-4xl px-4 py-3 bg-white rounded-md'>
        <TbMoneybag></TbMoneybag>
          </div>
            </div>

        </div>
        <div className='grid md:grid-cols-2  gap-5 '>
            <div className='bg-white rounded-md shadow-lg  '>
               <div className="py-4 border-b-2 px-3">
               <h1 className='text-2xl text-black font-pop'>Salary received ({new Date().getFullYear()})</h1>
               </div>
  <div className='p-4'>
  {
    dashboardData.salaries && <DashboardChart salaries={dashboardData.salaries}></DashboardChart>
  }
  </div>
            </div>
            <div className='bg-white rounded-md shadow-lg  '>
               <div className="py-4 border-b-2 px-3">
               <h1 className='text-2xl text-black font-pop'>Your recent worksheet</h1>
               </div>
  <div className='p-4'>
    <div className='flex justify-between items-center'></div>
  {
    dashboardData.worksheets?.reverse().slice(0,5)?.map((worksheet,index)=>{
        return <div className='grid grid-cols-3'>
             <h1>{worksheet.task}</h1>   <h1>{worksheet.working_hours}</h1>   <h1>{worksheet.date}</h1> 
        </div>
    })
  }
  </div>
            </div>
        </div>
        </div>
    );
}

export default EmployeeDashboard;
