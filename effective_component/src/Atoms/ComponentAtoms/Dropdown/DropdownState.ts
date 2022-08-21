import { atom } from "recoil";

export type DropDownStateType = {
  label: string;
  value: string;
  isOpen: boolean;
};

const dropDownState = atom<{
  label: string;
  value: string;
  isOpen: boolean;
}>({
  key: "dropDownState",
  default: {
    label: "",
    value: "",
    isOpen: false,
  },
});

export default dropDownState;
