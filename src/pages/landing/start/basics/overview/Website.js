import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Typography } from "@mui/material";

import { convertDateToMMMMDDYYYY } from "../../../../../utils/functions";
import {
  appCategories,
  budgets,
  buildingSizes,
  completionStatus,
  constructionTypes,
  features,
  engineerApprovalAndSignOff,
  platforms,
  projectTypes,
  quantities,
  useLicensing,
  services,
  technologies,
} from "../mock";

const Label = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
`;
const Text = styled(Typography)`
  color: #989898;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;
const ErrorText = styled(Text)`
  color: ${(props) => props.theme.palette.primary.main};
`;

function WebsiteOverview({ projectType, jobDetails }) {
  const getProjectType = () => {
    return projectTypes.find((item) => item.value === projectType)?.title || "";
  };
  const getCompletionStatus = () => {
    return (
      completionStatus[projectType].find(
        (item) => item.value === jobDetails.completionStatus
      )?.title || ""
    );
  };
  const getBudget = () => {
    return (
      budgets.find((item) => item.value === jobDetails.budget)?.title || ""
    );
  };
  const getPlatform = () => {
    return (
      platforms.find((item) => item.value === jobDetails.platform)?.title || ""
    );
  };
  const getFeatures = () => {
    return features[projectType]
      .filter((item) => jobDetails.features.includes(item.value))
      .map((item) => item.title)
      .join(", ");
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
      {getPlatform() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Platform Assistance:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getPlatform()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
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
      {getBudget() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Budget:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getBudget()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getFeatures() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Functions & Features:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getFeatures()}</Text>
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

export default WebsiteOverview;
