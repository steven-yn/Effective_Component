import { ReactElement } from "react";
import Dropdown from "../Dropdown/Dropdown";

type Props = {
  label: string;
  trigger: ReactElement;
  options: string[];
};

const Select = ({ label, trigger, options }: Props) => {
  console.log("select");

  return (
    <Dropdown label={label}>
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
