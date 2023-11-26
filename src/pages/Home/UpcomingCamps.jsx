import Heading from '../../Shared/Heading';

const UpcomingCamps = () => {
    return (
        <div>
            <Heading
                heading={"Upcoming Campaigns"}
            ></Heading>
            <div className='lg:flex container mx-auto px-10 pt-10'>
                <div className='lg:w-1/2'>
                    <img className='rounded-xl shadow-xl w-96' src="https://i.ibb.co/mX2DVdv/uc1.jpg" alt="" />
                    <img className='rounded-xl shadow-xl w-96 z-10 relative ml-10 -mt-32  ' src="https://i.ibb.co/64TsDq1/uc2.jpg" alt="" />
                    <img className='rounded-xl shadow-xl w-96 z-20 relative -mt-24 ' src="https://i.ibb.co/m5q8VvX/uc3.png" alt="" />
                </div>
                <div className='lg:w-1/2'> 
                    <p className='text-2xl md:text-4xl lg:text-5xl font-bold text-red-700'>Building Bridges to Better Health: Our Campaign Countdown Begins.</p>

                    <p className='mt-5'>Get ready to be part of something truly empowering with our upcoming campaign, "Rising Together." More than just a health program, this initiative is a rallying call for our community to unite and uplift every individual towards a healthier and more vibrant life. Through a series of impactful events and projects, "Rising Together" aims to reshape the narrative of health, emphasizing the strength and support that can be found within our neighborhoods. From fitness challenges that promote an active lifestyle to initiatives fostering mental well-being, this campaign is designed to create lasting positive change. Join us as we collectively rise, inspiring a wave of wellness that touches every corner of our community. "Rising Together" is not just a campaign; it's a movement towards a healthier, more connected tomorrow.</p>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCamps;