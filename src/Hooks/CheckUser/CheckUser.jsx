import React from 'react';
import UseAuth from '../UserAuth/UseAuth';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../Axios/AxiosSecure';

const CheckUser = () => {
  const {user} = UseAuth();
  const useAxiosSecure = AxiosSecure();
  const {data:checkUser,isLoading:isUserChecking} = useQuery({
     queryKey:['check-user'],
     queryFn:async ()=>{
        const res = await useAxiosSecure.get(`/api/v1/checkUser/${user?.email}`)
        return res.data.role;
     }
  })
 return {checkUser,isUserChecking};
}

export default CheckUser;
