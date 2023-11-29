import React from 'react';
import Heading from '../../../Shared/Heading';
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';


const FeedbackForm = () => {
    const camp = useLoaderData();
    
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const res = await axiosSecure.post('/reviews', data);
        
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Thanks for your Review`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <Heading
            heading={"Give Rating & Reviews"}
            ></Heading>
            <Helmet>
                <title>MediCamp | Reviews</title>
            </Helmet>

            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <div className="flex gap-6">
                        {/* Participant name  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                {...register('name')}
                                type="text" placeholder="Type your name" className="input input-bordered w-full " />

                        </div>

                        {/* Camp Name  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Camp Name</span>

                            </label>
                            <input
                                {...register('camp_name')}
                                defaultValue={camp.camp_name}
                                type="text" placeholder="Type your camp name"  className="input input-bordered w-full " />

                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Date</span>

                            </label>
                            <input
                                {...register('date')}
                                type="text" placeholder="" defaultValue={camp.schedule} className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* Image link  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Image Link</span>

                            </label>
                            <input
                                {...register('image')}
                                type="text" placeholder="Type your name"  className="input input-bordered w-full " />

                        </div>

                        {/* rating  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rating</span>

                            </label>
                            <input
                                {...register('rating')}
                                type="number" placeholder="Give rating between 1 to 5"  className="input input-bordered w-full " />

                        </div>
                        
                    </div>
                    <div className="form-control w-full my-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Reviews</span>

                            </label>
                            <input
                                {...register('feedback')}
                                type="text" placeholder="Give us your feedback" className="input input-bordered w-full " />

                        </div>

                        

                    </div>






                    <button className="btn text-white bg-red-700">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;