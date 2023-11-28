import Heading from "../../Shared/Heading";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { TbCoinTakaFilled } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useOrganizer from "../../hooks/useOrganizer";
import useProfessional from "../../hooks/useProfessional";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CampDetails = () => {
    const camp = useLoaderData(); 
    const [isOrganizer] = useOrganizer();
    const [isProfessional] = useProfessional();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleCampRegister = async(event) => {
        event.preventDefault();
        
        const registeredCamp = {
            audience: camp?.audience,
            camp_name: camp?.camp_name,
            description: camp?.description,
            fee: camp?.fee,
            image: camp?.image,
            professional: camp?.professional,
            schedule: camp?.schedule,
            service: camp?.service,
            venue: camp?.venue,
            camp_id: camp?._id,
            email: user?.email
        }
       
       
        

        const res = await axiosSecure.post('/registeredCamp', registeredCamp);
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Already Registration Completed",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>
                    MediCamp | Details
                </title>
            </Helmet>
            <Heading
            heading={"Campaign Details"}
            >

            </Heading>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{ camp?.schedule }</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{ camp?.camp_name }</h1>
                            <div className="text-2xl flex gap-5 justify-start items-center"><TbCoinTakaFilled></TbCoinTakaFilled>{camp?.fee}</div>
                            <div className="flex mb-4">
                                <a className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
                                
                            </div>
                            <p className="leading-relaxed mb-4">{ camp?.description }</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Location :</span>
                                <span className="ml-auto text-gray-900">{ camp?.venue }</span>
                            </div>
                            <div className="flex  border-t border-b border-gray-200 py-2 mb-6">
                                <span className="text-gray-500"> </span>
                                <span className="ml-auto text-gray-900">Audience: { camp?.audience }</span>
                            </div>
                           
                            <div className="flex">
                                
                                
                                

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                {
                                   

                                    (isOrganizer | isProfessional) ? <></> : <button className="btn bg-red-700 hover:bg-red-500 text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>JOIN CAMP</button>
                                }
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        
                                        <Heading
                                            heading={"Register for campaign"}
                                        ></Heading>
                                        
                                        
                                        <div className="w-1/2 mx-auto">
                                            <form onSubmit={handleCampRegister} method="dialog">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Age</span>
                                                    </label>
                                                    <input type="text" name="age" placeholder="Age" className="input input-bordered" required />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Phone</span>
                                                    </label>
                                                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Gender</span>
                                                    </label>
                                                    <span>Male</span>
                                                    <input type="radio" name="gender" className="radio radio-error" value={"male"} />

                                                    <span>Female</span>
                                                    <input type="radio" name="gender" className="radio radio-error" value={"female"} />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Address</span>
                                                    </label>
                                                    <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Camp Fee</span>
                                                    </label>
                                                    <input type="text" name="fee" readOnly placeholder="Camp fee" value={camp?.fee} className="input input-bordered" required />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Emergency Contact</span>
                                                    </label>
                                                    <input type="text" name="emergency" placeholder="Emergency Contact" className="input input-bordered" required />
                                                </div>


                                                <div className="form-control mt-6 modal-action">
                                                    <button className="btn bg-red-700 text-white">Register Campaign</button>
                                                </div>
                                                
                                            </form>
                                            <p className="pt-5">*Press ESC to close</p>
                                        </div>
                                    </div>
                                </dialog>

                                
                            </div>
                        </div>
                        <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={ camp?.image } />
                    </div>
                    
                </div>
               
            </section>
        </div>
    );
};

export default CampDetails;