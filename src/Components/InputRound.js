import React from "react";
import Input from "./Input";
import styled from "styled-components";
import PropTypes from "prop-types";

const EInput = styled(Input)`
  flex: 1;
  height: ${props => props.height};
  padding: 1rem;
  border-radius: ${props => props.height};;
  background-color: ${props => props.theme.lightGreyColor};
  border: 0;
  font-size: 1.5rem;
  &:focus {
    box-shadow: 0 0 0 0;
    &::placeholder {
      color: ${props => props.theme.greyColor}75;
    }
  }
  &::placeholder {
    color: ${props => props.theme.greyColor}90;
  }
`;

const InputRound = React.forwardRef(
  (
    {
      placeholder,
      required = false,
      value = "",
      onChange,
      height = "4rem",
      className,
      type = "text",
      onClick
    },
    ref
  ) =>
    <EInput
      ref={ref}
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      type={type}
      onClick={onClick}
      height={height}
    />
);

InputRound.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  classname: PropTypes.string,
  type: PropTypes.oneOf([
    "checkbox",
    "button",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ]),
  onClick: PropTypes.func,
  height: PropTypes.string
};

export default InputRound;
