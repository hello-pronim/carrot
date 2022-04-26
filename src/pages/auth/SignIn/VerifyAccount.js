import React, { createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Grid,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "../../../hooks/useAuth";

const TextField = styled(MuiTextField)`
  & .MuiInputBase-input {
    width: 80px;
    height: 80px;
    font-size: 80px;
    text-align: center;
  }
`;

function VerifyAccount({ submit }) {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const defaultExpiredTime = 60; // 60 seconds
  const codeLength = 4;
  const [code, setCode] = useState("");
  const [expiredTime, setExpiredTime] = useState(defaultExpiredTime);
  const [codeExpired, setCodeExpired] = useState(false);
  const codeRefs = Array(codeLength)
    .fill(0)
    .map((_, i) => createRef());

  useEffect(() => {
    codeRefs[0].current.focus();
  }, []);

  useEffect(() => {
    let interval;

    if (expiredTime !== 0) {
      interval = setInterval(() => {
        setExpiredTime(expiredTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setCode("");
      setCodeExpired(true);
    }
  }, [expiredTime]);

  const replaceChartAt = (string, index, replacement) => {
    return (
      string.substring(0, index) +
      replacement +
      string.substring(index + replacement.length)
    );
  };
  const handleCodeChanged = (e, index) => {
    const regex = /[0-9]+/g;

    if (e.target.value === "" || regex.test(e.target.value)) {
      const newCode = replaceChartAt(code.padEnd(4, ""), index, e.target.value);

      setCode(newCode);
      if (codeRefs[index + 1]) codeRefs[index + 1].current.focus();
    }
  };
  const handleClear = () => {};
  const handleResendCode = () => {
    setExpiredTime(defaultExpiredTime);
  };
  const displayExpiredTime = () => {
    const mm = Math.floor(expiredTime / 60);
    const ss = expiredTime - mm * 60;

    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="common.black">
              We Sent a Code to Your Device
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#9D9D9D" }}
            >
              Enter the 4-digit verification code to access the Carrot Patch.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={8}>
              {[...Array(codeLength)].map((arrayItem, index) => (
                <Grid key={index} item>
                  <TextField
                    inputRef={codeRefs[index]}
                    value={code.charAt(index)}
                    onChange={(e) => handleCodeChanged(e, index)}
                    inputProps={{
                      maxLength: 1,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item xs={8}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    {codeExpired ? (
                      <Typography variant="body2" color="secondary">
                        Code has been expired. Try to resend code again.
                      </Typography>
                    ) : (
                      <Grid container spacing={2}>
                        <Grid item>
                          <Typography variant="body2">
                            Code expires in:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="primary">
                            {displayExpiredTime()}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={handleResendCode}
                      variant="text"
                      color="primary"
                    >
                      Didn't get code?
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={4}
        >
          <Grid item>
            <Button onClick={handleClear} variant="outlined" color="secondary">
              Clear
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => submit(code)}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VerifyAccount;
