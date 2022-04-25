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
import { appCategories, completionStatus, platforms } from "../mock";

const MobileApp = ({ jobDetails, update }) => {
  const validDeliveryDateRange = {
    start: convertDateToYYYYMMDD(new Date()),
  };

  const handleAppCategoryChanged = (value) => {
    update({ ...jobDetails, appCategory: value });
  };
  const handleCompletionStatusChanged = (value) => {
    update({ ...jobDetails, completionStatus: value });
  };
  const handleDeliveryDateChanged = (date) => {
    update({ ...jobDetails, deliveryDate: date.dateStr });
  };
  const handleDesignSourceChanged = (e) => {
    update({ ...jobDetails, designSource: e.target.value });
  };
  const handleDescriptionChanged = (e) => {
    update({ ...jobDetails, description: e.target.value });
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
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Completion Status
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={completionStatus["mobileApp"]}
              selected={jobDetails.completionStatus}
              setSelected={handleCompletionStatusChanged}
              variant="text"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Platforms
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={platforms.filter(
                (platform) => platform.projectType === "mobile_app"
              )}
              selected={jobDetails.platform}
              setSelected={handlePlatformChanged}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Description
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextArea
              value={jobDetails.description}
              onChange={handleDescriptionChanged}
              rows={10}
              size="small"
            />
          </Grid>
        </Grid>
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
                Design Source
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={jobDetails.designSource}
              onChange={handleDesignSourceChanged}
              placeholder="Please provide a share link for the design (if applicable)"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                App Category
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={appCategories}
              selected={jobDetails.appCategory}
              setSelected={handleAppCategoryChanged}
            />
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
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Special Requests
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextArea
              placeholder="Is there anything else  we missed? Don't hold back"
              value={jobDetails.specialRequests}
              onChange={handleSpecialRequestsChanged}
              rows={10}
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileApp;
