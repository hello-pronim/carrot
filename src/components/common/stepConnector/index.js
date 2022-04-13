import styled from "styled-components/macro";
import { StepConnector as MuiStepConnector } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";

const StepConnector = styled(MuiStepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#FD9827",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#FD9827",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#9797DD",
    borderRadius: 1,
  },
}));

export default StepConnector;
