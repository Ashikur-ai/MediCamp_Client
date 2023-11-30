
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Heading from '../../Shared/Heading';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import CampCard from '../../Shared/CampCard';
import UpcomingCampCard from '../../Shared/UpcomingCampCard';

const UpcomingCamps = () => {

    const axiosPublic = useAxiosPublic();

    const { data: upcomingCamps = [] } = useQuery({
        queryKey: ['upcomingCamps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upcomingCamp');
            return res.data;
        }
    })

    return (
        <div>
            <Heading
                heading={"Upcoming Campaigns: Building Bridges to Better Health, our Campaign Countdown Begins."}
            ></Heading>
            <div className='lg:flex container mx-auto px-10 pt-10'>
                <div className='lg:w-1/2'>
                    <img className='rounded-xl shadow-xl w-96' src="https://i.ibb.co/mX2DVdv/uc1.jpg" alt="" />
                    <img className='rounded-xl shadow-xl w-96 z-10 relative ml-10 -mt-32  ' src="https://i.ibb.co/64TsDq1/uc2.jpg" alt="" />
                    <img className='rounded-xl shadow-xl w-96 z-20 relative -mt-24 ' src="https://i.ibb.co/m5q8VvX/uc3.png" alt="" />
                </div>
                <div className='lg:w-1/2'> 
                    <p className='text-2xl md:text-4xl lg:text-5xl font-bold text-red-700'></p>

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            upcomingCamps?.map(camp => <SwiperSlide
                                key={camp._id}
                            >
                                <UpcomingCampCard
                                camp={camp}
                                ></UpcomingCampCard>
                                
                            </SwiperSlide>)
                        }


                    </Swiper>
                    
                </div>
            </div>
        </div>
    );
};

export default UpcomingCamps;