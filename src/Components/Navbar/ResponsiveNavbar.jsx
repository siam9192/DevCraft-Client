import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UserAuth/UseAuth';

const ResponsiveNavbar = ({toggle}) => {
    const {user,logout} = UseAuth();
    return (
        <div className={`fixed top-[0px] w-[300px] py-3 ${toggle ? 'left-0' : '-left-[200%]'}  bg-white  h-full`}>
             {
                user&&  <div className='flex justify-center items-center flex-col'>
                <img src={user.photoURL} alt="" className='w-20 h-20 rounded-full' />
                <h1 className='text-black'>{user.displayName}</h1>
            </div>
               }
            <nav className='text-xl text-black flex  flex-col text-center space-y-4'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/dashboard'>Dashboard</NavLink>
           <NavLink to='/contact'>Contact us</NavLink>
           {
            !user && <NavLink to='/login'>Sign in</NavLink>
           }
         {
            user &&  <div className="text-center">
                 <button className='w-1/2 py-2 bg-red-500 text-white' onClick={logout}>Logout</button>
            </div>
         }
             </nav>
        </div>
    );
}

export default ResponsiveNavbar;
