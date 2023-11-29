import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import Heading from '../../../Shared/Heading';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Feedback = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: paidCamps = [], refetch } = useQuery({
        queryKey: ['paidCamps'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/paidCamp/${user?.email}`);
            return res.data;
        }
    })

    


    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen">
            <Heading
                heading={"Participant feedback and ratings"}
            ></Heading>
            <Helmet>
                <title>MediCamp | Ratings</title>
            </Helmet>

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
                            paidCamps?.map((camp, index) =>
                                <tr key={camp._id}>
                                    <th>{index + 1}</th>
                                    <td>{camp.camp_name}</td>
                                    <td>{camp.schedule}</td>
                                    <td>{camp.venue}</td>
                                    <td>{camp.fee}</td>
                                    {
                                        camp.payment ?
                                            <td><button className='btn  bg-green-700' disabled>Paid</button></td>

                                            :
                                            <Link to={`/dashboard/stripe-payment/${camp._id}`}><td><button className='btn text-white bg-green-700'>Pay</button></td></Link>

                                    }
                                    {
                                        camp.confirm ?
                                            <td>Confirmed</td>
                                            :
                                            <td>Pending</td>
                                    }
                                    
                                    
                                    <Link to={`/dashboard/review-camp/${camp._id}`}>
                                        <td><button className='btn text-white bg-red-700'>Review</button></td>
                                    </Link>
                                    
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feedback;