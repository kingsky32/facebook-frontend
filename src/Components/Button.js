import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  background: ${props => props.theme.blueColor};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.whiteColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 0 1.6rem;
  height: 4.8rem;
  font-weight: 600;
  &:disabled {
    background: ${props => props.theme.lightGreyColor};
    color: ${props => props.theme.lightDarkGreyColor};
    cursor: not-allowed;
  }
`;

const Text = styled.span``;

const Button = ({ className, onClick, text, disabled = false, icon }) => {
  return (
    <Container className={className} onClick={onClick} disabled={disabled}>
      {icon}
      {text &&
        <Text>
          {text}
        </Text>}
    </Container>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.object,
  disabled: PropTypes.bool
};

export default Button;
