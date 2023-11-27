import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
const PrivateRoutes = ({children}) => {
    const {user,loading} = UseAuth();
    const {pathname,state}= useLocation();

    if(loading){
        return <div className='min-h-[80vh] flex justify-center items-center'>
<span class="loading loading-bars loading-lg text-[#FF1F3D] "></span>
        </div>
    }
if(user){
    return children;
}
else{
        return <Navigate to='/login' state={pathname} replace></Navigate>
    
}

}


export default PrivateRoutes;
