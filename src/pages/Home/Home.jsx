
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Heading from '../../Shared/Heading';
import CampCard from '../../Shared/CampCard';
import Testimonials from './Testimonials';
import UpcomingCamps from './UpcomingCamps';
import Profile from './Profile';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediCamp | Home</title>
            </Helmet>
            <Banner></Banner>
            <Heading
                heading={"Popular Medical Camps"}
            ></Heading>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
                <CampCard></CampCard>
            </div>
            <div className='container mx-auto'>
                <Testimonials></Testimonials>
            </div>

            <div>
               <UpcomingCamps></UpcomingCamps>
            </div>
            <div >
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Home;