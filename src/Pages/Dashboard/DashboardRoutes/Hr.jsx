import React from 'react';
import { RiHome8Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
const Hr = () => {
    return (
     <>
        <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" }><div className="flex items-center gap-2 "><div className='px-2 py-1 bg-[#a2d2ff] rounded'><RiHome8Line></RiHome8Line></div><p>Dashboard</p></div>
      </NavLink>
      <NavLink
        to="/dashboard/employee-list"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" 
      
        }
      >
        <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><PiUsersThreeFill></PiUsersThreeFill> </div><p>Employees</p></div>
      </NavLink>
      <NavLink
        to="/dashboard/progress"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" 
      
        }
      > <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GiProgression></GiProgression></div><p>Progress</p></div>
      </NavLink>
      
        </>
    );
}

export default Hr;
