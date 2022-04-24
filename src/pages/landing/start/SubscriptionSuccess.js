import React from "react";
import styled from "styled-components/macro";
import { Button, Grid, Typography } from "@mui/material";

const Title = styled(Typography)`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
`;
const Text = styled(Typography)`
  color: #434343;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;
const SubscriptionSuccess = ({ submit }) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={12}>
      <Grid item>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <img src="static/img/carrot.png" alt="success" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Title>Subscription Successful</Title>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Text>
                We have already began analyzing your project guidelines.
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button onClick={submit} variant="contained" color="primary">
          LOGIN TO DASHBOARD
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={submit} variant="outlined" color="secondary">
          Maybe Later
        </Button>
      </Grid>
    </Grid>
  );
};

export default SubscriptionSuccess;
