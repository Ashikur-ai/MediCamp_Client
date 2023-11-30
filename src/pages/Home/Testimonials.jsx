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


const Testimonials = () => {

    const axiosPublic = useAxiosPublic();

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    })

    

    return (
        <section className='my-20'>
            <Heading
            heading={"Feedback and Ratings"}
            >
            </Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide
                        key={review._id}
                    >

                        <div className="card w-96 mx-auto glass flex flex-col items-center m-24">
                            <figure><img src={review.image} alt="car!" /></figure>
                            <div className="card-body text-center items-center">
                                <h2 className="card-title">{review.camp_name}</h2>
                                <p>{ review.date }</p>
                                <Rating
                                    
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.feedback}</p>
                                <h2 className='text-2xl text-rose-400'>{review.name}</h2>
                                
                            </div>
                        </div>                       
                    </SwiperSlide>)
                }
               
        
            </Swiper>
        </section>
    );
};

export default Testimonials;