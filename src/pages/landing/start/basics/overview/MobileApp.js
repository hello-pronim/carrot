import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Link as MuiLink, Typography } from "@mui/material";

import { convertDateToMMMMDDYYYY } from "../../../../../utils/functions";
import {
  appCategories,
  completionStatus,
  platforms,
  projectTypes,
} from "../mock";

const ErrorText = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;
const Label = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
`;
const Link = styled(MuiLink)`
  color: #1673ff;
`;
const Text = styled(Typography)`
  color: #989898;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;
function MobileAppOverview({ projectType, jobDetails }) {
  const getAppCategory = () => {
    return (
      appCategories.find((item) => item.value === jobDetails.appCategory)
        ?.title || ""
    );
  };
  const getCompletionStatus = () => {
    return (
      completionStatus[projectType].find(
        (item) => item.value === jobDetails.completionStatus
      )?.title || ""
    );
  };
  const getPlatform = () => {
    return (
      platforms.find((item) => item.value === jobDetails.platform)?.title || ""
    );
  };
  const getProjectType = () => {
    return projectTypes.find((item) => item.value === projectType)?.title || "";
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Label>Project Type:</Label>
          </Grid>
          <Grid item xs={12}>
            <Box pl={4}>
              <Text>{getProjectType()}</Text>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {getCompletionStatus() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Completion Status:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getCompletionStatus()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getPlatform() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Platforms:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getPlatform()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {jobDetails.description !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Description:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{jobDetails.description}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {jobDetails.designSource !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Design Source:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Link
                  component="button"
                  onClick={() => window.open(jobDetails.designSource)}
                >
                  {jobDetails.designSource}
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getAppCategory() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Budget:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getAppCategory()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Label>Delivery Date:</Label>
          </Grid>
          <Grid item xs={12}>
            <Box pl={4}>
              <Text>
                {convertDateToMMMMDDYYYY(new Date(jobDetails.deliveryDate))}
              </Text>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Label>Special Requests:</Label>
          </Grid>
          <Grid item xs={12}>
            <Box pl={4}>
              {jobDetails.specialRequests !== "" ? (
                <Text>{jobDetails.specialRequests}</Text>
              ) : (
                <ErrorText>Not Filled Out!</ErrorText>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MobileAppOverview;
