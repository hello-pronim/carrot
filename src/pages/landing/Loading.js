import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Typography } from "@mui/material";

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
function Loading({ image, title, description, children }) {
  return (
    <Grid container spacing={4}>
      {image && (
        <Grid xs={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <img src={image} alt="loading" />
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid xs={12}>
        <Grid container justifyContent="center">
          <Title>{title}</Title>
        </Grid>
      </Grid>
      {description && (
        <Grid xs={12}>
          <Grid container justifyContent="center">
            <Text>{description}</Text>
          </Grid>
        </Grid>
      )}
      <Grid xs={12}>
        <Grid container justifyContent="center">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Loading;
