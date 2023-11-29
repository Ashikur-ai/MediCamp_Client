import React from 'react';
import Heading from '../../../Shared/Heading';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from "react-router-dom";




const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const StripePayment = () => {
    const data = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>MediCamp | Stripe Payment</title>
            </Helmet>
            <Heading
            heading={"Stripe payment"}
            ></Heading>

            <div className='w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    id={data._id}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default StripePayment;