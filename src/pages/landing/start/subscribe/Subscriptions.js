import React from "react";
import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Link from "../../../../components/common/link";
import SubscriptionCard from "../../../../components/common/card/SubscriptionCard";

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
  boldFont: {
    fontWeight: "bold",
  },
});

const Subscriptions = ({ subscriptions, selectSubscription }) => {
  const classes = useStyles();

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
              <ButtonBase
                className={classes.fullWidth}
                onClick={() => selectSubscription(subscription)}
              >
                <SubscriptionCard subscription={subscription} />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={10}>
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
                      className={classes.boldFont}
                      variant="body2"
                      color="common.black"
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
};

export default Subscriptions;
