import React from "react";

import { Box, Grid, TextField, Typography } from "@mui/material";

const Description = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={4}>
          <Typography variant="h3">Description</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          rows={10}
          variant="outlined"
          size="small"
          multiline
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Description;
