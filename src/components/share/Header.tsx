import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { Typography } from "antd";
import { Suspense, lazy, useState } from "react";
import { IUserData } from "../../types/user.type";
import useCreateUserQuery from "../../hooks/userQueries/useCreateUserQuery";

const Modal = lazy(() => import("./Modal"));
const UserForm = lazy(() => import("../UserForm"));

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { mutate } = useCreateUserQuery();

  const handleSubmitNewUser = (value: IUserData) => {
    mutate(value);
    setOpenModal(!openModal);
  };

  return (
    <header>
      {openModal && (
        <Suspense>
          <Modal
            title="New User"
            open={openModal}
            onCancel={() => setOpenModal(!openModal)}
          >
            <UserForm handleSubmit={handleSubmitNewUser} />
          </Modal>
        </Suspense>
      )}
      <Row align={"middle"}>
        <Col flex={"auto"}>
          <Typography.Title level={2}>Users List</Typography.Title>
        </Col>
        <Col flex={"none"}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size={"middle"}
            onClick={() => setOpenModal(true)}
          >
            New User
          </Button>
        </Col>
      </Row>
      <Divider />
    </header>
  );
};

export default Header;
