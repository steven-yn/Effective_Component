import React, { PropsWithChildren, ReactElement, useState } from "react";
import useDropdownContext, {
  DropDownContext,
} from "../../Hooks/useDropdownContext";

const Menu = ({ children }: PropsWithChildren) => {
  const { isOpen } = useDropdownContext();

  if (children) {
    return <>{isOpen && children}</>;
  }

  return <></>;
};

const Item = ({ children }: PropsWithChildren) => {
  const { onChange, setIsOpen } = useDropdownContext();

  if (children) {
    return (
      <option
        value={children.toString()}
        onClick={() => {
          onChange(children.toString());
          setIsOpen(false);
        }}
      >
        {children}
      </option>
    );
  }

  return <></>;
};

const Trigger = ({ as }: { as: ReactElement }) => {
  return as;
};

export type DropdownProps = {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const Dropdown = ({
  children,
  label,
  value,
  onChange,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const values = {
    label: label,
    value: value,
    onChange: onChange,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <DropDownContext.Provider value={values}>
      <label>{label}</label>
      {children}
    </DropDownContext.Provider>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Item = Item;
Dropdown.Menu = Menu;

export default Dropdown;
