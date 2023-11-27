import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosSecure from '../Axios/AxiosSecure';
import UseAuth from '../UserAuth/UseAuth';

const QueryUsers = (currentPage) => {
    const {user} = UseAuth();
    const useAxiosSecure = AxiosSecure();
   const {data = [],isLoading:isUsersLoading,refetch} = useQuery({
    queryKey:['users'],
    queryFn:async ()=>{
        const res = await useAxiosSecure.get(`/api/v1/hr/users?currentPage=${currentPage}`);
           return res.data
        }
   })
   return {data,isUsersLoading,refetch}
}

export default QueryUsers;
