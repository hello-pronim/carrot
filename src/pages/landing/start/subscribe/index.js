import React from "react";
import styled from "styled-components/macro";
import {
  Box,
  Button as MuiButton,
  Card,
  CardContent,
  CardHeader as MuiCardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

const Button = styled(MuiButton)`
  ${spacing};
  font-size: 18px;
  line-height: 21px;
`;
const CardHeader = styled(MuiCardHeader)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  color: #fff;
  & .MuiTypography-root {
    color: #fff;
    font-weight: bold;
  }
  & .MuiCardHeader-action {
    margin: 0;
  }
`;

function Subscribe({ jobDetails, handleBack, handleSubmit }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={4}>
          <Typography variant="h3" color="primary">
            Here's the Game Plan
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={<Typography>Task</Typography>}
            action={<Typography>Delivery</Typography>}
          />
          <CardContent>
            <Grid container spacing={8}></Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Grid item>
            <Button onClick={handleBack} color="secondary" variant="outlined">
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Accept
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Subscribe;
