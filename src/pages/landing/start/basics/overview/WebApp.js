import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Typography } from "@mui/material";

import { convertDateToMMMMDDYYYY } from "../../../../../utils/functions";
import {
  budgets,
  completionStatus,
  features,
  projectTypes,
  technologies,
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
const Text = styled(Typography)`
  color: #989898;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;
function WebAppOverview({ projectType, jobDetails }) {
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
  const getFeatures = () => {
    return features[projectType]
      .filter((item) => jobDetails.features.includes(item.value))
      .map((item) => item.title)
      .join(", ");
  };
  const getProjectType = () => {
    return projectTypes.find((item) => item.value === projectType)?.title || "";
  };
  const getTechnology = () => {
    return (
      technologies[projectType].find(
        (item) => item.value === jobDetails.technology
      )?.title || ""
    );
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
      {getTechnology() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Technology:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getTechnology()}</Text>
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

export default WebAppOverview;
