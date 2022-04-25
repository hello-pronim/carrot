import React, { useState } from "react";
import { Button, ButtonBase, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  boldFont: {
    fontWeight: "bold",
  },
  fullWidth: {
    width: "100%",
  },
  greyColor: {
    color: "#CACACA",
  },
  primaryColor: {
    color: theme.palette.primary.main,
  },
}));

function RoleSelect({ roles, selected, submit }) {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState(selected);

  const handleRoleSelected = (role) => {
    setSelectedRole(role);
  };
  const handleNextClicked = () => {
    submit(selectedRole);
  };

  return (
    <React.Fragment>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" color="common.black">
                Select a Role
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.boldFont}
                variant="body2"
                align="center"
                color="common.black"
              >
                Are you a professional or client?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={8}>
            {roles.map((role) => (
              <Grid key={role.value} item xs={6}>
                <ButtonBase
                  className={classes.fullWidth}
                  onClick={() => handleRoleSelected(role.value)}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {role.value === selectedRole ? (
                        <img
                          alt="active carrot"
                          src="/static/img/carrot_thumb_large_active.png"
                        />
                      ) : (
                        <img
                          alt="active carrot"
                          src="/static/img/carrot_thumb_large_inactive.png"
                        />
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className={
                          role.value === selectedRole
                            ? classes.primaryColor
                            : classes.greyColor
                        }
                        variant="h3"
                      >
                        {role.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" spacing={4}>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleNextClicked}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default RoleSelect;
