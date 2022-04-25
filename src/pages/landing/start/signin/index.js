import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import SignInForm from "../../../auth/signin/form";

const Login = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={8}>
              <Typography variant="h3" color="primary">
                Login
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <SignInForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
