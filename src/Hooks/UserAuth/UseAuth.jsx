import React, { useContext } from 'react';
import { fireBaseContext } from '../../Provider/AuthProvider';

const UseAuth = () => {
   const {user,createUser,login,logout,loading} = useContext(fireBaseContext);

   return {user,createUser,login,logout,loading};
}

export default UseAuth;
