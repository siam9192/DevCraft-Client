import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Routes = () => {
    const {pathname} = useLocation();
    const checkPath = pathname.includes('signup') || pathname.includes('login');
    return (
        <div>
           {checkPath ||  <Navbar></Navbar>}
            <Outlet></Outlet>
         {checkPath ||  <Footer></Footer>}
        </div>
    );
}

export default Routes;
