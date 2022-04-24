import React from "react";
import styled from "styled-components/macro";
import { Grid, Typography } from "@mui/material";

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
function Loading() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <img src="static/img/carrot.png" alt="loading" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Title>Planting the Seed...</Title>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Text>
            We're putting a schedule together based on your project details. Sit
            tight.
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Loading;
