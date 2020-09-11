import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  & > a {
    width: 100%;
    height: 5.2rem;
    padding: 0 .8rem;
    display: flex;
    align-items: center;
    border-radius: ${props => props.theme.borderRadius};
    transition: .25s background-color ease;
    &:hover {
      transition-duration: 0s;
      background-color: ${props => props.theme.lightDarkGreyColor};
    }
  }
`;

const Icon = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  margin-right: 1rem;
`;

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavigationButton = ({ to, icon, text, onClick }) => {
  return (
    <Container>
      <Link to={to} onClick={onClick}>
        <Icon>
          {icon}
        </Icon>
        <Text>
          {text}
        </Text>
      </Link>
    </Container>
  );
};

NavigationButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default NavigationButton;
