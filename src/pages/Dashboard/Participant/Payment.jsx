import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../../Shared/Heading';

import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: registeredCamps = [], refetch } = useQuery({
        queryKey: ['registeredCamps'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/registeredCamp/${user?.email}`);
            return res.data;
        }
    })
    

    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen">
            <Helmet>
                <title>MediCamp | Payment</title>
            </Helmet>
            <Heading
            heading={"Payment History"}
            ></Heading>

            <div className="overflow-x-auto px-4">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Date and Time</th>
                            <th>Venue</th>
                            <th>Camp Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            registeredCamps?.map((camp, index) =>
                                <tr key={camp._id}>
                                    <th>{index + 1}</th>
                                    <td>{camp.camp_name}</td>
                                    <td>{camp.schedule}</td>
                                    <td>{camp.venue}</td>
                                    <td>{camp.fee}</td>
                                    {
                                        camp.payment ?
                                            <td><button className='btn  bg-green-700 text-white'>Paid</button></td>

                                            :
                                            <td><button className='btn  bg-red-700 text-white'>Unpaid</button></td>


                                    }
                                    {
                                        camp.confirm ?
                                            <td>Confirmed</td>
                                            :
                                            <td>Pending</td>
                                    }
                                   
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payment;