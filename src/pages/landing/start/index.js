import React, { useState } from "react";
import styled from "styled-components/macro";

import { Grid, Step, StepButton, StepLabel, Stepper } from "@mui/material";
import { spacing } from "@mui/system";

import RadioButton from "../../../components/common/radioButton";
import StepConnector from "../../../components/common/stepConnector";
import StepIconRoot from "../../../components/common/stepIcon";

import Website from "./website";
import MobileApp from "./mobileApp";

import { projectTypeData } from "./mock";

const Spacer = styled.div(spacing);

const StepperWrapper = styled.div`
  position: absolute;
  top: -108px;
  width: 100%;
`;

const StepperContentWrapper = styled.div`
  width: 100%;
  margin-top: 108px;
  padding-bottom: 108px;
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
    console.log(selectedProjectType);
    return selectedProjectType === "website" ? (
      <Website />
    ) : selectedProjectType === "mobile_app" ? (
      <MobileApp />
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
                    data={projectTypeData}
                    selected={selectedProjectType}
                    setSelected={setSelectedProjectType}
                    variant="contained"
                  />
                </Grid>
                <Grid item xs={12}>
                  {renderProjectDetail()}
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
