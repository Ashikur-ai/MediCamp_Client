import { Link } from "react-router-dom";
import Heading from "../../../Shared/Heading";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";



const ManageCamp = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: camps = [], refetch } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps');
            return res.data;
        }
    })

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


    console.log('all camps',camps);
    const filteredCamps = camps.filter(camp => camp.email === user?.email);
    console.log('organizers own camps', filteredCamps);
    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen">
            <Heading
            heading={"Manage Campaigns"}
            ></Heading>
            <Helmet>
                <title>MediCamp | Manage Camp</title>
            </Helmet>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        
                        
                        {
                            filteredCamps?.map((camp, index) => <div
                                key={camp._id}
                                className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col justify-center">
                                    <span className="font-semibold text-2xl text-gray-700 uppercase">{index + 1}</span>
                                </div>

                                <div className="md:flex-grow px-2">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{camp.camp_name}</h2>
                                    <p className="text-indigo-500 inline-flex items-center mb-4">
                                        {camp.schedule} <br />
                                        {camp.venue} <br />
                                        Specilized Service : {camp.service} <br />
                                        {camp.professional} <br />
                                        Targeted Audience: {camp.audience}

                                    </p>
                                    <p className="leading-relaxed">{camp.description}</p>
                                </div>

                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col justify-center">
                                    <Link to={`/dashboard/update-camp/${camp._id}`}><button className="btn text-white bg-red-700 w-full">Update</button></Link>
                                    <button onClick={() => handleDelete(camp._id)} className="btn text-white bg-red-700 mt-5">Delete</button>
                                </div>

                            </div>)
                        }

                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageCamp;