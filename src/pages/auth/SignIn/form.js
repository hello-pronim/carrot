import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

import {
  Alert as MuiAlert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "../../../hooks/useAuth";

import Link from "../../../components/common/link";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

function SignInForm({ submit }) {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [remembered, setRemembered] = useState(false);
  const defaultSignInFormValues = {
    email: "test@carrot.com",
    password: "testuser123!",
    submit: false,
  };

  const handleRememberChange = (e, checked) => {
    setRemembered(checked);
  };
  const handleSubmit = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    try {
      // await signIn(values.email, values.password);

      submit();
    } catch (error) {
      const message = error.message || "Something went wrong";

      setStatus({ success: false });
      setErrors({ submit: message });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={defaultSignInFormValues}
      // validationSchema={Yup.object().shape({
      //   email: Yup.string()
      //     .email("Must be a valid email")
      //     .max(255)
      //     .required("Email is required"),
      //   password: Yup.string().max(255).required("Password is required"),
      // })}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        resetForm,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {errors.submit && (
              <Grid item xs={12}>
                <Alert mt={2} mb={3} severity="warning">
                  {errors.submit}
                </Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Typography variant="h6" color="secondary">
                      Username
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Typography variant="h6" color="secondary">
                      Password
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems="center" spacing={8}>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={remembered}
                        onChange={handleRememberChange}
                        color="secondary"
                      />
                    }
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Link to="/auth/reset-password" color="secondary">
                      Forgot Password?
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  {!remembered && (
                    <Typography variant="h6" color="secondary">
                      No Account? <Link to="/auth/sign-up">Sign Up</Link>
                    </Typography>
                  )}
                </Grid>
                <Grid item>
                  <Grid container spacing={4}>
                    <Grid item>
                      <Button
                        onClick={resetForm}
                        variant="outlined"
                        color="secondary"
                      >
                        Clear
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                      >
                        LOGIN
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default SignInForm;
