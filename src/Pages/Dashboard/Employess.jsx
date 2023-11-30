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
import { BsFillGridFill } from "react-icons/bs"
import { FaAddressCard } from "react-icons/fa"
import { FaTable } from "react-icons/fa";
import TableView from '../../Components/View/TableView';
import CardView from '../../Components/View/cardView';
import { Helmet } from 'react-helmet';
const Employess = () => {
  const [pages,setPages] = useState ([]);
const [currentPage,setCurrentPage] = useState(1);
    const {data,isUsersLoading,refetch} = QueryUsers(currentPage);
 const useAxiosSecure = AxiosSecure();
const [paymentDetails,setPaymentDetails] = useState({});
const [view,setView] = useState('table')
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
const handleCurrentPage = (page)=>{
  setCurrentPage(page)
}
 if(isUsersLoading){
  return <div className='flex justify-center items-center  py-32 w-full'><span class="loading loading-infinity loading-lg text-blue-600 text-center text-9xl"></span></div>
 }
    return (
    
        <div className='py- space-y-5'>
              <Helmet>
            <title>DevCraft||DASHBOARD||EMPLOYEES</title>
          </Helmet>
          <Dashboardbar pathName={'Employees'} barText={'Employees'}></Dashboardbar>
         
         <div className='flex justify-end'>
          <div className='flex items-center gap-3 text-3xl '>
            <div className={`${view === 'table' ? 'text-pink-600' : 'text-white'}`}  onClick={()=>setView('table')}><FaTable></FaTable></div>
            <div className={`${view === 'card' ? 'text-pink-600' : 'text-white'}`} onClick={()=> setView('card')}><FaAddressCard></FaAddressCard></div>
          </div>
         </div>
         {
          view === 'table' ?  <TableView data = {data} openModal = {openModal} handelVerified = {handelVerified} currentPage = {currentPage} setCurrentPage = {handleCurrentPage} pages = {pages} prev = {prev} next = {next} closeModal = {closeModal}></TableView> : <CardView  data = {data} openModal = {openModal} handelVerified = {handelVerified} currentPage = {currentPage} setCurrentPage = {handleCurrentPage} pages = {pages} prev = {prev} next = {next} closeModal = {closeModal}></CardView>
         }




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
