import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { RiHome8Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import Navbar from '../../Components/Navbar/Navbar';
import DashboardRoutes from './DashboardRoutes';
import { CiMenuFries } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import Hr from './DashboardRoutes/Hr';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import Employee from './DashboardRoutes/Employee';
import Admin from './DashboardRoutes/Admin';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import SideNavbar from './SideNavbar';
import { SiJirasoftware } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
// admin routes

const Dashboard = () => {
  const {checkUser,isUserChecking} = CheckUser();
  const {user,logout} = UseAuth();
  const [toggle,setToggle] =useState(false)
  const {pathName} = useLocation();
  const handleToggle = ()=>{
    setToggle(false)
  }
    return (
        <>
        <div className='w-full bg-blue-600 py-5 px-3 flex justify-between items-center '>
            <div className='lg:hidden block text-4xl text-white font-semibold' onClick={()=> setToggle(true)}><IoMenu></IoMenu></div>
        <div className='lg:block hidden lg:flex items-center gap-1'>
        <div className='text-5xl text-red-500'>
          <SiJirasoftware></SiJirasoftware>
        </div>
        <div>
        <h1 className='text-white text-4xl font-oswlad font-semibold '>DevCraft Solutions</h1>
         <p className='text-gray-800 text-xl -mt-2 font-inter font-bold'>Employee Management</p>
        </div>
        </div>
        <div className="dropdown dropdown-end lg:block hidden">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user?.photoURL}/>
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a className="justify-between">
        {user?.displayName} 
      </a>
    </li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
   <li> <Link to='/'>Home</Link></li>
    <li className='text-red-500' onClick={()=> logout()}><a>Logout</a></li>
  </ul>
</div>
<div className='lg:hidden block'>
    <div className=''>
  <h1 className='text-2xl text-white '>Dashboard</h1>
    </div>

</div>
        </div>
        <div className='flex gap- font-pop relative'>
            
            <div className='lg:block hidden w-[20%]  min-h-[calc(100vh-100px)] shadow-md text-xl space-y-6 py-5 text-black px-5 sticky top-0'>
         {
            checkUser === 'employee' &&   <Employee></Employee>
         }
         {
            checkUser === 'hr' && <Hr></Hr>
         }
         {
            checkUser === 'admin' && <Admin></Admin>
         }
         
         
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" 
      
        }
      >
        <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><AiFillHome></AiFillHome> </div><p>Go Home</p></div>
      </NavLink>
            </div>
            <div className='py-5 lg:w-[80%] w-[100%] bg-black px-3'>
                <Outlet></Outlet>
            </div>
            <SideNavbar toggle={toggle} setToggle={handleToggle}></SideNavbar>
        </div>
        </>
    );
}

export default Dashboard;
