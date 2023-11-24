import { NavLink } from 'react-router-dom';
import Container from '../Reuse/Container/Container';
import { HiOutlineLogin } from "react-icons/hi";
import UseAuth from '../../Hooks/UserAuth/UseAuth';

const Navbar = () => {
  const {user} = UseAuth();
    return (
        <div className='w-full bg-white py-5'>
            <Container>
            <div className='flex justify-between items-center'>
        <div>
        <h1 className='text-blue-600 text-4xl font-oswlad font-semibold'>Innovexa Software</h1>
         <p className='text-gray-800 textxl -mt-2 font-inter font-bold'>Employee Management</p>
        </div>
        <nav className='flex justify-between items-center gap-5 text-xl text-black '>
        <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
<NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
 >
Dashboard
</NavLink>
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
    About us
</NavLink>
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Contact
</NavLink>
<NavLink
  to="/signup"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  <button className='px-6 py-2 rounded-md bg-[#adebeb] flex items-center text-xl text-black'><p>Sign in</p> <HiOutlineLogin></HiOutlineLogin></button> 
</NavLink>
<div className="dropdown dropdown-end">
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
        <li><a>Dashboard</a></li>
        <li className='text-red-500'><a>Logout</a></li>
      </ul>
    </div>
        </nav>
            </div>
            </Container>
        </div>
    )
}

export default Navbar;
