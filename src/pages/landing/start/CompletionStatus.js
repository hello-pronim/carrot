import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Button from "../../../components/common/button";

const CompletionStatus = ({ data, selected, setSelected }) => {
  const handlePlatformSelect = (id) => {
    setSelected(id);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box pl={4}>
          <Typography variant="h3">Completion Status</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xs={4}>
              <Button
                onClick={() => handlePlatformSelect(item.id)}
                color={item.id === selected ? "primary" : "secondary"}
                sx={{ fontWeight: item.id === selected && "bold" }}
                fullWidth
              >
                {item.status}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompletionStatus;
