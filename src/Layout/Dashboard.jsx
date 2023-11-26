import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { FaRegistered } from "react-icons/fa6";

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

                                        <NavLink to="/dashboard/organizer-profile">
                                            <CgProfile />
                                            Professional Profile</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to="/dashboard/bookings"><FaBook></FaBook>Manage Bookings</NavLink>
                                    </li>
                                    <li>

                                        <NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink>
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

                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart </NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/review"><FaAd></FaAd>Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/paymentHistory"><FaList></FaList>My Payments</NavLink>
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