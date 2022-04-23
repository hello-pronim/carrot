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
function Loading({ data, children }) {
  const { image, title, description } = data;

  return (
    <Grid container spacing={4}>
      {image && (
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <img src={image} alt="loading" />
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Title>{title}</Title>
        </Grid>
      </Grid>
      {description && (
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Text>{description}</Text>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

export default Loading;
