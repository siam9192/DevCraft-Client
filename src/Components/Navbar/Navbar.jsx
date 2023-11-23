import { NavLink } from 'react-router-dom';
import Container from '../Reuse/Container/Container';
import { HiOutlineLogin } from "react-icons/hi";

const Navbar = () => {
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
  to="/messages"
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
        </nav>
            </div>
            </Container>
        </div>
    )
}

export default Navbar;
