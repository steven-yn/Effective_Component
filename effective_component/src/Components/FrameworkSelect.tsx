import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import dropDownState from "../Atoms/ComponentAtoms/Dropdown/DropdownState";
import InputButton from "./Common/InputButton";
import Select from "./Common/Select";

const FrameworkSelect = () => {
  const frameWorks = ["Next.js", "Remix", "Gatsby", "Relay"];
  const setDropDown = useSetRecoilState(dropDownState);

  useEffect(() => {
    setDropDown((dropdown) => ({ ...dropdown, value: frameWorks[0] }));
  }, []);

  return (
    <Select
      trigger={<InputButton />}
      label={"React Framework"}
      options={frameWorks}
    />
  );
};

export default FrameworkSelect;
