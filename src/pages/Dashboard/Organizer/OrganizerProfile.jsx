import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useFindProfile from "../../../hooks/useFindProfile";
import { useForm } from "react-hook-form";
import Heading from '../../../Shared/Heading';
import { Link } from "react-router-dom";


const OrganizerProfile = () => {
    // const { user } = useAuth();
    // const axiosSecure = useAxiosSecure();
    // const { data: profile = [] } = useQuery({
    //     queryKey: ['profile'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/profile/${user.email}`);
    //         return res.data;
    //     }
    // })
    // console.log(profile);

    const profile = useFindProfile();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen ">
            <Heading
                heading={"Profile Information"}
            ></Heading>
            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <p>Name: {profile?.name}</p>
                <p>Email: {profile?.email}</p>
                <p>Phone: {profile?.phone}</p>
                <p>Role: {profile?.role}</p>
                <p>Address: {profile?.address}</p>
                <Link to="/dashboard/update-profile">
                    <button className="btn">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default OrganizerProfile;