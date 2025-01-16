import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRole = () => {
  const { user } = useAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/user/role/${user?.email}`
      );
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
