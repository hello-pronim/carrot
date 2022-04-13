import React, { useState } from "react";
import styled from "styled-components/macro";

import {
  Box,
  Grid,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { spacing } from "@mui/system";

import Button from "../../../components/common/button";
import StepConnector from "../../../components/common/stepConnector";
import StepIconRoot from "../../../components/common/stepIcon";

import { projectTypes } from "./mock";

const Spacer = styled.div(spacing);

const StepperWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const StepperContentWrapper = styled.div`
  width: 100%;
  padding-top: 108px;
  height: calc(100vh - 64px);
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const steps = [
  { label: "Step 1", step: 1, icon: <SettingsIcon /> },
  { label: "Step 2", step: 2, icon: <SettingsIcon /> },
  { label: "Step 3", step: 3, icon: <SettingsIcon /> },
];

function StepIcon(props) {
  console.log(props);
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className} />
  );
}

function Start() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };
  const isProjectTypeSelected = (projectTypeId) => {
    return (
      selectedProjectTypes.filter((typeItem) => typeItem.id === projectTypeId)
        .length > 0
    );
  };
  const handleProjectTypeSelect = (projectTypeId) => {
    const projectType = projectTypes.find(
      (typeItem) => typeItem.id === projectTypeId
    );

    setSelectedProjectTypes(
      isProjectTypeSelected(projectTypeId)
        ? selectedProjectTypes.filter(
            (typeItem) => typeItem.id === projectTypeId
          )
        : [...selectedProjectTypes, projectType]
    );
  };

  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Wrapper>
            <StepperWrapper>
              <Grid container>
                <Grid item xs={12}>
                  <Stepper
                    alternativeLabel
                    activeStep={activeStep}
                    connector={<StepConnector />}
                  >
                    {steps.map((step) => (
                      <Step key={step.label}>
                        <StepButton
                          color="inherit"
                          onClick={() => handleStepClick(step.id)}
                        >
                          <StepLabel StepIconComponent={StepIcon}>
                            {step.label}
                          </StepLabel>
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>
                <Spacer mb={8} />
              </Grid>
            </StepperWrapper>
            <StepperContentWrapper>
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Box pl={4}>
                        <Typography variant="h3">Project Type</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={4}>
                        {projectTypes.map((typeItem) => (
                          <Grid key={typeItem.id} item xs={4}>
                            <Button
                              onClick={() =>
                                handleProjectTypeSelect(typeItem.id)
                              }
                              color={
                                isProjectTypeSelected(typeItem.id)
                                  ? "primary"
                                  : "secondary"
                              }
                              variant="contained"
                              fullWidth
                            >
                              {typeItem.type}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </StepperContentWrapper>
          </Wrapper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Start;
