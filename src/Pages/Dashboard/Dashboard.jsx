import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiHome8Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";

import Navbar from '../../Components/Navbar/Navbar';
const Dashboard = () => {
    return (
        <div className='min-h-[100vh] flex gap- font-pop '>
            
            <div className='w-[20%] flex flex-col gap-5  min-h-[100vh] shadow-md text-xl space-y-6 py-5 text-black px-5 sticky top-0'>
            <NavLink
  to="/dashboard/main"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

    }
>
  <div className="flex items-center gap-2 "><div className='px-2 py-1 bg-[#a2d2ff] rounded'><RiHome8Line></RiHome8Line></div><p>Dashboard</p></div>
</NavLink>
<NavLink
  to="/dashboard/employee-list"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

    }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><PiUsersThreeFill></PiUsersThreeFill> </div><p>Employees</p></div>
</NavLink>
<NavLink
  to="/dashboard/all-employee-list"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><MdPayment></MdPayment></div><p>All employees</p></div>
</NavLink>
<NavLink
  to="/dashboard/progress"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GiProgression></GiProgression></div><p>Progress</p></div>
</NavLink>
<NavLink
  to="/dashboard/payment-history"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><GrHistory></GrHistory></div><p>Payment history</p></div>
</NavLink>
<NavLink
  to="/dashboard/progress"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><MdPayment></MdPayment></div><p>All payments</p></div>
</NavLink>
<NavLink
  to="/dashboard/work-sheet"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "bg-gray-100 p-3" : "text-black" 

  }
>
  <div className="flex items-center gap-2"><div className='px-2 py-1 bg-[#a2d2ff] rounded'><MdPayment></MdPayment></div><p>Work sheet</p></div>
</NavLink>

            </div>
            <div className='py-5 w-[80%] bg-gray-100 px-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Dashboard;
