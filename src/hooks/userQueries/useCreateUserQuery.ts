import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIS from "../../contexts/api";
import httpClient from "../../core/httpClient";
import { QueryKey } from "../../contexts/enum";
import { IUserData, IUserListData } from "../../types/user.type";

const useCreateUsersQuery = () => {
  const queryClient = useQueryClient();
  const createUser = async (data: IUserData) => {
    try {
      const response = await httpClient.post(APIS.users, data);
      if (response.status === 201) {
        return response.data;
      }
      // Handle other status codes
      return null;
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error creating user:", error);
      return null;
    }
  };

  const handleAddNewUser = (createdUser: IUserData) =>
    queryClient.setQueryData([QueryKey.USERS], (prevData: IUserListData[]) => [
      ...prevData,
      createdUser,
    ]);

  return useMutation({ mutationFn: createUser, onSuccess: handleAddNewUser });
};

export default useCreateUsersQuery;
