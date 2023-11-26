import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import QueryUsersAdmin from '../../Hooks/Tanstack/QueryUsersAdmin';
import UseAuth from '../../Hooks/UserAuth/UseAuth';

const AllEmployees = () => {
    const {users} = QueryUsersAdmin();
    const [admin,setAdmin] = useState([]);
    const [employees,setEmployees] = useState([])
    const {user} = UseAuth();
    useEffect(()=>{
 if(user){
    const filter = users.filter(item => user?.email === item.email && item.role === 'admin');
    const filter_2 = users.filter(item => item.email !== user.email);
    setAdmin(filter)
    setEmployees(filter_2)
 }
    },[users,user])
    console.log(admin)
    return (
        <div className='py-5 space-y-5'>
        <div className='w-full  py-6 px-3 flex justify-between items-center shadow-md rounded-md'>
       <div className='flex items-center gap-2'><MdDashboard className='text-3xl text-blue-600'></MdDashboard> <h3 className='text-xl '>Dashboard/Employees</h3></div>
       <h3 className='text-2xl font-semibold'>Employees</h3>
        </div>
        <div className='w-full  py-6 px-3 shadow-md rounded-md'>
            <h1 className='text-2xl text-black font- font-semibold '>9 People found</h1>
        </div>
      <div>
      <div className='grid grid-cols-5 font-semibold'>
            <div><h1 className="text-xl text-black">Name</h1></div>
            <div><h1 className="text-xl text-black">Designation</h1></div>
            <div><h1 className="text-xl text-black">Make HR</h1></div>
            <div><h1 className="text-xl text-black">Action</h1></div>
            <div><h1 className="text-xl text-black">Role</h1></div>
            {/* <div><button className='w-full border-2 border-amber-500 py-2'>Make HR</button></div>
            <div><button className='w-full border-2 border-amber-500 py-2'>Fired</button></div> */}\
             
        </div>
        <div className="flex flex-col ">
        <div className='grid grid-cols-5 border-t-2 py-4 bg-slate-200 px-2' >
                <div><h1 className="text-xl text-black">{admin[0]?.name}</h1></div>
                <div><h1 className="text-xl text-black">Soft eng</h1></div>
                <div><button className='w-1/2 border-2 border-yellow-400 py-2' disabled = {true}>Make HR</button></div>
                <div><button className='w-1/2 border-2 border-yellow-400 py-2' disabled = {true}>Fire</button></div>
                <div><h1 className="text-xl text-black">{admin[0]?.role}</h1></div>
                </div>
        {
          employees?.map((item,index)=>{
                return    <div className='grid grid-cols-5 border-t-2 py-4 px-2' key={index}>
                <div><h1 className="text-xl text-black">{item.name}</h1></div>
                <div><h1 className="text-xl text-black">Soft eng</h1></div>
                <div><button className='w-1/2 bg-primary text-white py-2'>Make HR</button></div>
                <div><button className='w-1/2 bg-red-500 text-white py-2'>Fire</button></div>
                <div><h1 className="text-xl text-black">{item.role}</h1></div>
                {/* <div><button className='w-full border-2 border-amber-500 py-2'>Make HR</button></div>
                <div><button className='w-full border-2 border-amber-500 py-2'>Fired</button></div> */}
                 
            </div>
            })
         }
        </div>
      </div>
        </div>
    );
}

export default AllEmployees;
