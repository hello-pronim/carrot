import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Grid } from "@mui/material";

import ApplicationSent from "./ApplicationSent";
import RoleSelect from "./RoleSelect";
import TeamJoin from "./TeamJoin";

function SignUp() {
  const [selectedRole, setSelectedRole] = useState("pro");
  const [roleSubmitted, setRoleSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const roles = [
    { value: "pro", name: "Pro" },
    { value: "client", name: "Client" },
  ];

  const handleRoleSelectSubmit = (role) => {
    setSelectedRole(role);
    setRoleSubmitted(true);
  };
  const handleTeamJoinSubmit = (formValues) => {
    setSubmitted(true);
  };

  return (
    <React.Fragment>
      <Helmet title="Sign Up" />
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Grid container>
            {!submitted ? (
              <Grid item xs={12}>
                {!roleSubmitted ? (
                  <RoleSelect
                    roles={roles}
                    selected={selectedRole}
                    submit={handleRoleSelectSubmit}
                  />
                ) : (
                  <TeamJoin submit={handleTeamJoinSubmit} />
                )}
              </Grid>
            ) : (
              <Grid item xs={12}>
                <ApplicationSent />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SignUp;
