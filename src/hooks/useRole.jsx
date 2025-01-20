import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";

const useRole = () => {
  const { user } = useAuth();
  const axiosPublic = UseAxiosPublic();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/role/${user?.email}`);
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
