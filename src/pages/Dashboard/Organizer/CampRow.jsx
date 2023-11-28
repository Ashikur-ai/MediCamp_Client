import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";


const CampRow = ({ index, camp }) => {

    const { camp_name, description, schedule, venue, service, professional, audience, _id } = camp;
    const axiosSecure = useAxiosSecure();
    const { refetch } = useQuery();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/delete-camp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col justify-center">
                <span className="font-semibold text-2xl text-gray-700 uppercase">{ index+1 }</span>
            </div>

            <div className="md:flex-grow px-2">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{ camp_name }</h2>
                <p className="text-indigo-500 inline-flex items-center mb-4">
                    {schedule} <br />
                    {venue} <br />
                    Specilized Service : {service} <br />
                    {professional} <br />
                    Targeted Audience: {audience}

                </p>
                <p className="leading-relaxed">{description}</p>
            </div>

            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col justify-center">
                <Link to={`/dashboard/update-camp/${_id}`}><button className="btn w-full">Update</button></Link>
                <button onClick={()=>handleDelete(_id)} className="btn mt-5">Delete</button>
            </div>

        </div>
    );
};

export default CampRow;