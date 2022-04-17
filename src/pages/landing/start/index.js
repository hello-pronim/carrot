import React, { useState } from "react";
import styled from "styled-components/macro";

import {
  Button as MuiButton,
  Grid,
  Step,
  StepButton,
  StepLabel,
  Stepper,
} from "@mui/material";
import { spacing } from "@mui/system";

import RadioButton from "../../../components/common/radioButton";
import StepConnector from "../../../components/common/stepConnector";
import StepIconRoot from "../../../components/common/stepIcon";

import Architecture from "./architecture";
import Database from "./database";
import LogoDesign from "./logoDesign";
import MobileApp from "./mobileApp";
import WebApp from "./webApp";
import Website from "./website";

import { projectTypes } from "./mock";

const Button = styled(MuiButton)`
  ${spacing};
  font-size: 18px;
  line-height: 21px;
`;
const Spacer = styled.div(spacing);
const StepperWrapper = styled.div`
  position: absolute;
  top: -108px;
  width: 100%;
`;
const StepperContentWrapper = styled.div`
  width: 100%;
  margin-top: 108px;
  padding-bottom: 280px;
  height: calc(100vh - 172px);
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const steps = [
  { label: "Basics", step: 1 },
  { label: "Plan", step: 2 },
  { label: "Subscribe", step: 3 },
  { label: "Login", step: 4 },
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
  const [selectedProjectType, setSelectedProjectType] = useState("website");

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const renderProjectDetail = () => {
    return selectedProjectType === "website" ? (
      <Website />
    ) : selectedProjectType === "mobileApp" ? (
      <MobileApp />
    ) : selectedProjectType === "logoDesign" ? (
      <LogoDesign />
    ) : selectedProjectType === "webApp" ? (
      <WebApp />
    ) : selectedProjectType === "database" ? (
      <Database />
    ) : selectedProjectType === "architecture" ? (
      <Architecture />
    ) : (
      <></>
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
                  <RadioButton
                    label="Project Type"
                    data={projectTypes}
                    selected={selectedProjectType}
                    setSelected={setSelectedProjectType}
                    variant="contained"
                  />
                </Grid>
                <Grid item xs={12}>
                  {renderProjectDetail()}
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        color="secondary"
                        variant="outlined"
                        disabled={activeStep === 1}
                      >
                        Clear
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button color="primary" variant="contained">
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StepperContentWrapper>
          </Wrapper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Start;
