import React, { PropsWithChildren, ReactElement } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import dropDownState from "../../Atoms/ComponentAtoms/Dropdown/DropdownState";

const Dropdown = ({
  children,
  label,
}: PropsWithChildren<{
  label: string;
}>) => {
  console.log("dropdown");

  return (
    <>
      <label>{label}</label>
      {children}
    </>
  );
};

const Trigger = ({ as }: { as: ReactElement }) => {
  console.log("trigger");

  return as;
};

const Menu = ({ children }: PropsWithChildren) => {
  const { isOpen } = useRecoilValue(dropDownState);

  console.log("menu");

  if (children) {
    return <>{isOpen && children}</>;
  }

  return <></>;
};

const Item = ({ children }: PropsWithChildren) => {
  const setDropDown = useSetRecoilState(dropDownState);

  console.log("item");

  if (children) {
    return (
      <div
        onClick={() => {
          setDropDown((dropdown) => ({
            ...dropdown,
            isOpen: false,
            value: children.toString(),
          }));
        }}
      >
        {children}
      </div>
    );
  }

  return <></>;
};

Dropdown.Trigger = Trigger;
Dropdown.Item = Item;
Dropdown.Menu = Menu;

export default Dropdown;
