import { DownOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import dropDownState from "../../Atoms/ComponentAtoms/Dropdown/DropdownState";

const InputButtonBox = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 10rem;
  height: 3rem;

  border: 1px solid #000;
  border-radius: 10px;
`;

const InputButton = () => {
  const [{ value }, setDropdown] = useRecoilState(dropDownState);

  console.log("button");
  return (
    <>
      <InputButtonBox
        value={value}
        onClick={() => {
          setDropdown((dropdown) => ({
            ...dropdown,
            isOpen: !dropdown.isOpen,
          }));
        }}
      >
        {value}
        <DownOutlined style={{ padding: "1rem" }} />
      </InputButtonBox>
    </>
  );
};

export default InputButton;
