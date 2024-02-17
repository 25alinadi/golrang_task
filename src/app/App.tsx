import { FC, useEffect, useState } from "react";
import useAllUsersQuery from "../hooks/userQueries/useAllUserQuery";
import ListUsers from "../components/ListUsers";
import { IUserData, IUserListData } from "../types/user.type";
import SearchSelectInput from "../components/SearchSelectInput";
import { Flex, Typography } from "antd";
import SearchInput from "../components/SearchInput";

const App: FC = () => {
  const { data:usersData, isLoading } = useAllUsersQuery();
  const [users, setUsers] = useState<IUserListData[]>([])
  const [searchSelect, setSearchSelect] = useState<string|number|null>(null);
  const [searchInput, setSearchInput] = useState<string|number|null>(null);

  useEffect(() => {
    setUsers(usersData)
  }, [usersData])

  useEffect(() => {
    setSearchInput(null)
    if(searchSelect){
      setUsers(usersData?.filter((item:IUserListData) => item?.id === searchSelect))
    }
    else
      setUsers(usersData)
  }, [searchSelect])
  
  useEffect(() => {
    setSearchSelect(null)
    if (searchInput) {
      const filteredUsers = usersData?.filter((item: IUserData) => {
        const allFieldValues = Object.values(item).join(' ').toLowerCase();
        return allFieldValues.includes(searchInput.toLowerCase());
      });
      setUsers(filteredUsers);
    } else {
      setUsers(usersData);
    }
  }, [searchInput])
  
  return (
    <>
      <Flex gap="middle" align="center" className="mb-1">
        <Typography.Title level={5}>Filter: </Typography.Title>
        <SearchSelectInput onChange={setSearchSelect} />
        <SearchInput onChange={setSearchInput} />
      </Flex>
      <ListUsers users={users} isLoading={isLoading} />
    </>
  )
};

export default App;
