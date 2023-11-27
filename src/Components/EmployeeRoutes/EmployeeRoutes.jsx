import React from 'react';
import CheckUser from '../../Hooks/CheckUser/CheckUser';
import { Navigate } from 'react-router-dom';

const EmployeeRoutes = ({children}) => {
    const {checkUser,isUserChecking} = CheckUser();
    if(isUserChecking){
    return <div className='flex justify-center items-center  min-h-[100vh] w-full'><span class="loading loading-infinity loading-lg text-blue-600 text-center text-9xl"></span></div>
           
    }
    if(checkUser === 'employee'){
        return children
    }
    else{
        return <Navigate to='/'></Navigate>
    }
}

export default EmployeeRoutes;
