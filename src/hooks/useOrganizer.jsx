import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useOrganizer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isOrganizer } = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/organizer/${user.email}`);
            
            return res.data?.organizer;
        }
    })
    return [isOrganizer]
   

};

export default useOrganizer;