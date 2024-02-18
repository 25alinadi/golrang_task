import { Button } from "antd";
import { IUserData, IUserListData } from "../types/user.type";
import DeleteBtn from "./DeleteBtn";
import { Suspense, lazy, useState } from "react";
import useUpdateUsersQuery from "../hooks/userQueries/useUpdateUserQuery";

type ActionBtnProps = {
  record: IUserListData;
};

const Modal = lazy(() => import("./share/Modal"));
const UserForm = lazy(() => import("./UserForm"));

const ActionBtn: React.FC<ActionBtnProps> = ({ record }: ActionBtnProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { mutate, isPending } = useUpdateUsersQuery(record?.id);

  const handleSubmitEditUser = (value: IUserData) => {
    mutate(value);
    setOpenModal(!openModal);
  };

  return (
    <>
      {openModal && (
        <Suspense>
          <Modal
            title={`Edit User ID:${record?.id}`}
            open={openModal}
            onCancel={() => setOpenModal(!openModal)}
          >
            <UserForm prevData={record} handleSubmit={handleSubmitEditUser} />
          </Modal>
        </Suspense>
      )}
      <div>
        <DeleteBtn record={record} />
        <Button
          type="primary"
          onClick={() => setOpenModal(!openModal)}
          loading={isPending}
        >
          Edit
        </Button>
      </div>
    </>
  );
};

export default ActionBtn;
