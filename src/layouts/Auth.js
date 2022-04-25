import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import { Container, CssBaseline } from "@mui/material";

import GlobalStyle from "../components/GlobalStyle";

import AppBar from "../pages/landing/AppBar";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  background-image: url(static/img/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
`;

const AuthContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ScrollableContent = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 64px);
  padding-top: 108px;
  padding-bottom: 108px;
`;

const Auth = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <AuthContent>
        <AppBar />
        <Container>
          <ScrollableContent>
            {children}
            <Outlet />
          </ScrollableContent>
        </Container>
      </AuthContent>
    </Root>
  );
};

export default Auth;
