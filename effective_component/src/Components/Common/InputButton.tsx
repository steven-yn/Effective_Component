import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import {
  useDropdownContext,
  useSetDropdownContext,
} from "../../Hooks/useDropdownContext";

const InputButtonBox = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 10rem;
  height: 3rem;

  border: 1px solid #000;
  border-radius: 10px;
`;

const InputButton = ({ value }: { value: string }) => {
  const { isOpen } = useDropdownContext();
  const { setIsOpen } = useSetDropdownContext();

  console.log("button");

  return (
    <>
      <InputButtonBox
        value={value}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value}
        <DownOutlined style={{ padding: "1rem" }} />
      </InputButtonBox>
    </>
  );
};

export default InputButton;
