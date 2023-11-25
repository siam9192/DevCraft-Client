import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosSecure from '../Axios/AxiosSecure';
import UseAuth from '../UserAuth/UseAuth';

const QueryWorksheet = () => {
    const useAxiosSecure = AxiosSecure();
    const {user} = UseAuth();
    const {data:worksheets,isLoading:isWorksheetsLoading,refetch:worksheetsRefetch} = useQuery({
        queryKey:['work-sheet'],
        queryFn: async ()=>{
        const res = await useAxiosSecure.get(`/api/v1/worksheets/${user?.email}`)
        return res.data;
        }
    })
    return {worksheets,isWorksheetsLoading,worksheetsRefetch}
}

export default QueryWorksheet;
