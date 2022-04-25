import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Box, Grid, Typography } from "@mui/material";

import SignInForm from "./Form";

import Logo from "../../../vendor/logo.png";

function SignIn() {
  const [submitted, setSubmitted] = useState(false);
  const handleSignIn = () => {
    setSubmitted(true);
  };

  return (
    <React.Fragment>
      <Helmet title="Sign In" />
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Grid container spacing={8}>
            {!submitted ? (
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography component="h2" variant="body1" align="center">
                      Sign in to your account to continue
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <SignInForm submit={handleSignIn} />
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SignIn;
