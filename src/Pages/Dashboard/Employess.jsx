import React, { useState } from 'react';
import QueryUsers from '../../Hooks/Tanstack/QueryUsers';
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { Axios } from 'axios';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';

const Employess = () => {
    const {users,isUsersLoading,refetch} = QueryUsers();
 const useAxiosSecure = AxiosSecure();

    const handelVerified = (id,verified) =>{
    useAxiosSecure.patch(`/api/v1/update/user/${id}`,{
      isVerified : !verified
    })
    .then(res =>{
      if(res.data.modifiedCount > 0){
        refetch()
      }
    })
    
    }

 if(isUsersLoading){
  return <div className='flex justify-center  min-h-[100vh] w-full'><span class="loading loading-infinity loading-lg text-blue-600 text-center text-8xl"></span></div>
 }
    return (
    
        <div className='py-5 space-y-5'>
          <div className='w-full  py-6 px-3 flex justify-between items-center shadow-md rounded-md'>
         <div className='flex items-center gap-2'><MdDashboard className='text-3xl text-blue-600'></MdDashboard> <h3 className='text-xl '>Home/Employees</h3></div>
         <h3 className='text-2xl font-semibold'>Employees</h3>
          </div>
          <div className='w-full  py-6 px-3 shadow-md rounded-md'>
              <h1 className='text-2xl text-black font- font-semibold '>{users.length} People found</h1>
          </div>
            <div className="overflow-x-auto shadow-lg">
  <table className="table">
    {/* head */}
    <thead className='text-black'>
      <tr>
        <th>User</th>
        <th>Name</th>
        <th>Email</th>
        <th>Verified</th>
        <th>Bank ac</th>
        <th>Salary</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((user,index)=>{
          return  <tr key={index}>
            <td>
          <div className="flex items-center gap-3">
            <div className="">
              <div className=" ">
                <img src={user.image} alt=" " className='w-10 h-10 rounded-full'/>
              </div>
            </div>
           
          </div>
        </td>
        <td>
            
            <h1 className='text-l'>{user.name}</h1>
               <br/>
          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
        </td>
        <td>{user.email}</td>
        <td> <button  onClick={()=> handelVerified(user._id,user.isVerified)}>{user.isVerified ? <GiCheckMark className='text-green-600 text-xl'></GiCheckMark> :<RxCross2 className='text-red-600 text-xl '></RxCross2>}</button></td>
        <td>{user.bankAccount}</td>
        <td>BDT {user.salary} </td>
        <td><button className='w-full bg-green-600 text-white py-2'onClick={()=>document.getElementById('my_modal_1').showModal()}>pay</button></td>
        <td>
          <button className="btn btn-ghost btn-xs bg-blue-800 text-white">details</button>
        </td>
      </tr>
        })
      }
      
    </tbody>
    {/* foot */}
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
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" >open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
}

export default Employess;
