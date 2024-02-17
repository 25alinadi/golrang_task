import { useQuery } from "@tanstack/react-query";
import APIS from "../../contexts/api";
import httpClient from "../../core/httpClient";
import { QueryKey } from "../../contexts/enum";

const useAllUsersQuery = () => {
  const fetchAllUsers = async () => {
    try {
      const response = await httpClient.get(APIS.users);
      if (response.status === 200) {
        return response.data;
      }
      // Handle other status codes
      return [];
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error fetching users:", error);
      return [];
    }
  };

  return useQuery({ queryKey: [QueryKey.USERS], queryFn: fetchAllUsers });
};

export default useAllUsersQuery;
