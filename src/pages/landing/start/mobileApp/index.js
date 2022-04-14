import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import CompletionStatus from "../CompletionStatus";
import Platforms from "../Platforms";

import { completionStatus, platforms } from "../mock";

const MobileApp = () => {
  const [selectedCompletionStatus, setSelectedCompletionStatus] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CompletionStatus
          data={completionStatus}
          selected={selectedCompletionStatus}
          setSelected={setSelectedCompletionStatus}
        />
      </Grid>
      <Grid item xs={12}>
        <Platforms
          title="Platforms"
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
