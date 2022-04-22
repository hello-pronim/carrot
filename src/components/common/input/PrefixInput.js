import React from "react";
import styled from "styled-components/macro";

import { TextField as MuiTextField } from "@mui/material";

const TextField = styled(MuiTextField)`
  & .MuiInputBase-root {
    position: relative;
    ::after {
      position: absolute;
      width: 128px;
      height: calc(100% + 2px);
      content: "${(props) => props.prefix}";
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) =>
        props.prefixColor === "primary"
          ? props.theme.palette.primary.main
          : props.theme.palette.secondary.main};
      color: #fff;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      font-weight: bold;
      text-align: center;
      z-index: 10;
    }
    &.Mui-focused {
      ::after {
        background-color: ${(props) => props.theme.palette.primary.main};
      }
    }
    & input {
      padding-left: 144px;
    }
  }
`;

const PrefixInput = ({ prefix, prefixColor = "secondary", ...props }) => {
  return (
    <TextField
      prefix={prefix}
      prefixColor={prefixColor}
      variant="outlined"
      {...props}
    />
  );
};

export default PrefixInput;
