import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.blackColor};
    font-size: 10px;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
  button {
    background: 0 0;
    border: 0;
    cursor: pointer;
  }
`;
