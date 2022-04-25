import React from "react";
import { Helmet } from "react-helmet-async";

import { Box, Grid, Typography } from "@mui/material";

import SignInForm from "./Form";

import Logo from "../../../vendor/logo.png";

function SignIn() {
  return (
    <React.Fragment>
      <Helmet title="Sign In" />
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Box component="img" alt="logo" src={Logo} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography component="h2" variant="body1" align="center">
                    Sign in to your account to continue
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <SignInForm />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SignIn;
