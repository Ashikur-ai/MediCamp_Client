
import Heading from '../../Shared/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Profile = () => {
    return (
        <section>
            <Heading
                heading={"Healthcare Professionals"}
            ></Heading>

            <div className='max-w-3xl mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide
                        key={1}
                    >
                        <div className="flex flex-col items-center m-24">
                            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Natalie Paisley
                                    </h4>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                                        CEO / Co-Founder
                                    </p>
                                </div>
                                <div className="flex justify-center p-6 pt-2 gap-7">
                                    <a
                                        href="#facebook"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                                    >
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href="#twitter"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                                    >
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href="#instagram"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                                    >
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide
                        key={1}
                    >
                        <div className="flex flex-col items-center m-24">
                            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Natalie Paisley
                                    </h4>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                                        CEO / Co-Founder
                                    </p>
                                </div>
                                <div className="flex justify-center p-6 pt-2 gap-7">
                                    <a
                                        href="#facebook"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                                    >
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href="#twitter"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                                    >
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href="#instagram"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                                    >
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide
                        key={1}
                    >
                        <div className="flex flex-col items-center m-24">
                            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Natalie Paisley
                                    </h4>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                                        CEO / Co-Founder
                                    </p>
                                </div>
                                <div className="flex justify-center p-6 pt-2 gap-7">
                                    <a
                                        href="#facebook"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                                    >
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href="#twitter"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                                    >
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a
                                        href="#instagram"
                                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                                    >
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Profile;