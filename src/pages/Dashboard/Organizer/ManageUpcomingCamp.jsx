import { Helmet } from "react-helmet-async";
import Heading from "../../../Shared/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import UpcomingCampRow from "./UpcomingCampRow";


const ManageUpcomingCamp = () => {

    const axiosSecure = useAxiosSecure();
    const { data: upcomingCamps = [], refetch } = useQuery({
        queryKey: ['upcomingCamps'],
        queryFn: async () => {
            const res = await axiosSecure.get('/upcomingCamp');
            return res.data;
        }
    })

    
    
    const handleConfirm = async (id) => {
        const res = await axiosSecure.patch(`confirm-camp/${id}`);
        if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated to Confirm",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    
    const handleCancel = (id) => {
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
                axiosSecure.delete(`/delete-registered-camp/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>MediCamp | Manage Upcoming Camp</title>
            </Helmet>

            <Heading
            heading={"Manage Upcoming Campaigns"}
            ></Heading>
            <div className="overflow-x-auto px-4">
                <table className="table table-zebra text-center">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Date and Time</th>
                            <th>Venue</th>
                            <th>Target Audience</th>
                            <th>Participant Count</th>
                            <th>Professional Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            upcomingCamps?.map((camp, index) =>
                                <UpcomingCampRow
                                    key={camp._id}
                                    camp={camp}
                                    index={index}
                            ></UpcomingCampRow>
                                )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUpcomingCamp;