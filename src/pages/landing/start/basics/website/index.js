import React from "react";

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

import FullCalendar from "../../../../../components/common/fullCalendar";
import RadioButton from "../../../../../components/common/radioButton";
import TextArea from "../../../../../components/common/textarea";

import { convertDateToYYYYMMDD } from "../../../../../utils/functions";
import { budgets, completionStatus, features, platforms } from "../mock";

const Website = ({ jobDetails, update }) => {
  const validDeliveryDateRange = {
    start: convertDateToYYYYMMDD(new Date()),
  };

  const handleBudgetChanged = (value) => {
    update({ ...jobDetails, budget: value });
  };
  const handleCompletionStatusChanged = (value) => {
    update({ ...jobDetails, completionStatus: value });
  };
  const handleDeliveryDateChanged = (date) => {
    update({ ...jobDetails, deliveryDate: date.dateStr });
  };
  const handleDescriptionChanged = (e) => {
    update({ ...jobDetails, description: e.target.value });
  };
  const handleFeaturesChanged = (value) => {
    update({ ...jobDetails, features: value });
  };
  const handlePlatformChanged = (value) => {
    update({ ...jobDetails, platform: value });
  };
  const handleSpecialRequestsChanged = (e) => {
    update({ ...jobDetails, specialRequests: e.target.value });
  };

  const renderCalendarDate = () => {
    return (
      <div className="event-image-container">
        <img
          alt="event-thumb"
          className="event-image"
          src="static/img/carrot_thumb_white.png"
        />
      </div>
    );
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <RadioButton
          label="Platform Assistance"
          data={platforms.filter(
            (platform) => platform.projectType === "website"
          )}
          selected={jobDetails.platform}
          setSelected={handlePlatformChanged}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Completion Status"
          data={completionStatus["website"]}
          selected={jobDetails.completionStatus}
          setSelected={handleCompletionStatusChanged}
          variant="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextArea
          label="Description"
          value={jobDetails.description}
          onChange={handleDescriptionChanged}
          rows={10}
          size="small"
        />
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
          selected={jobDetails.budget}
          setSelected={handleBudgetChanged}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RadioButton
              label="Features Needed"
              description="(Select all that apply)"
              data={features["website"]}
              selected={jobDetails.features}
              setSelected={handleFeaturesChanged}
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
                  <TextField
                    onChange={handleFeaturesChanged}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Delivery Date
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <FullCalendar
                  initialView="dayGridMonth"
                  events={[
                    { title: "Delivery Date", start: jobDetails.deliveryDate },
                  ]}
                  validRange={validDeliveryDateRange}
                  editable={true}
                  selectable={true}
                  headerToolbar={{
                    start: "",
                    center: "",
                    right: "prev,title,next",
                  }}
                  dateClick={handleDeliveryDateChanged}
                  eventContent={renderCalendarDate}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextArea
          label="Special Requests"
          placeholder="Is there anything else  we missed? Don't hold back"
          value={jobDetails.specialRequests}
          onChange={handleSpecialRequestsChanged}
          rows={10}
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Website;
