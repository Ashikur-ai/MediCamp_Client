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
import ParticipantProfile from '../pages/Dashboard/Participant/ParticipantProfile';
import ManageRegisteredCamp from '../pages/Dashboard/Organizer/ManageRegisteredCamp';
import RegisteredCamp from '../pages/Dashboard/Participant/RegisteredCamp';
import Payment from '../pages/Dashboard/Participant/Payment';
import Feedback from '../pages/Dashboard/Participant/Feedback';
import ProfessionalProfile from '../pages/Dashboard/Professional/ProfessionalProfile';
import AcceptedCamps from '../pages/Dashboard/Professional/AcceptedCamps';
import ManageUser from '../pages/Dashboard/Organizer/ManageUser';
import UpdateOrganizerProfile from '../pages/Dashboard/Organizer/UpdateOrganizerProfile';
import UpdateCamp from '../pages/Dashboard/Organizer/UpdateCamp';
import UpdateParticipantProfile from '../pages/Dashboard/Participant/UpdateParticipantProfile';
import UpdateProfessionalProfile from '../pages/Dashboard/Professional/UpdateProfessionalProfile';
import StripePayment from '../pages/Dashboard/Participant/StripePayment';
import FeedbackForm from '../pages/Dashboard/Participant/FeedbackForm';
import AddUpcomingCamp from '../pages/Dashboard/Organizer/AddUpcomingCamp';

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
                path: "/camp-details/:campId",
                element: <PrivateRoute>
                    <CampDetails></CampDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/update-camp/${params.campId}`)
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
                element: <ManageRegisteredCamp></ManageRegisteredCamp>
            },
            {
                path: "manage-users",
                element: <ManageUser></ManageUser>
            },
            {
                path: "update-profile",
                element: <UpdateOrganizerProfile></UpdateOrganizerProfile>
            },
            {
                path: "update-camp/:campId",
                element: <UpdateCamp></UpdateCamp>,
                loader: ({ params }) => fetch(`http://localhost:5000/update-camp/${params.campId}`)
            },
            {
                path: "add-upcoming-camp",
                element: <AddUpcomingCamp></AddUpcomingCamp>
            },

            // participant links 
            {
                path: "update-profile/participant",
                element: <UpdateParticipantProfile></UpdateParticipantProfile>
            },
            {
                path: "review-camp/:id",
                element: <FeedbackForm></FeedbackForm>,
                loader: ({ params }) => fetch(`http://localhost:5000/registerCamp/${params.id}`)
                
            },
            {
                path: "participant-profile",
                element: <ParticipantProfile></ParticipantProfile>
            },
            {
                path: "registered-camps",
                element: <RegisteredCamp></RegisteredCamp>
            },
            {
                path: "payment-history",
                element: <Payment></Payment>
            },
            {
                path: "feedback-and-ratings",
                element: <Feedback></Feedback>
            },
            {
                path: "stripe-payment/:campId",
                element: <StripePayment></StripePayment>,
                loader: ({ params }) => fetch(`http://localhost:5000/registerCamp/${params.campId}`)
            },

            // professional routes
            {
                path: "professional-profile",
                element: <ProfessionalProfile></ProfessionalProfile>
            },
            {
                path: "accepted-camps",
                element: <AcceptedCamps></AcceptedCamps>
            },
            {
                path: "update-profile/professional",
                element: <UpdateProfessionalProfile></UpdateProfessionalProfile>
            }

        ]
    }
]);

export default router;