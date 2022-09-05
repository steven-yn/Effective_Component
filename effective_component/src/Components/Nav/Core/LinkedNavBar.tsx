import React, { PropsWithChildren } from "react";
import setChild from "../../../lib/Headless_Patterns/setChild";

const LinkedNavBar = ({ children }: PropsWithChildren<any>) => {
  return children;
};

type WrapProps = {
  as: JSX.Element;
};

const Wrap = ({ children, as }: PropsWithChildren<WrapProps>) => {
  const InputWrap = setChild({ as });

  return <InputWrap>{children}</InputWrap>;
};

type LeftSideProps = {
  as?: JSX.Element;
};

const leftSide = ({ children, as }: PropsWithChildren<LeftSideProps>) => {
  if (!as) return <></>;

  const InputLeftSide = setChild({ as, to: "/" });

  return <InputLeftSide>{children}</InputLeftSide>;
};

type MenuProps = {
  as: JSX.Element;
};

const Menu = ({ as, children }: PropsWithChildren<MenuProps>) => {
  const InputMenu = setChild({ as });

  return <InputMenu>{children}</InputMenu>;
};

type ButtonProps = {
  as: JSX.Element;
  value: string;
  to: string;
  currentPath?: string;
};

const Button = ({ as, value, to, currentPath }: ButtonProps) => {
  const embedProps = { isCurrentPage: currentPath === to };
  const InputButton = setChild({ as, to, embedProps });

  return <InputButton>{value}</InputButton>;
};

type RightSideProps = {
  as?: JSX.Element;
  value?: string | string[];
  to?: string | string[];
  currentPath?: string;
};

const rightSide = ({
  as,
  value,
  to,
  currentPath,
}: PropsWithChildren<RightSideProps>) => {
  if (!as) return <></>;

  if (to === typeof "object") {
    return <></>;
  }

  if (to === typeof "string") {
    const embedProps = { isCurrentPage: currentPath === to };
    const InputRightSide = setChild({ as, to, embedProps });

    return <InputRightSide>{value}</InputRightSide>;
  }

  const InputRightSide = setChild({ as, to: "/search" });

  return <InputRightSide />;
};

LinkedNavBar.Wrap = Wrap;
LinkedNavBar.leftSide = leftSide;
LinkedNavBar.Menu = Menu;
LinkedNavBar.Button = Button;
LinkedNavBar.rightSide = rightSide;

export default LinkedNavBar;
