import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosSecure from '../Axios/AxiosSecure';
import UseAuth from '../UserAuth/UseAuth';

const QueryUsersAdmin = (currentPage) => {

    const {user} = UseAuth();
    const useAxiosSecure = AxiosSecure();
   const {data:users = [],isLoading:isUsersLoading,refetch} = useQuery({
    queryKey:['users-admin'],
    queryFn:async ()=>{
        const res = await useAxiosSecure.get(`/api/v1/admin/users/${currentPage}`);
           return res.data;
        }
   })
   return {users,isUsersLoading,refetch}
}

export default QueryUsersAdmin;
