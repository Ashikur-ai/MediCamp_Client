import { Helmet } from "react-helmet-async";
import Heading from "../../../Shared/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';



const ManageRegisteredCamp = () => {

    const axiosSecure = useAxiosSecure();
    const { data: allRegisteredCamps = [], refetch } = useQuery({
        queryKey: ['allRegisteredCamps'],
        queryFn: async () => {
            const res = await axiosSecure.get('/registeredCamp');
            return res.data;
        }
    })


    const handleConfirm = async(id) => {
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
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen ">
            <Helmet>
                <title>MediCamp | Manage Reg. Camp</title>
            </Helmet>
            <Heading
                heading={"Manage Registered Campaigns"}
            ></Heading>

            <div className="overflow-x-auto px-4">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Date and Time</th>
                            <th>Venue</th>
                            <th>Camp Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allRegisteredCamps?.map((camp, index) =>
                                <tr key={camp._id}>
                                    <th>{index + 1}</th>
                                    <td>{camp.camp_name}</td>
                                    <td>{camp.schedule}</td>
                                    <td>{camp.venue}</td>
                                    <td>{camp.fee}</td>
                                    {
                                        camp.payment ?
                                            <td><button className='btn  bg-green-700 text-white'>Paid</button></td>

                                            :
                                            <td><button className='btn  bg-red-700 text-white'>UnPaid</button></td>


                                    }
                                    {
                                        camp.payment ?
                                            <td><button onClick={() => handleConfirm(camp._id)} className="btn">{ camp.confirm ? 'Confirmed':'Pending' }</button></td>
                                            :
                                            <td><button className="btn" disabled>Pending</button></td>
                                    }
                                    {
                                        camp.payment ?
                                            <td><button onClick={() => handleCancel(camp._id)} className='btn text-white bg-red-700'>Cancel</button></td>
                                            :
                                            <></>
                                    }
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageRegisteredCamp;