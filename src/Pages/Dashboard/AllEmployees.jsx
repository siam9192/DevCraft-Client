import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import QueryUsersAdmin from '../../Hooks/Tanstack/QueryUsersAdmin';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import Dashboardbar from '../../Components/Dashboardbar';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { FaAddressCard, FaTable } from 'react-icons/fa';
import EmployeesCards from './EmployeesCards';
const AllEmployees = () => {
    // const [admin,setAdmin] = useState([]);
    const [employees,setEmployees] = useState([])
    const {user} = UseAuth();
    const useAxiosSecure = AxiosSecure();
    const {isUserChecking} = CheckUser();
    const [view,setView] = useState('table')
    const [pages,setPages] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const {users,refetch} = QueryUsersAdmin(currentPage);
   

    useEffect(()=>{
          console.log(currentPage)
      refetch()
      setEmployees(users.result)
      let array = [];
      for(let i = 0; i < Math.ceil(users?.employeesCount/5);i++){
       array.push(i+1)
      }
      setPages([...array])
      },[currentPage,users])
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
    
       
    // change role
const changeRole = (id,role)=>{
  useAxiosSecure.patch('/api/v1/admin/change-role',{id,role})
  .then(res => {
    if(res.data.modifiedCount > 0){
    refetch();
    }
  })
  }
  const handleCurrentPage = (number)=>{
    setCurrentPage(number)
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
        <div className='py-5 space-y-3 min-h-[calc(100vh-100px)]'>
              <Helmet>
            <title>DevCraft||Dashboard||ALL-EMPLOYEES</title>
          </Helmet>
          <Dashboardbar pathName={'All Employee'} barText={'Employees'}></Dashboardbar>
        <div className='w-full  py-4 px-3 shadow-md rounded-md bg-white '>
            <h1 className='text-2xl text-black font- font-semibold '>{users?.employeesCount} Employees found</h1>
        </div>
        <div className='flex justify-end'>
          <div className='flex items-center gap-3 text-3xl '>
            <div className={`${view === 'table' ? 'text-pink-600' : 'text-white'}`}  onClick={()=>setView('table')}><FaTable></FaTable></div>
            <div className={`${view === 'card' ? 'text-pink-600' : 'text-white'}`} onClick={()=> setView('card')}><FaAddressCard></FaAddressCard></div>
          </div>
         </div>
     { view === 'table'? <div className='bg-white  overflow-x-auto min-h-[300px]   overflow-scroll-y p-5 rounded-md'>
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

      </div>:<EmployeesCards users={users.result} changeRole = {changeRole} ></EmployeesCards>
}
      <div className='flex justify-center items-center gap-2 text-xl text-white'>
<button onClick={prev}>Prev</button>
{
pages?.map((page,index)=>{
return <button key={index} className={`${currentPage === page ? 'text-red-500' : ''}`} onClick={()=> setCurrentPage(page)}>{page}</button>
})
}
<button onClick={next} >Next</button>
</div>
        </div>
    );
}

export default AllEmployees;
