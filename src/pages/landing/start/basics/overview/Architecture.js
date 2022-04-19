import React from "react";
import styled from "styled-components/macro";
import { Box, Grid, Typography } from "@mui/material";

import { convertDateToMMMMDDYYYY } from "../../../../../utils/functions";
import {
  budgets,
  buildingSizes,
  constructionTypes,
  engineerApprovalAndSignOff,
  projectTypes,
  services,
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
function ArchitectureOverview({ projectType, jobDetails }) {
  const getBudget = () => {
    return (
      budgets.find((item) => item.value === jobDetails.budget)?.title || ""
    );
  };
  const getBuildingSize = () => {
    return (
      buildingSizes.find((item) => item.value === jobDetails.buildingSize)
        ?.title || ""
    );
  };
  const getConstructionType = () => {
    const constructionType = constructionTypes.find(
      (item) => item.value === jobDetails.constructionType
    );

    return constructionType?.title + constructionType.description || "";
  };
  const getIsEngineerApprovalRequired = () => {
    return (
      engineerApprovalAndSignOff.find(
        (item) => item.value === jobDetails.isEngineerApprovalRequired
      )?.title || ""
    );
  };
  const getProjectType = () => {
    return projectTypes.find((item) => item.value === projectType)?.title || "";
  };
  const getService = () => {
    return (
      services.find((item) => item.value === jobDetails.service)?.title || ""
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
      {getConstructionType() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Type of Construction:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getConstructionType()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getBuildingSize() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Size of Building:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getBuildingSize()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getService() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Services Required:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getService()}</Text>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
      {getIsEngineerApprovalRequired() !== "" && (
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Label>Engineer Approval/Sign Off:</Label>
            </Grid>
            <Grid item xs={12}>
              <Box pl={4}>
                <Text>{getIsEngineerApprovalRequired()}</Text>
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

export default ArchitectureOverview;
