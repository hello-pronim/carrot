import React from "react";
import styled from "styled-components/macro";
import { Button as MuiButton, Card, CardContent, Grid } from "@mui/material";
import { spacing } from "@mui/system";

import ArchitectureOverview from "./Architecture";
import DatabaseOverview from "./Database";
import LogoDesignOverview from "./LogoDesign";
import MobileAppOverview from "./MobileApp";
import WebAppOverview from "./WebApp";
import WebsiteOverview from "./Website";

const Button = styled(MuiButton)`
  ${spacing};
  font-size: 18px;
  line-height: 21px;
`;

function Overview({ projectType, jobDetails, handleEdit, handleSubmit }) {
  const renderOverview = () => {
    return projectType === "website" ? (
      <WebsiteOverview projectType={projectType} jobDetails={jobDetails} />
    ) : projectType === "mobileApp" ? (
      <MobileAppOverview projectType={projectType} jobDetails={jobDetails} />
    ) : projectType === "logoDesign" ? (
      <LogoDesignOverview projectType={projectType} jobDetails={jobDetails} />
    ) : projectType === "webApp" ? (
      <WebAppOverview projectType={projectType} jobDetails={jobDetails} />
    ) : projectType === "database" ? (
      <DatabaseOverview projectType={projectType} jobDetails={jobDetails} />
    ) : projectType === "architecture" ? (
      <ArchitectureOverview projectType={projectType} jobDetails={jobDetails} />
    ) : (
      <></>
    );
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Card>
          <CardContent>{renderOverview()}</CardContent>
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
            <Button onClick={handleEdit} color="secondary" variant="outlined">
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Overview;
