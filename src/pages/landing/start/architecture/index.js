import React, { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import FullCalendar from "../../../../components/common/fullCalendar";
import RadioButton from "../../../../components/common/radioButton";
import TextArea from "../../../../components/common/textarea";

import { convertDateToYYYYMMDD } from "../../../../utils/functions";
import {
  budgets,
  buildingSizes,
  constructionTypes,
  engineerApprovalAndSignOff,
  services,
} from "../mock";

const Website = () => {
  const [deliveryDate, setDeliveryDate] = useState({
    title: "Delivery Date",
    start: "2022-04-15",
  });
  const [description, setDescription] = useState("");
  const [
    isEngineerApprovalAndSignOffRequired,
    setIsEngineerApprovalAndSignOffRequired,
  ] = useState(true);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedBuildingSize, setSelectedBuildingSize] = useState("");
  const [selectedConstruction, setSelectedConstruction] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [validDeliveryDateRange, setValidDeliveryDateRange] = useState({
    start: convertDateToYYYYMMDD(new Date()),
  });

  const handleDeliveryDateSelect = (date) => {
    setDeliveryDate({ ...deliveryDate, start: date.dateStr });
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

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSpecialRequestsChange = (e) => {
    setSpecialRequests(e.target.value);
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <RadioButton
          label="Type of Construction"
          data={constructionTypes}
          selected={selectedConstruction}
          setSelected={setSelectedConstruction}
          variant="text"
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Size of Building"
          data={buildingSizes}
          selected={selectedBuildingSize}
          setSelected={setSelectedBuildingSize}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Services Required"
          data={services}
          selected={selectedService}
          setSelected={setSelectedService}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          label="Engineer Approval/Sign Off"
          data={engineerApprovalAndSignOff}
          selected={isEngineerApprovalAndSignOffRequired}
          setSelected={setIsEngineerApprovalAndSignOffRequired}
        />
      </Grid>
      <Grid item xs={12}>
        <TextArea
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
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
          selected={selectedBudget}
          setSelected={setSelectedBudget}
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
                  events={[deliveryDate]}
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
          value={specialRequests}
          onChange={handleSpecialRequestsChange}
          rows={10}
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default Website;
