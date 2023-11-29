
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Heading from '../../Shared/Heading';
import CampCard from '../../Shared/CampCard';
import Testimonials from './Testimonials';
import UpcomingCamps from './UpcomingCamps';
import Profile from './Profile';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';




const Home = () => {
    const axiosPublic = useAxiosPublic();
    const { data: camps = [] } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps');
            return res.data;
        }
    })

    

    

    


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
                {
                    camps.slice(0,6)?.map(camp => <CampCard key={camp._id}
                    camp={camp}
                    ></CampCard>)
                }
            </div>
            
            <div className='flex items-center justify-center'>
                <Link to="/available-camp">
                    <button className='btn text-white bg-red-700'>See All Camps</button>
                </Link>
               
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