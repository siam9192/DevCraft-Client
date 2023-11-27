import React, { useEffect, useState } from 'react';
import QueryUsers from '../../Hooks/Tanstack/QueryUsers';
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { Axios } from 'axios';
import {Link} from 'react-router-dom'
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import Payments from '../../Components/Payments/Payments';
import Dashboardbar from '../../Components/Dashboardbar';

const Employess = () => {
  const [pages,setPages] = useState ([]);
const [currentPage,setCurrentPage] = useState(1);
    const {data,isUsersLoading,refetch} = QueryUsers(currentPage);
 const useAxiosSecure = AxiosSecure();
const [paymentDetails,setPaymentDetails] = useState({});
useEffect(()=>{
  refetch()
  const total_users = data.totalUsers;
  let array = [];
  for(let i = 0; i < Math.ceil(total_users/5);i++){
   array.push(i+1)
  }
  setPages([...array])
},[data.users,currentPage])
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

const openModal = (user) =>{
  setPaymentDetails(user)
  document.getElementById('my_modal_1').showModal()
}
const closeModal = ()=>{
  document.getElementById('my_modal_1').close()
}

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
 if(isUsersLoading){
  return <div className='flex justify-center items-center  min-h-[100vh] w-full'><span class="loading loading-infinity loading-lg text-blue-600 text-center text-9xl"></span></div>
 }
    return (
    
        <div className='py-5 space-y-5'>
          <Dashboardbar pathName={'Employees'} barText={'Employees'}></Dashboardbar>
          <div className='w-full  py-6 px-3 shadow-md rounded-md bg-white'>
              <h1 className='text-2xl text-black font- font-semibold '>{data.totalUsers} Employees found</h1>
          </div>
            <div className="overflow-x-auto shadow-lg bg-white ">
              <div className='h-[500px]'>
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
        data.users?.map((user,index)=>{
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
        <td><button className='w-full bg-green-600 text-white py-2' onClick={()=> openModal(user)}>pay</button></td>
        <td>
        <Link to = {`/details/${user.email}`}><button className="btn btn-ghost btn-xs bg-blue-800 text-white" >details</button></Link>
        </td>
      </tr>
        })
      }
      
    </tbody>
    
  </table>
              </div>
  
   <div className='flex justify-center items-center'>
     <div className='flex items-center gap-2 text-black'>
     <button onClick={prev}>Prev</button>
     {
     pages.map((page,index)=>{
    return <button key={index} className={`${currentPage === page ? 'text-red-500' : ''}`} onClick={()=> setCurrentPage(page)}>{page}</button>
     })
     }
     <button onClick={next} >Next</button>
     </div>
     
    </div>
</div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_1" className="modal">
<div className="modal-box relative">
<div className='absolute top-2 right-2 text-black text-xl' onClick={closeModal}>
  <RxCross2></RxCross2>
</div>
<h1 className='text-2xl text-black text-center font-inter'>Payment Details</h1>

<Payments paymentDetails={paymentDetails}></Payments>
 <div className="modal-action">
   <form method="dialog" className="modal-backdrop">
     {/* if there is a button in form, it will close the modal */}
     {/* <button className="btn">Close</button> */}
   </form>
 </div>
</div>

   
<div class="modal-action">
      <form method="dialog">
        
        {/* <button class="btn">Close</button> */}
      </form>
    </div>
  {/* </div> */}

</dialog>
        </div>
    );
}

export default Employess;
