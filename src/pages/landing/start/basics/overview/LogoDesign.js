import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Typography } from "@mui/material";

import { convertDateToMMMMDDYYYY } from "../../../../../utils/functions";
import {
  budgets,
  completionStatus,
  projectTypes,
  quantities,
  useLicensing,
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
function LogoDesignOverview({ projectType, jobDetails }) {
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
  const getProjectType = () => {
    return projectTypes.find((item) => item.value === projectType)?.title || "";
  };
  const getQuantity = () => {
    return (
      quantities.find((item) => item.value === jobDetails.quantity)?.title || ""
    );
  };
  const getUseLicensing = () => {
    return (
      useLicensing.find((item) => item.value === jobDetails.useLicensing)
        ?.title || ""
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
      {getUseLicensing() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Use & useLicensing:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getUseLicensing()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getQuantity() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Quantity:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getQuantity()}</Text>
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

export default LogoDesignOverview;
