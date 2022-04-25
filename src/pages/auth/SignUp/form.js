import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import * as Yup from "yup";
import { Field, Formik } from "formik";

import {
  Alert as MuiAlert,
  Box,
  Button,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "../../../hooks/useAuth";
import RadioButton from "../../../components/common/radioButton";
import TextArea from "../../../components/common/textarea";

import { expertise, positions } from "./mock";

const Alert = styled(MuiAlert)(spacing);

function SignUpForm() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const defaultSignUpFormValues = {
    firstName: "",
    lastName: "",
    position: "",
    expertise: "",
    resume: "",
    coverLetter: "",
    submit: false,
  };

  const handleSubmit = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    try {
      signUp(values.email, values.password, values.firstName, values.lastName);
      navigate("/auth/sign-in");
    } catch (error) {
      const message = error.message || "Something went wrong";

      setStatus({ success: false });
      setErrors({ submit: message });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={defaultSignUpFormValues}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required("First name is required"),
        lastName: Yup.string().max(255).required("Last name is required"),
        position: Yup.string().required("Desired position is required"),
        expertise: Yup.string().required("Expertise is required"),
      })}
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
          {errors.submit && (
            <Alert mt={2} mb={1} severity="warning">
              {errors.submit}
            </Alert>
          )}
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box pl={4}>
                        <Typography variant="h6" color="secondary">
                          First Name
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter First Name"
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box pl={4}>
                        <Typography variant="h6" color="secondary">
                          Last Name
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Last Name"
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Typography variant="h6" color="secondary">
                      *Desired Position
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="position"
                    component={() => <RadioButton data={positions} />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <Typography variant="h6" color="secondary">
                          *Your Expertise
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          color="common.black"
                          sx={{ fontStyle: "italic" }}
                        >
                          (Select all that apply)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="expertise"
                    component={() => (
                      <RadioButton data={expertise} variant="text" />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Typography variant="h6" color="secondary">
                      *Attach Resume
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <ToggleButtonGroup size="small" exclusive={true}>
                    <ToggleButton variant="contained" color="secondary">
                      Choose File
                    </ToggleButton>
                    <ToggleButton variant="contained" color="secondary">
                      Google Drive
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Typography variant="h6" color="secondary">
                      Cover Letter
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="coverLetter"
                    component={() => (
                      <TextArea
                        placeholder="Tell us why you’d like to join the Carrot team and what you enjoy most about your craft."
                        rows={10}
                        size="small"
                      />
                    )}
                  />
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
                  <Button
                    onClick={resetForm}
                    variant="outlined"
                    color="secondary"
                    fullWidth
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
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default SignUpForm;
