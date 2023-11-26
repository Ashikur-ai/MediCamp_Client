import Heading from "../../Shared/Heading";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { TbCoinTakaFilled } from "react-icons/tb";
const CampDetails = () => {
    
    const handleCampRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const gender = form.gender.value;
       
        console.log(gender);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been saved",
            showConfirmButton: false,
            timer: 1500
        });

    }    
    return (
        <div className="min-h-screen">
            <Heading
            heading={"Campaign Details"}
            >

            </Heading>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Schedule: 9 Dec, 2023</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Community Resilience in the Face of Adversity: A Unified Front Against the COVID-19 Pandemic</h1>
                            <div className="text-2xl flex gap-5 justify-start items-center"><TbCoinTakaFilled></TbCoinTakaFilled>1500</div>
                            <div className="flex mb-4">
                                <a className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
                                
                            </div>
                            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Location</span>
                                <span className="ml-auto text-gray-900">Satkira, Khulna</span>
                            </div>
                            <div className="flex border-t border-b border-gray-200 py-2 mb-6">
                                <span className="text-gray-500">Target Audience</span>
                                <span className="ml-auto text-gray-900">Middle-Aged Man</span>
                            </div>
                           
                            <div className="flex">
                                
                                
                                

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn bg-red-700 hover:bg-red-500 text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>JOIN CAMP</button>
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
                                                    <input type="radio" name="gender" className="radio radio-warning" value={"male"} />

                                                    <span>Female</span>
                                                    <input type="radio" name="gender" className="radio radio-warning" value={"female"} />
                                                </div>

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Address</span>
                                                    </label>
                                                    <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
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
                        <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://i.ibb.co/7rRFrHT/b4.webp"/>
                    </div>
                    <p className="mt-10">
                        Welcome to the Corona Care Camp, a dedicated initiative designed to address the ongoing challenges posed by the COVID-19 pandemic. In the face of this unprecedented health crisis, our camp serves as a central hub for essential resources, testing, and community support. Committed to safeguarding public health, we offer free on-site COVID-19 testing, ensuring easy access for all community members.
                        Welcome to the Corona Care Camp, a dedicated initiative designed to address the ongoing challenges posed by the COVID-19 pandemic. In the face of this unprecedented health crisis, our camp serves as a central hub for essential resources, testing, and community support. Committed to safeguarding public health, we offer free on-site COVID-19 testing, ensuring easy access for all community members.

                        The Corona Care Camp extends beyond testing, providing educational sessions on pandemic prevention, vaccination information, and promoting best practices for personal and collective well-being. With a team of healthcare professionals and volunteers, we're here to offer guidance, support, and a sense of community resilience. Together, we stand united against the virus, fostering a safe environment and empowering individuals with the knowledge and resources needed to navigate these challenging times. Join us at the Corona Care Camp as we work collaboratively to prioritize health and safety for all.
                        The Corona Care Camp extends beyond testing, providing educational sessions on pandemic prevention, vaccination information, and promoting best practices for personal and collective well-being. With a team of healthcare professionals and volunteers, we're here to offer guidance, support, and a sense of community resilience. Together, we stand united against the virus, fostering a safe environment and empowering individuals with the knowledge and resources needed to navigate these challenging times. Join us at the Corona Care Camp as we work collaboratively to prioritize health and safety for all.
                        Welcome to the Corona Care Camp, a dedicated initiative designed to address the ongoing challenges posed by the COVID-19 pandemic. In the face of this unprecedented health crisis, our camp serves as a central hub for essential resources, testing, and community support. Committed to safeguarding public health, we offer free on-site COVID-19 testing, ensuring easy access for all community members.

                        The Corona Care Camp extends beyond testing, providing educational sessions on pandemic prevention, vaccination information, and promoting best practices for personal and collective well-being. With a team of healthcare professionals and volunteers, we're here to offer guidance, support, and a sense of community resilience. Together, we stand united against the virus, fostering a safe environment and empowering individuals with the knowledge and resources needed to navigate these challenging times. Join us at the Corona Care Camp as we work collaboratively to prioritize health and safety for all.
                    </p>
                </div>
               
            </section>
        </div>
    );
};

export default CampDetails;