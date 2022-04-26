import React, { useState } from "react";
import styled from "styled-components/macro";

import { Grid, Step, StepButton, StepLabel, Stepper } from "@mui/material";
import { spacing } from "@mui/system";

import StepConnector from "../../../components/common/stepConnector";
import StepIconRoot from "../../../components/common/stepIcon";

import Basics from "./basics";
import PlantingSeed from "./PlantingSeed";
import Plan from "./plan";
import SignIn from "./signin";
import Subscribe from "./subscribe";
import SubscriptionSuccess from "./SubscriptionSuccess";

const PageWrapper = styled.div`
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

const steps = ["Basics", "Plan", "Subscribe", "Login"];

function StepIcon(props) {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ completed, active }} className={className} />
  );
}

function Start() {
  const [activeStep, setActiveStep] = useState(3);
  const [completedSteps, setCompletedSteps] = useState({});
  const [plantingSeed, setPlantingSeed] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [jobDetails, setJobDetails] = useState({ projectType: "website" });

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };
  const handleStepComplete = () => {
    const newCompleted = completedSteps;

    newCompleted[activeStep] = true;
    setCompletedSteps(newCompleted);
    setActiveStep(activeStep + 1);
  };
  const handleBasicSubmit = (details) => {
    setJobDetails(details);
    if (canGoNext()) {
      handleStepComplete();
      setPlantingSeed(true);
      const timer = setTimeout(() => {
        setPlantingSeed(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  };
  const handlePlanSubmit = () => {
    if (canGoNext()) {
      handleStepComplete();
    }
  };
  const handleSubscriptionSubmit = () => {
    setSubscriptionSuccess(true);
  };
  const handleLoginClicked = () => {
    setSubscriptionSuccess(false);
    if (canGoNext()) {
      handleStepComplete();
    }
  };
  const canGoBack = () => {
    return activeStep - 1 >= 1;
  };
  const canGoNext = () => {
    return activeStep + 1 <= steps.length;
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
        handleSubmit={handleSubscriptionSubmit}
      ></Subscribe>
    ) : activeStep === 3 ? (
      <SignIn />
    ) : (
      <></>
    );
  };

  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Wrapper>
            <StepperWrapper>
              <Grid container justifyContent="center">
                <Grid item xs={8}>
                  <Stepper
                    alternativeLabel
                    activeStep={activeStep}
                    connector={<StepConnector />}
                  >
                    {steps.map((step, index) => (
                      <Step key={index} completed={completedSteps[index]}>
                        <StepButton
                          color="inherit"
                          onClick={() => handleStepClick(index)}
                        >
                          <StepLabel StepIconComponent={StepIcon}>
                            {step}
                          </StepLabel>
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>
                <Spacer mb={8} />
              </Grid>
            </StepperWrapper>
            {plantingSeed ? (
              <PageWrapper>
                <PlantingSeed />
              </PageWrapper>
            ) : subscriptionSuccess ? (
              <PageWrapper>
                <SubscriptionSuccess submit={handleLoginClicked} />
              </PageWrapper>
            ) : (
              <StepperContentWrapper>
                {renderStepContent()}
              </StepperContentWrapper>
            )}
          </Wrapper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Start;
