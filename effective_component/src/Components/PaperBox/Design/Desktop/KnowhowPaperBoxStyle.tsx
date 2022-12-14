import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const KnowhowPaperWrapBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  transition: all 0.4s ease-in-out;

  width: 336px;
  height: 336px;

  padding: 64px 36px 34px 30px;

  background-color: aliceblue;
  border-radius: 10px;

  color: #000 !important;

  &:hover {
    width: 375px;
    height: 375px;
  }
`;

export const KnowhowPaperWrap = (props: PropsWithChildren<{}>) => {
  return (
    <KnowhowPaperWrapBox className="QALinked__Article__Wrap" {...props}>
      {props.children}
    </KnowhowPaperWrapBox>
  );
};

const KnowhowPaperTopBox = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

export const KnowhowPaperTop = ({ children }: PropsWithChildren<{}>) => {
  return (
    <KnowhowPaperTopBox className="QALinked__Article__Top">
      {children}
    </KnowhowPaperTopBox>
  );
};

const KnowhowPaperMainBox = styled.p`
  height: 100%;

  margin-top: 24px;

  font-size: 20px;
  font-weight: 500;
`;

export const KnowhowPaperMain = ({ children }: PropsWithChildren<{}>) => {
  return <KnowhowPaperMainBox>{children}</KnowhowPaperMainBox>;
};

const UserProfileTagBox = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export const UserProfileTag = ({ children }: PropsWithChildren<{}>) => {
  return <UserProfileTagBox>{children}</UserProfileTagBox>;
};
