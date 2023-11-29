import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';



const CheckoutForm = ({id}) => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log("registered camp id: ", id);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
            console.log('Payment completed')
            const res = await axiosSecure.patch(`payment-camp/${id}`);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Payment Completed`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn my-4 text-white bg-red-700" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-700">{ error }</p>
        </form>
    );
};

export default CheckoutForm;