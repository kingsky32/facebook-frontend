import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import Favicon from "../Assets/favicon.ico";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const RootWrapper = styled.section`
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;
`;

export default () => {
  const { data: { isLoggedIn } } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
        />
        <title>Facebook</title>
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <RootWrapper>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Routes isLoggedIn={isLoggedIn} />
          </Wrapper>
        </Router>
        <ToastContainer
          style={{ fontSize: "1.4rem", lineHeight: "1.7rem" }}
          position={toast.POSITION.BOTTOM_LEFT}
        />
      </RootWrapper>
    </ThemeProvider>
  );
};
