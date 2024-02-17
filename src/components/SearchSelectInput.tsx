import { useQueryClient } from "@tanstack/react-query";
import { Select } from "antd";
import { QueryKey } from "../contexts/enum";
import { useEffect, useState } from "react";
import { IOptionData } from "../types/option.type";
import { IUserListData } from "../types/user.type";

type SearchSelectInputProps = {
  onChange: (value: string | number) => void
}

const SearchSelectInput:React.FC<SearchSelectInputProps> = ({onChange}: SearchSelectInputProps) => {
  const queryClient = useQueryClient();
  const users = queryClient?.getQueryData([QueryKey.USERS]);
  const [options, setOptions] = useState<IOptionData[]>([]);

  useEffect(() => {
    setOptions(
      users?.map((user: IUserListData, index: number) => {
        return { label: user?.name, value: user?.id };
      })
    );
  }, [users]);


  return (
    <Select
      showSearch
      allowClear
      onChange={onChange}
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      options={options}
    />
  );
};

export default SearchSelectInput;
