import { Input } from "antd";

type SearchInputProps = {
  onChange: (value: string | number | null) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  onChange
}: SearchInputProps) => {
  return (
    <Input
      onChange={(e) => onChange(e.target.value)}
      placeholder="search..."
      style={{ width: "250px" }}
    />
  );
};

export default SearchInput;
