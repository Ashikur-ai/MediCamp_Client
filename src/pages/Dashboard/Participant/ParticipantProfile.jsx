import React from 'react';
import useFindProfile from '../../../hooks/useFindProfile';
import { useForm } from "react-hook-form";
import Heading from '../../../Shared/Heading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ParticipantProfile = () => {
    
    
    const profile = useFindProfile();
    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen ">
            <Heading
                heading={"Profile Information"}
            ></Heading>
            <Helmet>
                <title>MediCamp | Professional profile</title>
            </Helmet>
            <div className='w-2/3 mx-auto border rounded-lg p-6 shadow-xl'>
                <p>Name: {profile?.name}</p>
                <p>Email: {profile?.email}</p>
                <p>Phone: {profile?.phone}</p>
                <p>Address: {profile?.address}</p>
                <Link to="/dashboard/update-profile/participant">
                    <button className="btn bg-red-700 text-white">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default ParticipantProfile;