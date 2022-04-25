import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Box, Grid, Typography } from "@mui/material";

import SignUpForm from "./Form";
import RoleSelect from "./RoleSelect";

function SignUp() {
  const [selectedRole, setSelectedRole] = useState("pro");
  const [roleSubmitted, setRoleSubmitted] = useState(false);
  const roles = [
    { value: "pro", name: "Pro" },
    { value: "client", name: "Client" },
  ];

  const handleRoleSubmit = (role) => {
    setSelectedRole(role);
    setRoleSubmitted(true);
  };

  return (
    <React.Fragment>
      <Helmet title="Sign Up" />
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              {!roleSubmitted ? (
                <RoleSelect
                  roles={roles}
                  selected={selectedRole}
                  submit={handleRoleSubmit}
                />
              ) : (
                <SignUpForm />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SignUp;
