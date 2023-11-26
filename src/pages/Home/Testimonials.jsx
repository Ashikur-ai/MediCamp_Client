import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Heading from '../../Shared/Heading';

const Testimonials = () => {
    return (
        <section className='my-20'>
            <Heading
            heading={"Feedback and Ratings"}
            >
            </Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide
                    key={1}
                >
                    <div className='flex flex-col items-center m-24'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                        <p>Community Resilience in the Face of Adversity: A Unified Front Against the COVID-19 Pandemic</p>
                        <p>9 Dec, 2023</p>
                        <h2 className='text-2xl text-rose-400'>Ashikur</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    key={1}
                >
                    <div className='flex flex-col items-center m-24'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                        <p>Hellow world</p>
                        <h2 className='text-2xl text-rose-400'>Ashikur</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    key={1}
                >
                    <div className='flex flex-col items-center m-24'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                        <p>Hellow world</p>
                        <h2 className='text-2xl text-rose-400'>Ashikur</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    key={1}
                >
                    <div className='flex flex-col items-center m-24'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                        <p>Hellow world</p>
                        <h2 className='text-2xl text-rose-400'>Ashikur</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;