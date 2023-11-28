import React from 'react';
import CampCard from '../../Shared/CampCard';
import Heading from '../../Shared/Heading';
import AvailableCampCard from './AvailableCampCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";


const AvailableCamps = () => {
    const axiosPublic = useAxiosPublic();
    const { data: camps = [] } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const res = await axiosPublic.get('/camps');
            return res.data;
        }
    })

    return (
        <div className='min-h-screen'>
            <Heading
            heading={"Available Campaigns"}
            ></Heading>
            <div className='grid grid-cols-5 gap-4 px-10'>
                {
                    camps?.map(camp => <CampCard
                        key={camp._id}
                        camp={camp}
                    ></CampCard>)
                }
                
            </div>
        </div>
    );
};

export default AvailableCamps;