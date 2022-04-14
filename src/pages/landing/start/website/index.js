import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import RadioButton from "../../../../components/common/radioButton";

import Description from "../Description";

import { budgets, completionStatus, features, platforms } from "../mock";

const Website = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedCompletionStatus, setSelectedCompletionStatus] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <RadioButton
          label="Platform Assistance"
          data={platforms.filter(
            (platform) => platform.projectType === "website"
          )}
          selected={selectedPlatform}
          setSelected={setSelectedPlatform}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Completion Status"
          data={completionStatus}
          selected={selectedCompletionStatus}
          setSelected={setSelectedCompletionStatus}
          variant="text"
        />
      </Grid>
      <Grid item xs={12}>
        <Description />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Budget"
          data={budgets}
          selected={selectedBudget}
          setSelected={setSelectedBudget}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Features Needed"
          data={features}
          selected={selectedFeatures}
          setSelected={setSelectedFeatures}
          variant="text"
          mode="multiple"
        />
      </Grid>
    </Grid>
  );
};

export default Website;
