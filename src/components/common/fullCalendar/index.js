import React from "react";
import styled from "styled-components/macro";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import calendarStyle from "./style";

const FullCalendarWrapper = styled.div`
  ${calendarStyle}
`;

function Calendar({ events, ...props }) {
  return (
    <FullCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        {...props}
      />
    </FullCalendarWrapper>
  );
}

export default Calendar;
