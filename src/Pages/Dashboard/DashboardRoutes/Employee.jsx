import React from 'react';
import { RiHome8Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import { NavLink, useLocation } from 'react-router-dom';
const Employee = () => {
  const {pathname} = useLocation();
  
    return (
         <>
                 <div className='flex flex-col space-y-5'>
        <NavLink
        to="/dashboard"
        className= {`${pathname == '/dashboard' ? 'text-blue-600': ''} py-2 w-full`}><div className="flex items-center gap-2 "><div className='px-2 py-1 bg-[#a2d2ff] rounded'><RiHome8Line></RiHome8Line></div><p>Dashboard</p></div>
      </NavLink>
      <NavLink
        to="/dashboard/payment-history"
        className= {`${pathname == '/dashboard/payment-history' ? 'text-blue-600': ''} py-2 w-full`}
      >
        <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GrHistory></GrHistory></div><p>Payment history</p></div>
      </NavLink>
      <NavLink
        to="/dashboard/work-sheet"
        className= {`${pathname == '/dashboard/work-sheet' ? 'text-blue-600': ''} py-2 w-full`}
      >
        <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GrWorkshop></GrWorkshop></div><p>Work sheets</p></div>
      </NavLink>
      </div>
        </>
    );
}

export default Employee;
