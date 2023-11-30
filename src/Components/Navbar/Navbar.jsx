import { NavLink } from 'react-router-dom';
import Container from '../Reuse/Container/Container';
import { HiOutlineLogin } from "react-icons/hi";
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveNavbar from './ResponsiveNavbar';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { SiJirasoftware } from "react-icons/si";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const {user,logout} = UseAuth();
    return (
        <div className='w-full bg-primary py-5'>
            <Container>
            <div className='flex justify-between items-center'>
        <div className='flex items-center'>
        <div className='text-5xl text-red-500'>
          <SiJirasoftware></SiJirasoftware>
        </div>
     <div>
     <h1 className='text-white text-4xl font-oswlad font-semibold'>DevCraft Solutions</h1>
         {/* <p className='text-black  -mt-2 font-inter font-bold'>Employee Management</p> */}
     </div>
        </div>
        <nav className='lg:flex justify-between items-center gap-5 text-xl text-white lg:block hidden '>
        <NavLink
  to="/"
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
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Contact
</NavLink>
{
  !user && <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  <button className='px-6 py-2 rounded-md bg-white flex items-center text-xl text-black'><p>Sign in</p> <HiOutlineLogin></HiOutlineLogin></button> 
</NavLink>
}
{
  user && <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user?.photoURL}/>
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a className="justify-between text-black">
        {user?.displayName} 
      </a>
    </li>
    <li ><Link to='/dashboard' className='text-black'>Dashboard</Link></li>
    <li className='text-red-500' onClick={()=> logout()}><a>Logout</a></li>
  </ul>
</div>
}
        </nav>
        <div className='lg:hidden' onClick={()=> setToggle(!toggle)}>
        
        {
          toggle ?   <RxCross1 className='text-3xl text-white'></RxCross1>:  <GiHamburgerMenu className='text-3xl text-white'></GiHamburgerMenu>
        }
        </div>
            </div>
            </Container>
            <ResponsiveNavbar toggle={toggle}></ResponsiveNavbar>
        </div>
    )
}

export default Navbar;
