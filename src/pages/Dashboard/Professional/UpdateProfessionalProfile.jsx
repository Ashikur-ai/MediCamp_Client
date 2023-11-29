import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useFindProfile from "../../../hooks/useFindProfile";
import { useForm } from "react-hook-form";
import Heading from '../../../Shared/Heading';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

const UpdateProfessionalProfile = () => {

    const profile = useFindProfile();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const res = await axiosSecure.patch('/updateProfile', data);
        if (res.data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Profile Updated`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen ">
            <Heading
                heading={"Update Professional Profile"}
            ></Heading>
            <Helmet>
                <title>MediCamp | Update Professional</title>
            </Helmet>
            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <div className="flex gap-6">
                        {/* name  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                {...register('name')}
                                type="text" placeholder="Type your name" defaultValue={profile?.name} className="input input-bordered w-full " />

                        </div>

                        {/* email  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                {...register('email')}
                                type="email" placeholder="Type your email" value={profile?.email} readOnly className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* phone  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Phone Number</span>

                            </label>
                            <input
                                {...register('phone')}
                                type="text" placeholder="Type your name" defaultValue={profile?.phone} className="input input-bordered w-full " />

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






                    <button className="btn text-white bg-red-700">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfessionalProfile;