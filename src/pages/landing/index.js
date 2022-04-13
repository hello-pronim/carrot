import React from "react";
import styled from "styled-components/macro";
import { Grid, TextField, Typography } from "@mui/material";
import { spacing } from "@mui/system";

import Button from "../../components/common/button";
import Link from "../../components/common/link";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${spacing};
  display: flex;
  align-items: center;
`;

function Home() {
  return (
    <React.Fragment>
      <Wrapper>
        <Grid container>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography variant="h3" sx={{ color: "#000" }}>
                      Design a Native Mobile App
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="default">
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
                    <Typography variant="h3">
                      What Can <Link to="#">Carrot</Link> Do For You?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <TextField
                          placeholder="Enter a Job Title to Get Started"
                          variant="outlined"
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
      </Wrapper>
    </React.Fragment>
  );
}

export default Home;
