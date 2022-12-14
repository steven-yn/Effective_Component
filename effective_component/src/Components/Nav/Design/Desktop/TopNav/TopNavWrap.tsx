import { PropsWithChildren } from "react";
import styled from "styled-components";

const TopNavContainer = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const TopNavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1280px;
  height: 60px;

  background-color: #fff;

  .TopNav__Search__Icon {
    width: 20px;
    height: 20px;
  }
`;

const TopNavWrap = (props: PropsWithChildren<{}>) => {
  return (
    <TopNavContainer>
      <TopNavBox {...props}>{props.children}</TopNavBox>
    </TopNavContainer>
  );
};

export default TopNavWrap;
