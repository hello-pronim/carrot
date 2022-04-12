import React from "react";
import styled from "styled-components/macro";
import { Grid, TextField as MuiTextField, Typography } from "@mui/material";

import Button from "../../components/common/button";
import Link from "../../components/common/link";

const TextField = styled(MuiTextField)`
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;
`;

function Home() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h3">
                    Design a Native Mobile App
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    Subscribe and start your project today for{" "}
                    <Link to="/start">FREE</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <img alt="True Bill" src="/static/img/truebill.png" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h3" color="textSecondary">
                    What Can <Link to="#">Carrot</Link> Do For You?
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <TextField
                        placeholder="Enter a Job Title to Get Started"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button color="primary" variant="contained">
                        Go
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
