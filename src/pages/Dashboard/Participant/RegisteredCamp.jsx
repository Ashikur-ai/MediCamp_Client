import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import Heading from '../../../Shared/Heading';

const RegisteredCamp = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
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
                <title>MediCamp | Registered Camp</title>
            </Helmet>
            <Heading
            heading={"Registered Campaigns"}
            >
            </Heading>

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            registeredCamps?.map((camp, index) =>
                                <tr key={camp._id}>
                                    <th>{ index+1 }</th>
                                    <td>{ camp.camp_name }</td>
                                    <td>{ camp.schedule }</td>
                                    <td>{camp.venue}</td>
                                    <td>{camp.fee}</td>
                                    <td><button className='btn text-white bg-green-700'>Pay</button></td>
                                    <td>Pending</td>
                                    <td><button className='btn text-white bg-red-700'>Cancel</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisteredCamp;