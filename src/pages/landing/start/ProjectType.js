import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Button from "../../../components/common/button";

const ProjectType = ({ data, selected, setSelected }) => {
  const handleProjectTypeSelect = (projectType) => {
    setSelected(projectType);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={4}>
          <Typography variant="h3">Project Type</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xs={4}>
              <Button
                onClick={() => handleProjectTypeSelect(item.slug)}
                color={item.slug === selected ? "primary" : "secondary"}
                variant="contained"
                fullWidth
              >
                {item.type}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectType;
