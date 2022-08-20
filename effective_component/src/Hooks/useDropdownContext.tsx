import React, { createContext } from "react";
import {
  DropdownDispatchers,
  DropdownProps,
} from "../Components/Dropdown/Dropdown";

type CtxProps = DropdownProps & {
  isOpen: boolean;
};

type DispProps = DropdownDispatchers & {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDownContext = createContext<CtxProps>({
  label: "",
  value: "",
  isOpen: false,
});

export const DropDownDispatchers = createContext<DispProps>({
  onChange: () => {},
  setIsOpen: () => {},
});

export const useDropdownContext = () => {
  const context = React.useContext(DropDownContext);
  return context;
};

export const useSetDropdownContext = () => {
  const Dispatcher = React.useContext(DropDownDispatchers);
  return Dispatcher;
};
