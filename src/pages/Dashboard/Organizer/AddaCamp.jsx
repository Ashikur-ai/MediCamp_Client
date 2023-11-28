import React from 'react';
import Heading from '../../../Shared/Heading';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddaCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const res = await axiosSecure.patch('/updateProfile', data);
        if (res.data.modifiedCount) {
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
            <Heading
            heading={"Add a Camp"}
            />

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
                                type="text" placeholder="Enter camp name"  className="input input-bordered w-full " />

                        </div>

                        {/* image  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Image</span>

                            </label>
                            <input
                                {...register('image')}
                                type="text" placeholder="Type your email" className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* camp fee  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Camp Fee</span>

                            </label>
                            <input
                                {...register('phone')}
                                type="text" placeholder="Type your name" className="input input-bordered w-full " />

                        </div>

                        {/* role  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Role</span>

                            </label>
                            <input
                                {...register('role')}
                                type="email" placeholder="Type your role" value={profile?.role} readOnly className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Address</span>

                        </label>
                        <input
                            {...register('address')}
                            type="text" placeholder="Type your address" defaultValue={profile?.address} className="input input-bordered w-full " />

                    </div>






                    <button className="btn">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AddaCamp;