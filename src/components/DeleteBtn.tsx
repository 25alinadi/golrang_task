import { Button } from "antd"
import { IUserListData } from "../types/user.type"
import useDeleteUserQuery from "../hooks/userQueries/useDeleteUserQuery"

type DeleteBtnProps = {
    record: IUserListData,
}

const DeleteBtn:React.FC<DeleteBtnProps> = ({record}: DeleteBtnProps) => {
    const {mutate, isPending} = useDeleteUserQuery(record.id)

    const handleDeleteItem = () => mutate()

    return(<Button danger onClick={handleDeleteItem} className="mr-2" loading={isPending}>Delete</Button>)
}

export default DeleteBtn