import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  background: ${props => props.theme.blueColor};
  border-radius: ${props => props.theme.borderRadius};
  color: #fff;
  font-size: 2rem;
  line-height: 4.8rem;
  padding: 0 1.6rem;
  font-weight: 600;
  &:disabled {
    background: ${props => props.theme.lightGreyColor};
    color: ${props => props.theme.lightDarkGreyColor};
    cursor: not-allowed;
  }
`;

const Button = ({ className, onClick, text, disabled = false }) => {
  return (
    <Container className={className} onClick={onClick} disabled={disabled}>
      {text}
    </Container>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;
