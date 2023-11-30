import React from 'react';
import { RiHome8Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import { FcManager } from "react-icons/fc";
import { NavLink, useLocation } from 'react-router-dom';
const Admin = () => {
  const {pathname} = useLocation()
    return (
        <div className='flex flex-col space-y-5'>
        <NavLink
       to="/dashboard"
       className=  {`${pathname === '/dashboard' ? 'text-blue-600': ''} py-2 w-full`}><div className="flex items-center gap-2 "><div className='px-2 py-1 bg-[#a2d2ff] rounded'><RiHome8Line></RiHome8Line></div><p>Dashboard</p></div>
     </NavLink>
     <NavLink
       to="/dashboard/all-employee-list"
       className= {`${pathname === '/dashboard/all-employee-list' ? 'text-blue-600': ''}  w-full`}><div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><PiUsersThreeFill></PiUsersThreeFill></div><p>All Employees</p></div>
     </NavLink>
      <h2 className='text-red-500'>Hr routes</h2>
      <NavLink
        to="/dashboard/employee-list"
        className= {`${pathname == '/dashboard/employee-list' ? 'text-blue-600': ''} py-2 w-full`}
      >
        <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><PiUsersThreeFill></PiUsersThreeFill> </div><p>Employees</p></div>
      </NavLink>
      <NavLink
        to="/dashboard/progress"
        className= {`${pathname == '/dashboard/progress' ? 'text-blue-600': ''} py-2 w-full`}
      > <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GiProgression></GiProgression></div><p>Progress</p></div>
      </NavLink> 
       
     
       </div>
    );
}

export default Admin;
