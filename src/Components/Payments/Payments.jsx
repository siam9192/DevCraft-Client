import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const Payments = ({paymentDetails}) => {
  
    const stripePromise = loadStripe('pk_test_51OEFoaF0un34BsUzlCeA1Qjv16j4AbeWpd3AUsVgVxb4JD1DbZ57GjcCYn8sNbeoiHX8svh7iTzqMTc2mmymbdXr00cb9TNfxr');
    return (
        <div>
            <Elements stripe={stripePromise}>
             
                <PaymentForm paymentDetails = {paymentDetails}></PaymentForm>
            </Elements>
        </div>
    );
}

export default Payments;
