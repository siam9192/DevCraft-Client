import { CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';

const PaymentForm = ({amount}) => {
const [clientSecret,setClientSecret]  = useState('');
const useAxiosSecure = AxiosSecure();

useEffect(()=>{
    useAxiosSecure.post('/api/v1/')
},[])

    return (
        <div>
            <h3 className='py-1 text-black'>Card details:</h3>
             <CardElement  options={{
          style: {
            base: {
              fontSize: '16px',
              color: 'black',
              padding: '8px 0px',
              '::placeholder': {
                color: '#aab7c4',
                
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}></CardElement>
        </div>
    );
}

export default PaymentForm;
