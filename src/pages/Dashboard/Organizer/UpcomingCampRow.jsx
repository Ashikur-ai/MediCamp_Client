import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const UpcomingCampRow = ({ camp, index }) => {
    const axiosSecure = useAxiosSecure();
    const [countProfessional, setCountProfessional] = useState(null);
    const [countParticipant, setCountParticipant] = useState(null);
    const [participants, setParticipants] = useState(null);
    const [professionals, setProfessionals] = useState(null);
    

    const handleInterestedProfessional = async(id) => {
        const result = await axiosSecure.get(`/countProfessional/${id}`)
        
        setCountProfessional(result.data.length);
        setProfessionals(result.data);
    }

    const handleInterestedParticipant = async (id) => {
        const result = await axiosSecure.get(`/countParticipant/${id}`)
       
        setCountParticipant(result.data.length);
        setParticipants(result.data);
    }

    

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


                axiosSecure.delete(`/delete-upcoming/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            
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

    const handleAcceptParticipant = async(id) => {
        const res = await axiosSecure.patch(`accept-participants/${id}`);
        if (res.data.modifiedCount > 0) {
           
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Participant Accepted",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    const handleAcceptProfessional = async (id) => {
        const res = await axiosSecure.patch(`accept-professionals/${id}`);
        if (res.data.modifiedCount > 0) {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Professional Accepted",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handlePublish = async (id) => {
        const res = await axiosSecure.patch(`publish-upcoming/${id}`);
        if (res.data.modifiedCount > 0) {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Campaign Published",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    

    
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* participant modal  */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    
                    <div className="overflow-x-auto px-4">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                    <th>Emergency Contact</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    participants?.map((participant, index) =>
                                        <tr key={participant._id}>
                                            <th>{index + 1}</th>
                                            <td>{participant.name}</td>
                                            <td>{participant.age}</td>
                                            <td>{participant.gender}</td>
                                            <td>{participant.address}</td>
                                            <td>{participant.phone}</td>
                                            <td>{participant.emergency}</td>
                                            
                                               
                                            
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            {/* professional modal  */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="overflow-x-auto px-4">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th>#</th>
                                    <th>Professional Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                    <th>Emergency Contact</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    professionals?.map((participant, index) =>
                                        <tr key={participant._id}>
                                            <th>{index + 1}</th>
                                            <td>{participant.name}</td>
                                            <td>{participant.age}</td>
                                            <td>{participant.gender}</td>
                                            <td>{participant.address}</td>
                                            <td>{participant.phone}</td>
                                            <td>{participant.emergency}</td>



                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <tr>
                <th>{index + 1}</th>
                <td>{camp.camp_name}</td>
                <td>{camp.schedule}</td>
                <td>{camp.venue}</td>
                <td>{camp.audience}</td>
                <td><button className="btn" onClick={() => handleInterestedParticipant(camp._id)}>{countParticipant ? countParticipant : 'See Participant Count'}</button></td>
                <td>
                    <button className="btn" onClick={() => handleInterestedProfessional(camp._id)}>{countProfessional ? countProfessional : 'See Professional Count' }</button>

                </td>
                <td>
                    <button className="btn text-white bg-red-700 w-full" onClick={() => document.getElementById('my_modal_2').showModal()}>Review Participant</button>

                    <button className="btn text-white bg-red-700 w-full" onClick={() => document.getElementById('my_modal_3').showModal()}>Review Professional</button>


                    <button onClick={()=>handleAcceptParticipant(camp._id)} className="btn text-white bg-red-700 w-full">Accept Participants</button>
                    <button onClick={()=>handleAcceptProfessional(camp._id)} className="btn text-white bg-red-700 w-full">Accept Professional</button>
                    <button onClick={() => handlePublish(camp._id)} className="btn text-white bg-red-700 w-full" >Publish</button>
                    <Link to={`/dashboard/update-upcoming-camp/${camp._id}`}><button className="btn text-white bg-red-700 w-full">Update</button></Link>
                    <button onClick={() => handleDelete(camp._id)} className="btn text-white bg-red-700 w-full">Delete</button>

                </td>
            </tr>   
        </>
    );
};

export default UpcomingCampRow;