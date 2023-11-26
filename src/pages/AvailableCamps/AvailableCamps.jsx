import React from 'react';
import CampCard from '../../Shared/CampCard';
import Heading from '../../Shared/Heading';
import AvailableCampCard from './AvailableCampCard';

const AvailableCamps = () => {
    return (
        <div className='min-h-screen'>
            <Heading
            heading={"Available Campaigns"}
            ></Heading>
            <div className='grid grid-cols-5 gap-4 px-10'>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
                <AvailableCampCard></AvailableCampCard>
            </div>
        </div>
    );
};

export default AvailableCamps;