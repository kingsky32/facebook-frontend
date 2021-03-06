import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import { Helmet } from "react-helmet";
import Favicon from "../Assets/Images/favicon.ico";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const RootWrapper = styled.section`
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
        <title>Prismabook</title>
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
