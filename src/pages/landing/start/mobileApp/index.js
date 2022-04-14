import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import RadioButton from "../../../../components/common/radioButton";

import { completionStatus, platforms } from "../mock";

const MobileApp = () => {
  const [selectedCompletionStatus, setSelectedCompletionStatus] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <RadioButton
          label="Completion Status"
          data={completionStatus}
          selected={selectedCompletionStatus}
          setSelected={setSelectedCompletionStatus}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Platforms"
          data={platforms.filter(
            (platform) => platform.projectType === "mobile_app"
          )}
          selected={selectedPlatform}
          setSelected={setSelectedPlatform}
        />
      </Grid>
    </Grid>
  );
};

export default MobileApp;
