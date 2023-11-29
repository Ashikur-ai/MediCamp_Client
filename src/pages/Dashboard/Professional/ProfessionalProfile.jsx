import useFindProfile from "../../../hooks/useFindProfile";
import Heading from '../../../Shared/Heading';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProfessionalProfile = () => {
    const profile = useFindProfile();

    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen ">
            <Helmet>
                <title>MediCamp | Profile Professional</title>
            </Helmet>
            <Heading
                heading={"Profile Information"}
            ></Heading>
            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <p>Name: {profile?.name}</p>
                <p>Email: {profile?.email}</p>
                <p>Phone: {profile?.phone}</p>
                <p>Role: {profile?.role}</p>
                <p>Address: {profile?.address}</p>
                <Link to="/dashboard/update-profile/professional">
                    <button className="btn text-white bg-red-700">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default ProfessionalProfile;