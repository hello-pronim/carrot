import React from "react";

import {
  Box,
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import FullCalendar from "../../../../../components/common/fullCalendar";
import RadioButton from "../../../../../components/common/radioButton";
import TextArea from "../../../../../components/common/textarea";

import { convertDateToYYYYMMDD } from "../../../../../utils/functions";
import {
  budgets,
  buildingSizes,
  constructionTypes,
  engineerApprovalAndSignOff,
  services,
} from "../mock";

const Architecture = ({ jobDetails, update }) => {
  const validDeliveryDateRange = {
    start: convertDateToYYYYMMDD(new Date()),
  };

  const handleBuildingSizeChanged = (value) => {
    update({ ...jobDetails, buildingSize: value });
  };
  const handleBudgetChanged = (value) => {
    update({ ...jobDetails, budget: value });
  };
  const handleConstructionTypeChanged = (value) => {
    update({ ...jobDetails, constructionType: value });
  };
  const handleDeliveryDateChanged = (date) => {
    update({ ...jobDetails, deliveryDate: date.dateStr });
  };
  const handleDescriptionChanged = (e) => {
    update({ ...jobDetails, description: e.target.value });
  };
  const handleEngineerApprovalRequiredChanged = (value) => {
    update({ ...jobDetails, isEngineerApprovalRequired: value });
  };
  const handleServiceChanged = (value) => {
    update({ ...jobDetails, service: value });
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
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Type of Construction
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={constructionTypes}
              selected={jobDetails.constructionType}
              setSelected={handleConstructionTypeChanged}
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
                Size of Building
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={buildingSizes}
              selected={jobDetails.buildingSize}
              setSelected={handleBuildingSizeChanged}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Services Required
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={services}
              selected={jobDetails.service}
              setSelected={handleServiceChanged}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box pl={4}>
              <Typography variant="h3" color="primary">
                Engineer Approval/Sign Off
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={engineerApprovalAndSignOff}
              selected={jobDetails.isEngineerApprovalRequired}
              setSelected={handleEngineerApprovalRequiredChanged}
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
                Budget
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              data={budgets}
              selected={jobDetails.budget}
              setSelected={handleBudgetChanged}
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
              value={jobDetails.setSpecialRequests}
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

export default Architecture;
