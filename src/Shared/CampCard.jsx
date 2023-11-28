import { TbCoinTakaFilled } from "react-icons/tb";
import { BsCalendarDateFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { FaStarAndCrescent, FaUserGraduate, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
const CampCard = ({ camp }) => {
    
    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    src={camp.image}
                    alt="ui/ux review check"
                    className="h-full"
                />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                <button
                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
                        <FaUsers></FaUsers>150
                    </span>
                </button>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        {camp.camp_name}
                    </h5>
                    <p className="flex items-center gap-1.5 text-2xl font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <TbCoinTakaFilled className="text-3xl"></TbCoinTakaFilled> {camp.fee}
                    </p>
                </div>
                
                <div className="">
                    <div className="flex justify-start items-center gap-5"><BsCalendarDateFill />Schedule: { camp.schedule }</div>

                    <div className="flex justify-start items-center gap-5"><GrMapLocation />Location: { camp.venue }</div>

                    <div className="flex justify-start items-center gap-5"><FaStarAndCrescent />Specialized Service: { camp.service }</div>

                    <div className="flex justify-start items-center gap-5"><FaUserGraduate />Healthcare Professionals: { camp.professional }</div>

                    <div className="flex justify-start items-center gap-5"><FaUsers />Target Audience: { camp.audience }</div>           
                </div>
            </div>
            <div className="p-6 pt-3">
                <Link to={`/camp-details/${camp._id}`}>
                    <button
                        className="block w-full select-none rounded-lg bg-red-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CampCard;