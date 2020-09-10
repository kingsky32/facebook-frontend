import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

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

const Navigator = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 13rem;
  min-width: 5rem;
  position: relative;
  padding: .4rem;
  &.active {
    a {
      fill: ${props => props.theme.blueColor};
    }
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: .3rem;
      position: absolute;
      bottom: 0;
      background-color: ${props => props.theme.blueColor};
    }
  }
  &:not(.active) {
    a:hover {
      transition-duration: 0s;
      background-color: ${props => props.theme.lightGreyColor};
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.borderRadius};
    transition: .25s background-color ease;
    fill: ${props => props.theme.greyColor};
  }
`;

const HeaderNavigatorButton = ({ history, icon, to, info }) => {
  const onMouseEnter = e => {
    e.target.querySelector("span") && e.target.querySelector("span").classList.add("show");
  };

  const onMouseLeave = e => {
    e.target.querySelector("span") && e.target.querySelector("span").classList.remove("show");
  };

  return (
    <Navigator className={history.location.pathname === to && "active"}>
      <Link to={to} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {icon}
        <NavigationInfo>
          {info}
        </NavigationInfo>
      </Link>
    </Navigator>
  );
};

export default withRouter(HeaderNavigatorButton);
