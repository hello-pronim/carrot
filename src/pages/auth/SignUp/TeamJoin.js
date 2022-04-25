import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import SignUpForm from "./Form";

const useStyles = makeStyles((theme) => ({
  boldFont: {
    fontWeight: "bold",
  },
  fullWidth: {
    width: "100%",
  },
  primaryColor: {
    color: theme.palette.primary.main,
  },
}));

function TeamJoin() {
  const classes = useStyles();
  const opportunities = [
    "ZERO Job Interviews",
    "No More Competing",
    "Say Bye to Proposals",
    "Make Your Own Hours",
    "Weekly, Instant Pay",
  ];

  return (
    <React.Fragment>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" color="common.black">
                Join the Team
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.boldFont}
                variant="body2"
                align="center"
                color="common.black"
              >
                Searching for the best freelancer’s opportunity on the web? You
                found it.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={4}>
              <Grid container spacing={4}>
                {opportunities.map((opp, index) => (
                  <Grid key={index} item xs={12}>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <img
                          alt="tiny carrot"
                          src="/static/img/carrot_thumb_tiny.png"
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" color="primary">
                          {opp}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.boldFont}
            variant="body2"
            align="center"
            color="common.black"
          >
            Are you a talented developer or designer with 10+ years of
            experience and want to join? It's simple, just fill out the form and
            don't forget to provide your resume and any portfolio links and
            we'll get in touch within 2 weeks.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SignUpForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TeamJoin;
