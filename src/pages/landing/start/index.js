import React, { useState } from "react";
import styled from "styled-components/macro";

import { Grid, Step, StepButton, StepLabel, Stepper } from "@mui/material";
import { spacing } from "@mui/system";

import StepConnector from "../../../components/common/stepConnector";
import StepIconRoot from "../../../components/common/stepIcon";

import Basics from "./basics";
import Loading from "../Loading";
import Plan from "./plan";
import Subscribe from "./subscribe";

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 108px;
  padding: 16px 16px 180px;
  height: calc(100vh - 172px);
  overflow-y: scroll;
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
  padding: 16px 16px 280px;
  height: calc(100vh - 172px);
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const steps = [
  { label: "Basics", step: 0 },
  { label: "Plan", step: 1 },
  { label: "Subscribe", step: 2 },
  { label: "Login", step: 3 },
];

function StepIcon(props) {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className} />
  );
}

function Start() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingProps, setLoadingProps] = useState({
    image: "",
    title: "",
    description: "",
  });
  const [jobDetails, setJobDetails] = useState({});

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };
  const handleBasicSubmit = (details) => {
    setJobDetails(details);
    if (!isLastStep(activeStep + 1)) setActiveStep(activeStep + 1);
    setLoadingProps({
      image: "static/img/carrot.png",
      title: "Planting the Seed...",
      description:
        "We're putting a schedule together based on your project details. Sit tight.",
    });
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  };
  const handlePlanSubmit = () => {
    if (!isLastStep(activeStep + 1)) setActiveStep(activeStep + 1);
  };
  const isFirstStep = (step) => {
    return step === steps[0].step;
  };
  const isLastStep = (step) => {
    return step === steps[steps.length - 1].step;
  };

  const renderStepContent = () => {
    return activeStep === 0 ? (
      <Basics handleSubmit={handleBasicSubmit} />
    ) : activeStep === 1 ? (
      <Plan
        jobDetails={jobDetails}
        handleBack={handleBack}
        handleSubmit={handlePlanSubmit}
      ></Plan>
    ) : activeStep === 2 ? (
      <Subscribe
        jobDetails={jobDetails}
        handleBack={handleBack}
        handleSubmit={handlePlanSubmit}
      ></Subscribe>
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
                          onClick={() => handleStepClick(step.step)}
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
            {!loading ? (
              <StepperContentWrapper>
                {renderStepContent()}
              </StepperContentWrapper>
            ) : (
              <LoadingWrapper>
                <Loading data={loadingProps} />
              </LoadingWrapper>
            )}
          </Wrapper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Start;
