import { useMutation, useQueryClient } from "@tanstack/react-query"
import APIS from "../../contexts/api"
import httpClient from "../../core/httpClient"
import { IUserListData } from "../../types/user.type"
import { QueryKey } from "../../contexts/enum"

const useDeleteUserQuery = (userId: number) => {
    const queryClient = useQueryClient()

    const deleteUser = async () => {
        try {
          const response = await httpClient.delete(`${APIS.users}/${userId}`);
          if (response.status === 200) {
            return response.data;
          }
          // Handle other status codes
          return null;
        } catch (error) {
          // Handle network errors or other exceptions
          console.error("Error deleting user:", error);
          return null;
        }
      };

    const deleteUserFromList = () => queryClient.setQueryData([QueryKey.USERS], (prevData:IUserListData[]) => prevData?.filter((item:IUserListData) => item?.id !== userId))

    return useMutation({mutationFn: deleteUser, onSuccess:deleteUserFromList})
}

export default useDeleteUserQuery