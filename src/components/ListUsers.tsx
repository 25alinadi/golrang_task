import { tableColumns } from "../contexts/table"
import { IUserListData } from "../types/user.type"
import ActionBtn from "./ActionBtn"
import { Table } from "antd"

type ListUsersProps = {
    users: IUserListData[]
}

const ListUsers:React.FC<ListUsersProps> = ({users}: ListUsersProps) => {
    
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
    
    return <Table columns={columns} dataSource={users ?? []} pagination={false} bordered className="mt-2" />;
  
}

export default ListUsers