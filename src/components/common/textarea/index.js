import React from "react";

import { TextField } from "@mui/material";

const TextArea = ({ placeholder = "", value, onChange, ...props }) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      multiline
      fullWidth
      {...props}
    />
  );
};

export default TextArea;
