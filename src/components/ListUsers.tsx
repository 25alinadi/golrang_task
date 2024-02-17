import { tableColumns } from "../contexts/table"
import { IUserListData } from "../types/user.type"
import ActionBtn from "./ActionBtn"
import { Table } from "antd"
import { Loading } from "./share/Loading"

type ListUsersProps = {
    users: IUserListData[]
    isLoading: boolean
}

const ListUsers:React.FC<ListUsersProps> = ({isLoading, users}: ListUsersProps) => {
    
    const columns = [
      ...tableColumns,
      { 
        title: "Action", 
        dataIndex: "action", 
        key: "action",
        align: "center",
        render:(_:any, record:IUserListData) => <ActionBtn record={record} />
      },
    ];
  
    if (isLoading) return <Loading />;
  
    return <Table columns={columns} dataSource={users ?? []} pagination={false} bordered className="mt-2" />;
  
}

export default ListUsers