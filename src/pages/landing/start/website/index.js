import React, { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import FullCalendar from "../../../../components/common/fullCalendar";
import RadioButton from "../../../../components/common/radioButton";

import Description from "../Description";

import {
  budgets,
  completionStatus,
  events,
  features,
  platforms,
} from "../mock";

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
        <Grid container>
          <Grid item xs={12}>
            <Box pl={4} pt={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#717171", fontWeight: "bold" }}
                  >
                    Attach Image(s):
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ToggleButtonGroup size="small" exclusive={true}>
                    <ToggleButton variant="contained" color="primary">
                      Choose File
                    </ToggleButton>
                    <ToggleButton variant="contained" color="primary">
                      Google Drive
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RadioButton
              label="Features Needed"
              description="(Select all that apply)"
              data={features}
              selected={selectedFeatures}
              setSelected={setSelectedFeatures}
              variant="text"
              mode="multiple"
            />
          </Grid>
          <Grid item xs={12}>
            <Box pl={4}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item>
                  <Typography color="secondary" sx={{ fontWeight: 500 }}>
                    Other:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <TextField variant="outlined" size="small" fullWidth />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <FullCalendar
              initialView="dayGridMonth"
              initialDate="2022-04-15"
              events={events}
              editable={true}
              headerToolbar={{
                center: "title",
                right: "prev,next",
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Website;
