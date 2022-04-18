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
import { budgets, completionStatus, technologies } from "../mock";

const Database = ({ jobDetails, update }) => {
  const validDeliveryDateRange = {
    start: convertDateToYYYYMMDD(new Date()),
  };

  const handleBudgetChanged = (value) => {
    update({ ...jobDetails, budget: value });
  };
  const handleCompletionStatusChanged = (value) => {
    update({ ...jobDetails, completionStatus: value });
  };
  const handleDatabaseURLChanged = (e) => {
    update({ ...jobDetails, databaseURL: e.target.value });
  };
  const handleDeliveryDateSelect = (date) => {
    update({ ...jobDetails, deliveryDate: date.dateStr });
  };
  const handleDescriptionChanged = (e) => {
    update({ ...jobDetails, description: e.target.value });
  };
  const handleSpecialRequestsChanged = (e) => {
    update({ ...jobDetails, specialRequests: e.target.value });
  };
  const handleTechnologyChanged = (value) => {
    update({ ...jobDetails, technology: value });
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
          label="Completion Status"
          data={completionStatus["database"]}
          selected={jobDetails.completionStatus}
          setSelected={handleCompletionStatusChanged}
          variant="text"
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Technology"
          data={technologies["database"]}
          selected={jobDetails.technology}
          setSelected={handleTechnologyChanged}
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
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Database URL
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={jobDetails.databaseURL}
              onChange={handleDatabaseURLChanged}
              placeholder="Please provide a valid URL for the database (if applicable)"
              variant="outlined"
              size="small"
              fullWidth
            />
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
                  dateClick={handleDeliveryDateSelect}
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

export default Database;
