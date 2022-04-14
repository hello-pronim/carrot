import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Button from "../../../components/common/button";

const RadioButton = ({
  label = "Please select",
  data,
  selected,
  setSelected,
  variant = "contained",
}) => {
  const handlePlatformSelect = (value) => {
    setSelected(value);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={4}>
          <Typography variant="h3">{label}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.value} item xs={4}>
              <Button
                onClick={() => handlePlatformSelect(item.value)}
                color={item.value === selected ? "primary" : "secondary"}
                sx={{
                  fontWeight: item.value === selected && "bold",
                }}
                variant={variant}
                fullWidth
              >
                {item.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RadioButton;
