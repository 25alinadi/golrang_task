import { useMutation, useQueryClient } from "@tanstack/react-query"
import APIS from "../../contexts/api"
import httpClient from "../../core/httpClient"
import { QueryKey } from "../../contexts/enum"
import { IUserData, IUserListData } from "../../types/user.type"


const useUpdateUsersQuery  = (userId: number) => {
    const queryClient = useQueryClient()
    const updateUser = async (data: IUserData) => {
        try {
            const response = await httpClient.put(`${APIS.users}/${userId}`, data);
            if (response.status === 200) {
              return response.data;
            }
            // Handle other status codes
            return null;
          } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error updating user:", error);
            return null;
          }
    }

    const handleUpdateUser = (updateUser: IUserData) => queryClient.setQueryData([QueryKey.USERS], (prevData:IUserListData[]) => {
        return prevData?.map((item:IUserListData) => {
            if(item?.id === userId) return {...item, ...updateUser}
            return item
        })
    })


    return useMutation({mutationFn: updateUser, onSuccess: handleUpdateUser})
}

export default useUpdateUsersQuery