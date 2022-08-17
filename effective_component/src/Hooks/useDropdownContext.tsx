import React, { createContext } from "react";
import { DropdownProps } from "../Components/Dropdown/Dropdown";

type CtxProps = DropdownProps & {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDownContext = createContext<CtxProps>({
  label: "",
  value: "",
  onChange: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

const useDropdownContext = () => {
  const context = React.useContext(DropDownContext);
  return context;
};

export default useDropdownContext;
