import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import AvailableCamps from '../pages/AvailableCamps/AvailableCamps';
import PrivateRoute from './PrivateRoutes';
import ContactUs from '../pages/ContactUs/ContactUs';
import CampDetails from '../pages/CampDetails/CampDetails';
import Register from '../pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import OrganizerProfile from '../pages/Dashboard/Organizer/OrganizerProfile';
import AddaCamp from '../pages/Dashboard/Organizer/AddaCamp';
import ManageCamp from '../pages/Dashboard/Organizer/ManageCamp';
import RegisteredCamp from '../pages/Dashboard/Organizer/RegisteredCamp';
import ParticipantProfile from '../pages/Dashboard/Participant/ParticipantProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/available-camp",
                element: <PrivateRoute>
                    <AvailableCamps></AvailableCamps>
                </PrivateRoute>
            },
            
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/camp-details",
                element: <CampDetails></CampDetails>
            },
            {
                path: "/register",
                element: <Register></Register>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            // organizer links 
            
            {
                path: "organizer-profile",
                element: <OrganizerProfile></OrganizerProfile>
            },
            {
                path: "add-a-camp",
                element: <AddaCamp></AddaCamp>
            },
            {
                path: "manage-camps",
                element: <ManageCamp></ManageCamp>
            },
            {
                path: "manage-registered-camps",
                element: <RegisteredCamp></RegisteredCamp>
            },

            // participant links 
            {
                path: "participant-profile",
                element: <ParticipantProfile></ParticipantProfile>
            }
        ]
    }
]);

export default router;