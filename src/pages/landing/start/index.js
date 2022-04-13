import React, { useState } from "react";
import styled from "styled-components/macro";

import {
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

import StepConnector from "../../../components/common/stepConnector";
import StepIconRoot from "../../../components/common/stepIcon";

const Spacer = styled.div(spacing);

const Wrapper = styled.div`
  width: 100%;
  ${spacing};
  text-align: center;
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

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
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
          </Grid>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}

export default Start;
