import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiHome8Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
const DashboardRoutes = () => {
    const admin = <>
   <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" }><div className="flex items-center gap-2 "><div className='px-2 py-1 bg-[#a2d2ff] rounded'><RiHome8Line></RiHome8Line></div><p>Dashboard</p></div>
</NavLink>
<NavLink
  to="/dashboard/all-employee-list"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" }><div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><MdPayment></MdPayment></div><p>All Employees</p></div>
</NavLink>
  </>
// hr routes
  const hr = <>
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

  // employee routes
  const employee = <>
  <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" }><div className="flex items-center gap-2 "><div className='px-2 py-1 bg-[#a2d2ff] rounded'><RiHome8Line></RiHome8Line></div><p>Dashboard</p></div>
</NavLink>
<NavLink
  to="/dashboard/payment-history"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GrHistory></GrHistory></div><p>Payment history</p></div>
</NavLink>
<NavLink
  to="/dashboard/work-sheet"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black p-3" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GrWorkshop></GrWorkshop></div><p>Work sheets</p></div>
</NavLink>
  </>
 return {admin,hr,employee}
}

export default DashboardRoutes;
