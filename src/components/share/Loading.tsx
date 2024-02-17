import { Flex, Spin } from "antd";

export const Loading: React.FC = () => {
  return (
    <Flex gap="small" vertical className="mt-5">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>
  );
};
