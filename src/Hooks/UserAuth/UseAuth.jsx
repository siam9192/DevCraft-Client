import React, { useContext } from 'react';
import { fireBaseContext } from '../../Provider/AuthProvider';

const UseAuth = () => {
   const {user,createUser,logout,loading} = useContext(fireBaseContext);

   return {user,createUser,logout,loading};
}

export default UseAuth;
