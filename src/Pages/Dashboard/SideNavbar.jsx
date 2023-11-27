import React from 'react';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import Employee from './DashboardRoutes/Employee';
import Hr from './DashboardRoutes/Hr';
import Admin from './DashboardRoutes/Admin';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
const SideNavbar = ({toggle,setToggle}) => {
    const {user} = UseAuth();
    const {checkUser} = CheckUser();
    return (
        <div className={`fixed top-0   lg:duration-0 duration-300 lg:-left-[200%]  h-full w-[50%] ${toggle? 'left-0' : '-left-[200%]'} space-y-5 bg-white`}>
            <div className='w-full bg-blue-600 py-5 flex justify-center items-center'>
                <img src={user.photoURL} alt="" className='w-32 h-32 rounded-full' />
            </div>
            <div className='flex flex-col  space-y-3'>
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
            <div className='absolute top-2 text-black font-semibold text-2xl right-2' onClick={setToggle}>
                <RxCross1></RxCross1>
            </div>
        </div>
    );
}

export default SideNavbar;
