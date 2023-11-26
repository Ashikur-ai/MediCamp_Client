import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import AvailableCamps from '../pages/AvailableCamps/AvailableCamps';
import PrivateRoute from './PrivateRoutes';
import Dashboard from '../pages/Dashboard/Dashboard';
import ContactUs from '../pages/ContactUs/ContactUs';
import CampDetails from '../pages/CampDetails/CampDetails';

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
                path: "/dashboard",
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/camp-details",
                element: <CampDetails></CampDetails>
            }

        ]
    },
]);

export default router;