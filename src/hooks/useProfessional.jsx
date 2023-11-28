import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProfessional = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isProfessional } = useQuery({
        queryKey: [user?.email, 'isProfessional'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/professional/${user.email}`);
            console.log(res.data);
            return res.data?.professional;
        }
    })
    return [isProfessional]
};

export default useProfessional;