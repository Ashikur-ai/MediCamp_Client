import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { FaRegistered } from "react-icons/fa6";
import { RiMoneyDollarCircleFill, RiFeedbackFill } from "react-icons/ri";
import { FcAcceptDatabase } from "react-icons/fc";

const Dashboard = () => {
    
    // TODO: get isAdmin value from the database 
    const isProfessional = false;
    const isOrganizer = false;
    
    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-1/4 min-h-screen bg-red-700 text-white rounded-r-2xl">
                <ul className="menu p-4 text-xl">
                    {
                        
                        isOrganizer ?
                            <>
                                <li>

                                    <NavLink to="/dashboard/organizer-profile">
                                        <CgProfile />
                                        Organizer Profile</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/add-a-camp"><IoMdAddCircle />Add A Camp</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/manage-camps"><MdManageAccounts />Manage Camps</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/manage-registered-camps"><FaRegistered />Manage Registered Camps</NavLink>
                                </li>
                            </>
                            
                            :
                        isProfessional ?
                                <>
                                    <li>

                                        <NavLink to="/dashboard/professional-profile">
                                            <CgProfile />
                                            Professional Profile</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to="/dashboard/accepted-camps"><FcAcceptDatabase />Accepted Camps</NavLink>
                                    </li>
                                    
                                </> 
                            :

                            <>
                                <li>

                                        <NavLink to="/dashboard/participant-profile">
                                            <CgProfile />
                                        Participant Profile</NavLink>
                                </li>
                                <li>

                                        <NavLink to="/dashboard/registered-camps"><FaRegistered />Registered Camp </NavLink>
                                </li>
                                <li>

                                        <NavLink to="/dashboard/payment-history"><RiMoneyDollarCircleFill />Payment History</NavLink>
                                </li>
                                <li>

                                        <NavLink to="/dashboard/feedback-and-ratings"><RiFeedbackFill />Rating and Feedback</NavLink>
                                </li>
                                
                            </>
                    }
                    {/* shared nav links  */}
                    <div className="divider text-white"></div>
                    <li>

                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    
                    <li>

                        <NavLink to="/contact-us"><FaEnvelope></FaEnvelope>Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 pt-2 px-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;