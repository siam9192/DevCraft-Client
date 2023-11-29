import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import QueryUsersAdmin from '../../Hooks/Tanstack/QueryUsersAdmin';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import Dashboardbar from '../../Components/Dashboardbar';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const AllEmployees = () => {
    const {users,refetch} = QueryUsersAdmin();
    const [admin,setAdmin] = useState([]);
    const [employees,setEmployees] = useState([])
    const {user} = UseAuth();
    const useAxiosSecure = AxiosSecure();
    const {isUserChecking} = CheckUser();
    useEffect(()=>{
 if(user ){
    const filter = users.filter(item => user?.email === item.email && item.role === 'admin');
    const filter_2 = users.filter(item => item.email !== user.email);
    setAdmin(filter)
    setEmployees(filter_2)
 }
    },[users,user])
    // change role
const changeRole = (id,role)=>{
  useAxiosSecure.patch('/api/v1/admin/change-role',{id,role})
  .then(res => {
    if(res.data.modifiedCount > 0){
    refetch();
    }
  })
  }
  const fireEmployee = (email,isFired)=>{
if(isFired){
  return
}
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        useAxiosSecure.patch(`/api/v1/fire-employee/${email}`)
        .then(res => {
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              title: "Fired!",
              text: "The employee has been fired.",
              icon: "success"
            });
            
            }
        })
       
      }
    });
   
  }
    if(isUserChecking){
      return <div className='flex justify-center items-center  lg:h-[calc(100vh-100px)] w-full'><span class="loading loading-infinity loading-lg text-blue-600 text-center text-9xl"></span></div>
     }
    return (
        <div className='py-5 space-y-3 '>
              <Helmet>
            <title>DevCraft||Dashboard||ALL-EMPLOYEES</title>
          </Helmet>
          <Dashboardbar pathName={'All Employee'} barText={'Employees'}></Dashboardbar>
        <div className='w-full  py-4 px-3 shadow-md rounded-md bg-white '>
            <h1 className='text-2xl text-black font- font-semibold '>{employees.length} Employees found</h1>
        </div>
      <div className='bg-white  overflow-x-auto max-h-[400px]   overflow-scroll-y p-5 rounded-md'>
      <div className='grid grid-cols-5 font-semibold'>
            <div><h1 className="l text-black">Name</h1></div>
            <div><h1 className="l text-black">Designation</h1></div>
            <div><h1 className="l text-black">Make HR</h1></div>
            <div><h1 className="l text-black">Action</h1></div>
            <div><h1 className="l text-black">Role</h1></div>
          
        </div>
        <div className="flex flex-col ">
        
        {
          employees?.map((item,index)=>{
                return    <div className='grid grid-cols-5 border-t-2 py-2 px-2' key={index}>
                <div><h1 className="l text-black">{item.name}</h1></div>
                <div><h1 className="l text-black">{item.designation}</h1></div>
                <div>{item.role !== 'hr'? <button className='w-1/2 bg-primary text-white py-2' onClick={()=> changeRole(item._id ,'hr')}>Make HR</button> :<button className='w-1/2 bg-black text-white py-2' onClick={()=> changeRole(item._id,'employee')}>Make EMPLOYEE</button>}</div>
                <div>{!item.isFired ? <button className='w-1/2 bg-red-500 text-white py-2' onClick={()=> fireEmployee(item.email)}>Fire</button>:<button className='w-1/2 bg-red-500 text-white py-2' onClick={()=> fireEmployee(item.email)}>Fired</button> }</div>
                <div><h1 className="l text-black">{item.role}</h1></div>

            </div>
            })
         }
        </div>
      </div>
        </div>
    );
}

export default AllEmployees;
