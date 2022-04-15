import * as React from "react";
import styled from "styled-components/macro";
import { spacing } from "@mui/system";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button as MuiButton,
  Container,
  Grid,
  IconButton as MuiIconButton,
  Toolbar,
} from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Logo from "../../vendor/logo.png";

const Button = styled(MuiButton)(spacing);

const IconButton = styled(MuiIconButton)`
  svg {
    width: 20px;
    height: 20px;
    fill: #c5c6ee;
  }
`;

const AppBarComponent = () => (
  <React.Fragment>
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <Box component="img" alt="logo" src={Logo} />
            </Grid>
            <Grid item xs />
            <Grid item>
              <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                <IconButton
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="https://facebook.com"
                  target="_blank"
                >
                  <FaFacebook />
                </IconButton>
                <IconButton
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="https://twitter.com"
                  target="_blank"
                >
                  <FaTwitter />
                </IconButton>
                <IconButton
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="https://linkedin.com"
                  target="_blank"
                >
                  <FaLinkedin />
                </IconButton>
                <IconButton
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="https://instagram.com"
                  target="_blank"
                >
                  <FaInstagram />
                </IconButton>
                <IconButton
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="https://youtube.com"
                  target="_blank"
                >
                  <FaYoutube />
                </IconButton>
                <IconButton
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="https://pinterest.com"
                  target="_blank"
                >
                  <FaPinterest />
                </IconButton>
              </Box>
              <Button
                ml={2}
                color="primary"
                variant="contained"
                href="/auth/sign-in"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default AppBarComponent;
