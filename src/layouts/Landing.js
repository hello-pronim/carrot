import React from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";

import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { THEMES } from "../constants";
import createTheme from "../theme";

import GlobalStyle from "../components/GlobalStyle";

import AppBar from "../pages/landing/AppBar";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url(static/img/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  height: 100vh;
`;

const ScrollableContent = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 64px);
`;

const Landing = ({ children }) => {
  return (
    <MuiThemeProvider theme={createTheme(THEMES.DEFAULT)}>
      <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
        <Root>
          <CssBaseline />
          <GlobalStyle />
          <AppContent>
            <AppBar />
            <Container>
              <ScrollableContent>
                {children}
                <Outlet />
              </ScrollableContent>
            </Container>
          </AppContent>
        </Root>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Landing;
