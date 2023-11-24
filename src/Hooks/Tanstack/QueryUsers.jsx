import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosSecure from '../Axios/AxiosSecure';

const QueryUsers = () => {
    const useAxiosSecure = AxiosSecure();
   const {data:users,isLoading:isUsersLoading,refetch} = useQuery({
    queryKey:['users'],
    queryFn:async ()=>{
        const res = await useAxiosSecure.get('/api/v1/users');
        return res.data
    }
   })
   return {users,isUsersLoading,refetch}
}

export default QueryUsers;
