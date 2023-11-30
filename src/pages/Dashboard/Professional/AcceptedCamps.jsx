import { Helmet } from "react-helmet-async";
import Heading from "../../../Shared/Heading";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const AcceptedCamps = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: acceptedCamps = [] } = useQuery({
        queryKey: ['acceptedCamp'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/acceptedCamp/${user.email}`);
            return res.data;

        }
    })
    
    return (
        <div className="border shadow-lg mx-5 rounded-xl text-center min-h-screen">
            <Helmet>
                <title>MediCamp | Accepted Camps</title>
            </Helmet>
            <Heading
            heading={"Accepted Campaigns"}
            >

            </Heading>

            <div className="overflow-x-auto px-4">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Date and Time</th>
                            <th>Venue</th>
                            <th>Target Audience</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            acceptedCamps?.map((camp, index) =>
                                <tr key={camp._id}>
                                    <th>{index + 1}</th>
                                    <td>{camp.camp_name}</td>
                                    <td>{camp.schedule}</td>
                                    <td>{camp.venue}</td>
                                    <td>{camp.audience}</td>
                                    <td><Link to={`/upcoming-camp-details/${camp._id}`}><button className="btn bg-red-700 text-white">View Details</button></Link></td>
                                    
                                    
                                   
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AcceptedCamps;