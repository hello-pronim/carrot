import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Button from "../../../components/common/button";

const RadioButton = ({
  label = "Please select",
  description,
  data,
  selected,
  setSelected,
  variant = "contained",
  mode = "single", // single/multiple
}) => {
  const isSelected = (value) => {
    return mode === "single"
      ? selected === value
      : mode === "multiple"
      ? selected.includes(value)
      : false;
  };
  const handlePlatformSelect = (value) => {
    if (mode === "single") {
      setSelected(value);
    } else if (mode === "multiple") {
      if (isSelected(value))
        setSelected(selected.filter((item) => item.value !== value));
      else setSelected([...selected, value]);
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={4}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="h3" color="primary">
                {label}
              </Typography>
            </Grid>
            {description && (
              <Grid item>
                <Typography
                  variant="h6"
                  color="secondary"
                  sx={{ fontWeight: 400, fontStyle: "italic" }}
                >
                  {description}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.value} item xs={4}>
              <Button
                onClick={() => handlePlatformSelect(item.value)}
                color={isSelected(item.value) ? "primary" : "secondary"}
                sx={{
                  fontWeight: isSelected(item.value) && "bold",
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