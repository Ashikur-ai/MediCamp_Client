import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from '../../../Shared/Heading';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';


const AddUpcomingCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const camp = {
            email: user?.email,
            audience: data?.audience,
            camp_name: data?.camp_name,
            description: data?.description,
            fee: data?.fee,
            image: data?.image,
            professional: data?.professional,
            schedule: data?.schedule,
            service: data?.service,
            venue: data?.venue
        }

        const res = await axiosSecure.post('/upcomingCamp', camp);
        if (res.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Camp added successfully`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }

    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen ">
            <Helmet>
                <title>MediCamp | Upcoming camp</title>
            </Helmet>
            <Heading
            heading={"Add Upcoming Campaigns"}
            ></Heading>

            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <div className="flex gap-6">
                        {/* camp name  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Camp Name</span>

                            </label>
                            <input
                                {...register('camp_name')}
                                type="text" placeholder="Enter camp name" className="input input-bordered w-full " />

                        </div>

                        {/* image  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Image</span>

                            </label>
                            <input
                                {...register('image')}
                                type="text" placeholder="Paste image url" className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* camp fee  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Camp Fee</span>

                            </label>
                            <input
                                {...register('fee')}
                                type="text" placeholder="Enter camp fee" className="input input-bordered w-full " />

                        </div>

                        {/* schedule  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Schedule</span>

                            </label>
                            <input
                                {...register('schedule')}
                                placeholder="Enter schedule" className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className='flex gap-6'>
                        {/* venue  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Venue</span>

                            </label>
                            <input
                                {...register('venue')}
                                type="text" placeholder="Enter venue" className="input input-bordered w-full " />

                        </div>

                        {/* service  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Specialized Service</span>

                            </label>
                            <input
                                {...register('service')}
                                type="text" placeholder="Enter Specialized Service Provided" className="input input-bordered w-full " />

                        </div>

                    </div>

                    <div className="flex gap-6">
                        {/* professional  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Healthcare Professionals</span>

                            </label>
                            <input
                                {...register('professional')}
                                type="text" placeholder="Name of Healthcare Professional" className="input input-bordered w-full " />

                        </div>

                        {/* audience  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Target Audience</span>

                            </label>
                            <input
                                {...register('audience')}
                                type="text" placeholder="Enter target audience" className="input input-bordered w-full " />

                        </div>
                    </div>


                    {/* Description  */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>

                        <textarea
                            {...register('description')}
                            placeholder="Enter comprehensive description"
                            className="input input-bordered w-full h-24"
                        ></textarea>

                    </div>






                    <button className="btn text-white bg-red-700">Add Campaign</button>
                </form>
            </div>
        </div>
    );
};

export default AddUpcomingCamp;