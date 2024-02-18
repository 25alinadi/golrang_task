import { IUserData } from "../types/user.type";
import { Button, Form } from "antd";
import { MyInput } from "./share/MyInput";

type UserFormProps = {
  prevData?: IUserData;
  handleSubmit: (value: any) => void
}

const UserForm: React.FC<UserFormProps> = ({ prevData, handleSubmit }: UserFormProps) => {

    return (
    <Form name="basic" autoComplete="off" className="pr-3" onFinish={handleSubmit}>
      <MyInput name_field="name" initialValue={prevData?.name ?? ""} />
      <MyInput name_field="username" initialValue={prevData?.username ?? ""} />
      <MyInput name_field="phone" initialValue={prevData?.phone ?? ""} />
      <MyInput name_field="email" initialValue={prevData?.email ?? ""}  />
      <MyInput name_field="website" initialValue={prevData?.website ?? ""} />
      <Button type="primary" className="mb-1" htmlType="submit">Submit</Button>
    </Form>
  );
};

export default UserForm;
