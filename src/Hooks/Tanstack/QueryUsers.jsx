import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosSecure from '../Axios/AxiosSecure';
import UseAuth from '../UserAuth/UseAuth';

const QueryUsers = () => {
    const {user} = UseAuth();
    const useAxiosSecure = AxiosSecure();
   const {data:users = [],isLoading:isUsersLoading,refetch} = useQuery({
    queryKey:['users'],
    queryFn:async ()=>{
        const res = await useAxiosSecure.get('/api/v1/users');
        const filter = res.data.filter(item => item.email !== user.email);
         return filter;
        }
   })
   return {users,isUsersLoading,refetch}
}

export default QueryUsers;
