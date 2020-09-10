import React from "react";
import Input from "./Input";
import styled from "styled-components";
import PropTypes from "prop-types";

const EInput = styled(Input)`
  flex: 1;
  height: 4rem;
  padding: 1rem;
  border-radius: 4rem;
  background-color: ${props => props.theme.lightGreyColor};
  border: 0;
  font-size: 1.5rem;
  &:focus {
    box-shadow: 0 0 0 0;
  }
`;

const InputRound = ({
  placeholder,
  required = false,
  value = "",
  onChange,
  className,
  type = "text",
  onClick
}) =>
  <EInput
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    onClick={onClick}
  />;

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
  onClick: PropTypes.func
};

export default InputRound;
