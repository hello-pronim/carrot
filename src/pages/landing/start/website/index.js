import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import CompletionStatus from "../CompletionStatus";
import Description from "../Description";
import Platforms from "../Platforms";

import { completionStatus, platforms } from "../mock";

const Website = () => {
  const [selectedCompletionStatus, setSelectedCompletionStatus] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Platforms
          title="Platform Assistance"
          data={platforms.filter(
            (platform) => platform.projectType === "website"
          )}
          selected={selectedPlatform}
          setSelected={setSelectedPlatform}
        />
      </Grid>
      <Grid item xs={12}>
        <CompletionStatus
          data={completionStatus}
          selected={selectedCompletionStatus}
          setSelected={setSelectedCompletionStatus}
        />
      </Grid>
      <Grid item xs={12}>
        <Description />
      </Grid>
    </Grid>
  );
};

export default Website;
