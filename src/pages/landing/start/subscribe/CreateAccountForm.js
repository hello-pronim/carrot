import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import Link from "../../../../components/common/link";

const useStyles = makeStyles({
  boldFont: {
    fontWeight: "bold",
  },
});

const CreateAccountForm = ({ accountDetails, setAccountDetails, submit }) => {
  const classes = useStyles();
  const [canSubscribe, setCanSubscribe] = useState(false);
  const [isAcceptPolicies, setIsAcceptPolicies] = useState(false);

  const handleAcceptPoliciesChanged = (e, checked) => {
    setIsAcceptPolicies(checked);
    setCanSubscribe(checked);
  };
  const handleFirstNameChanged = (e) => {
    setAccountDetails({ ...accountDetails, firstName: e.target.value });
  };
  const handleLastNameChanged = (e) => {
    setAccountDetails({ ...accountDetails, lastName: e.target.value });
  };
  const handleCompanyChanged = (e) => {
    setAccountDetails({ ...accountDetails, company: e.target.value });
  };
  const handleUsernameChanged = (e) => {
    setAccountDetails({ ...accountDetails, username: e.target.value });
  };
  const handlePasswordChanged = (e) => {
    setAccountDetails({ ...accountDetails, password: e.target.value });
  };
  const handleConfirmPasswordChanged = (e) => {
    setAccountDetails({ ...accountDetails, confirmPassword: e.target.value });
  };
  const handlePhoneNumberChanged = (e) => {
    setAccountDetails({ ...accountDetails, pone: e.target.value });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={8}>
          <Typography variant="h3" color="primary">
            Create Account
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={4}>
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
                          value={accountDetails.firstName}
                          onChange={handleFirstNameChanged}
                          placeholder="Enter a First Name"
                          variant="outlined"
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
                          value={accountDetails.lastName}
                          onChange={handleLastNameChanged}
                          placeholder="Enter a Last Name"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box pl={4}>
                      <Typography variant="h6" color="secondary">
                        Company
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={accountDetails.company}
                      onChange={handleCompanyChanged}
                      placeholder="Enter a Company or organization name"
                      variant="outlined"
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
                        Username
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={accountDetails.username}
                      onChange={handleUsernameChanged}
                      placeholder="Enter a desired username"
                      variant="outlined"
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
                      value={accountDetails.password}
                      onChange={handlePasswordChanged}
                      type="password"
                      placeholder="Must contain 1 capital letter and 3 special characters"
                      variant="outlined"
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
                        Confirm Password
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="password"
                      value={accountDetails.confirmPassword}
                      onChange={handleConfirmPasswordChanged}
                      placeholder="Enter the password again"
                      variant="outlined"
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
                        Phone number
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={accountDetails.number}
                      onChange={handlePhoneNumberChanged}
                      placeholder="Enter a valid phone number"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  label={
                    <Typography variant="body2" className={classes.boldFont}>
                      By proceeding, you read and accepted the policies in the{" "}
                      <Link to="">Carrot User Agreement</Link>.
                    </Typography>
                  }
                  control={
                    <Checkbox
                      color="secondary"
                      value={isAcceptPolicies}
                      onChange={handleAcceptPoliciesChanged}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={submit}
                      disabled={!canSubscribe}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateAccountForm;
