import React from 'react';
import AxiosSecure from '../Axios/AxiosSecure';
import UseAuth from '../UserAuth/UseAuth';
import { useQuery } from '@tanstack/react-query';

const QueryPaymentHistory = () => {
    const useAxiosSecure = AxiosSecure();
    const {user} = UseAuth();
    const {data:history,isLoading:isHistoryLoading,refetch:historyRefetch} = useQuery({
        queryKey:['payment-history'],
        queryFn: async ()=>{
            const res = await useAxiosSecure.get(`/api/v1/employee/payment/history/${user.email}`)
            return res.data
        }

    })
    console.log(history)
    return {history,isHistoryLoading,historyRefetch}
}

export default QueryPaymentHistory;
