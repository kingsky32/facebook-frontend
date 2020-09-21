import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3.6rem;
  overflow: hidden;
  background-color: ${props => props.theme.lightDarkGreyColor};
  margin-right: 1.2rem;
`;

const Container = styled.div`
  &.active {
    a {
      background-color: ${props => props.theme.blueColor}25;
      &:hover {
        background-color: ${props => props.theme.blueColor}25;
      }
    }
    ${IconContainer} {
      background-color: ${props => props.theme.blueColor};
      i {
        filter: invert(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    transition: .25s background-color ease;
    padding: .8rem;
    &:hover {
      transition-duration: 0s;
      background-color: ${props => props.theme.lightGreyColor};
    }
  }
`;

const FriendsButtonText = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
`;

const FriendsButton = ({ to, icon, text, match: { params: { id: paramId } } }) => {
  return (
    <Container className={paramId === to.split("/")[2] && "active"}>
      <Link to={to}>
        <IconContainer>
          {icon}
        </IconContainer>
        <FriendsButtonText>
          {text}
        </FriendsButtonText>
      </Link>
    </Container>
  );
};

export default FriendsButton;
