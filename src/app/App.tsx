import { FC, Suspense, lazy, useEffect, useState } from "react";
import useAllUsersQuery from "../hooks/userQueries/useAllUserQuery";
import { IUserData, IUserListData } from "../types/user.type";
import { Flex, Typography } from "antd";
import { Loading } from "../components/share/Loading";

const ListUsers = lazy(() => import("../components/ListUsers"))
const SearchSelectInput = lazy(() => import("../components/SearchSelectInput"))
const SearchInput = lazy(() => import("../components/SearchInput"))

const App: FC = () => {
  const { data:usersData } = useAllUsersQuery();
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
        <Suspense>
          <SearchSelectInput onChange={setSearchSelect} />
          <SearchInput onChange={setSearchInput} />
        </Suspense>
      </Flex>
      <Suspense fallback={<Loading />}>
        <ListUsers users={users} />
      </Suspense>
    </>
  )
};

export default App;
