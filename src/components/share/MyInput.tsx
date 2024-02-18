import { Form, Input } from "antd";
import { IUserData } from "../../types/user.type";

type FieldType = Omit<IUserData, "id">

type IMyInputProps = {
    name_field: keyof FieldType,
    initialValue: string
};

export const MyInput: React.FC<IMyInputProps> = ({name_field, initialValue}: IMyInputProps) => {
  return (
    <Form.Item<FieldType>
      label={name_field}
      name={name_field}
      rules={[{ required: true, message: `Please input your ${name_field}!` }]}
      initialValue={initialValue}
    >
      <Input />
    </Form.Item>
  );
};
