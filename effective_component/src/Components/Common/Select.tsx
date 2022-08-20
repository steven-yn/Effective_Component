import { ReactElement } from "react";
import Dropdown from "../Dropdown/Dropdown";

type Props = {
  label: string;
  trigger: ReactElement;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
};

const Select = ({ label, trigger, value, onChange, options }: Props) => {
  console.log("select");

  return (
    <Dropdown label={label} value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option: string) => {
          return <Dropdown.Item>{option}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
