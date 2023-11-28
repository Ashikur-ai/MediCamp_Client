import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const useFindProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: profile = [] } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/profile/${user.email}`);
            return res.data;
        }
    })
    return profile;
};

export default useFindProfile;