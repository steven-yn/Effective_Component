import React, { PropsWithChildren, ReactElement, useState } from "react";
import {
  useDropdownContext,
  DropDownContext,
  DropDownDispatchers,
  useSetDropdownContext,
} from "../../Hooks/useDropdownContext";

const Menu = ({ children }: PropsWithChildren) => {
  const { isOpen } = useDropdownContext();

  console.log("menu");

  if (children) {
    return <>{isOpen && children}</>;
  }

  return <></>;
};

const Item = ({ children }: PropsWithChildren) => {
  const { onChange, setIsOpen } = useSetDropdownContext();
  console.log("item");

  if (children) {
    return (
      <div
        onClick={() => {
          onChange(children.toString());
          setIsOpen(false);
        }}
      >
        {children}
      </div>
    );
  }

  return <></>;
};

const Trigger = ({ as }: { as: ReactElement }) => {
  console.log("trigger");
  return as;
};

export type DropdownProps = {
  label: string;
  value: string;
};

export type DropdownDispatchers = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const Dropdown = ({
  children,
  label,
  value,
  onChange,
}: PropsWithChildren<DropdownProps & DropdownDispatchers>) => {
  const [isOpen, setIsOpen] = useState(false);

  const states = {
    label: label,
    value: value,
    isOpen: isOpen,
  };

  const dispatchers = {
    onChange: onChange,
    setIsOpen: setIsOpen,
  };

  return (
    <DropDownContext.Provider value={states}>
      <DropDownDispatchers.Provider value={dispatchers}>
        <label>{label}</label>
        {children}
      </DropDownDispatchers.Provider>
    </DropDownContext.Provider>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Item = Item;
Dropdown.Menu = Menu;

export default Dropdown;
