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

import { convertDateToMMDDYY } from "../../../../utils/functions";
import { gamePlans } from "./mock";

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
const DotGroup = styled.div`
  border-bottom: 2px dotted ${(props) => props.theme.palette.secondary.main};
`;

function Plan({ jobDetails, handleBack, handleSubmit }) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
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
                <Grid container spacing={8}>
                  {gamePlans[jobDetails.projectType].map((plan) => (
                    <Grid key={plan.id} item xs={12}>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <Box pl={4}>
                            <Typography variant="h3" color="primary">
                              {plan.title}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            {plan.children.map((child) => (
                              <Grid key={child.id} item xs={12}>
                                <Grid
                                  container
                                  alignItems="baseline"
                                  justifyContent="space-between"
                                  spacing={1}
                                >
                                  <Grid item>
                                    <Typography variant="h6" color="secondary">
                                      {child.title}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs>
                                    <DotGroup />
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="h6"
                                      color="secondary"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                      {convertDateToMMDDYY(
                                        new Date(child.date)
                                      )}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
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
                <Button
                  onClick={handleBack}
                  color="secondary"
                  variant="outlined"
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                >
                  Accept
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Plan;
