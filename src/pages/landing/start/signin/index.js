import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import SignInForm from "../../../auth/signin/Form";
import VerifyAccount from "../../../auth/signin/VerifyAccount";

const Login = () => {
  const [sentCode, setSentCode] = useState(false);

  const handleSubmit = () => {
    setSentCode(true);
  };
  const handleVerificationCodeSubmit = (verificationCode) => {
    console.log(verificationCode);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        {sentCode ? (
          <VerifyAccount submit={handleVerificationCodeSubmit} />
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box pl={8}>
                <Typography variant="h3" color="primary">
                  Login
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <SignInForm submit={handleSubmit} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
