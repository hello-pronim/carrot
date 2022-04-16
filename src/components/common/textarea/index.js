import React from "react";

import { Box, Grid, TextField, Typography } from "@mui/material";

const TextArea = ({ label, placeholder = "", value, onChange, ...props }) => {
  return (
    <Grid container spacing={4}>
      {label && (
        <Grid item xs={12}>
          <Box pl={4}>
            <Typography variant="h3" color="primary">
              {label}
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <TextField
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          variant="outlined"
          multiline
          fullWidth
          {...props}
        />
      </Grid>
    </Grid>
  );
};

export default TextArea;
