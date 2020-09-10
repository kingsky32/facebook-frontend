import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightGreyColor};
  border-radius: 4rem;
  transition: .25s background-color ease;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightDarkGreyColor};
  }
`;

const NavigationInfo = styled.span`
  display: block;
  position: absolute;
  color: ${props => props.theme.bgColor};
  background-color: ${props => props.theme.blackColor};
  padding: .8rem 1rem;
  font-size: 1.2rem;
  border-radius: ${props => props.theme.borderRadius};
  opacity: 0;
  pointer-events: none;
  bottom: -3.5rem;
  transition: .25s opacity ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  &.show {
    opacity: .75;
  }
`;

const CircleButton = ({ icon, info }) => {
  const onMouseEnter = e => {
    e.target.querySelector("span") && e.target.querySelector("span").classList.add("show");
  };

  const onMouseLeave = e => {
    e.target.querySelector("span") && e.target.querySelector("span").classList.remove("show");
  };

  return (
    <Button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {icon}
      <NavigationInfo>
        {info}
      </NavigationInfo>
    </Button>
  );
};

export default withRouter(CircleButton);
