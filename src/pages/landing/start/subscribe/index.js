import React from "react";
import styled from "styled-components/macro";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  Grid,
  Typography,
} from "@mui/material";

import Link from "../../../../components/common/link";

import { subscriptions } from "./mock";

const Card = styled(MuiCard)`
  position: relative;
`;
const CardHeader = styled(MuiCardHeader)`
  position: absolute;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.palette.primary.main
      : props.color === "secondary"
      ? props.theme.palette.secondary.main
      : "#FFF"};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;
  color: #fff;
  & .MuiCardHeader-content .MuiTypography-root {
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 1;
  }
  & .MuiCardHeader-action {
    margin: 0;
  }
`;
const CardContent = styled(MuiCardContent)`
  padding-top: 48px;
  border-radius: 10px;
  border: 2px solid
    ${(props) =>
      props.color === "primary"
        ? props.theme.palette.primary.main
        : props.color === "secondary"
        ? props.theme.palette.secondary.main
        : "#FFF"};
`;

function Subscribe({ jobDetails, handleBack, handleSubmit }) {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <Grid container direction="column" alignItems="center" spacing={4}>
              <Grid item xs={12}>
                <Box pl={4}>
                  <Typography variant="h3" color="common.black">
                    Subscribe and Start for Free Today!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ color: "#9D9D9D" }}>
                  Guaranteed Results! 100% Customer Satisfaction! Cancel Anytime
                  and Retain Ownership of All Materials!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={8}>
          {subscriptions.map((subscription) => (
            <Grid key={subscription.id} item xs={3}>
              <Card>
                {subscription.heading && (
                  <CardHeader
                    title={
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {subscription.heading}
                      </Typography>
                    }
                    color={subscription.color}
                  />
                )}
                <CardContent color={subscription.color}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={6}
                  >
                    <Grid item>
                      <Typography
                        variant="h6"
                        color="secondary"
                        sx={{ fontWeight: "bold" }}
                      >
                        {subscription.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={12}>
                          <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                              <Typography
                                variant="h1"
                                color="primary"
                                sx={{ fontWeight: "bold" }}
                              >
                                {subscription.price}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="h3"
                                color="secondary"
                                sx={{ fontWeight: "bold" }}
                              >
                                {subscription.unit}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h6"
                            sx={{ color: "#717171", fontStyle: "italic" }}
                          >
                            {subscription.period}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" spacing={1}>
                        {subscription.items.map((item) => (
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              color="secondary"
                              sx={{
                                color: subscription.itemColor,
                                fontWeight: "bold",
                              }}
                            >
                              {item}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs="10">
            <Typography
              sx={{ color: "#AFAFE8", fontSize: "7px", textAlign: "center" }}
            >
              Reocurring billing. Cancel anytime and retain all materials
              produced. Guaranteed results. Payment will be charged to your
              credit/debit card at confirmation of purchase. Your account will
              be charged for renewal within the 24 hours prior to the end of the
              current period. You can manage your subscription and switch off
              auto-renewal by accessing your Account Settings in the Dashboard
              after purchase. All personal data is handled under the terms and
              conditions of Carrot Agreement.
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Typography
                      variant="body2"
                      color="common.black"
                      sx={{ fontWeight: "bold" }}
                    >
                      Over budget? Consider removing some{" "}
                      <Link to="#">Features & Functions</Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" color="common.black">
                      Instant Access to the Carrot🥕 Patch
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Subscribe;
