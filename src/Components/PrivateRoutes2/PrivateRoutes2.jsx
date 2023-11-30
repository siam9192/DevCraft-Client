import React from 'react';

import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
   
const PrivateRoutes2 = ({children}) => {
    const {user,loading} = UseAuth();
  const {pathname,state}= useLocation();

if(user && state){
    return <Navigate to={state} replace></Navigate>
}
if(!user){
    return children;
    
}
else{
    
    return <Navigate to='/' state={pathname} replace></Navigate>
}

}
    


export default PrivateRoutes2;
