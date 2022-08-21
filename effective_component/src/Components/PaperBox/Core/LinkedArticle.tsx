import React, { PropsWithChildren } from "react";
import setChild from "../../../lib/Headless_Patterns/setChild";

const LinkedArticle = ({ children }: PropsWithChildren<any>) => {
  return children;
};

type WrapProps = {
  as: JSX.Element;
  to: string;
};

const Wrap = ({ children, as, to }: PropsWithChildren<WrapProps>) => {
  const InputWrap = setChild({ as, to });

  return <InputWrap href={to}>{children}</InputWrap>;
};

type TopProps = {
  as: JSX.Element;
  value: string;
};

const Top = ({ as, value }: TopProps) => {
  const InputTop = setChild({ as });

  return <InputTop>{value}</InputTop>;
};

type MainProps = {
  as: JSX.Element;
  value: string;
};

const Main = ({ as, value }: PropsWithChildren<MainProps>) => {
  const InputMain = setChild({ as });

  return <InputMain>{value}</InputMain>;
};

type PaperBottom = {
  as: JSX.Element;
  value: string;
};

const Bottom = ({ as, value }: PropsWithChildren<PaperBottom>) => {
  const InputBottom = setChild({ as });

  return <InputBottom>{value}</InputBottom>;
};

LinkedArticle.Wrap = Wrap;
LinkedArticle.Top = Top;
LinkedArticle.Main = Main;
LinkedArticle.Bottom = Bottom;

export default LinkedArticle;
