import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import { css } from "styled-components/macro";
import { darken, lighten } from "polished";

export default css`
  .fc-button,
  .fc-button-primary {
    box-shadow: ${(props) => props.theme.shadows[1]};
    color: ${(props) => props.theme.palette.primary.contrastText};
    background: ${(props) => props.theme.palette.primary.main};
    font-weight: ${(props) => props.theme.typography.fontWeightMedium};
    font-family: ${(props) => props.theme.typography.fontFamily};
    border: 0;
    outline: 0;
    box-shadow: none;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover,
    &:active,
    &:focus,
    &:not(:disabled):active,
    &:not(:disabled):active:focus {
      box-shadow: none;
      background-color: ${(props) =>
        darken(0.1, props.theme.palette.primary.main)};
    }

    &:not(:disabled):active,
    &:not(:disabled).fc-button-active {
      background-color: ${(props) =>
        darken(0.1, props.theme.palette.primary.main)};

      &:focus {
        box-shadow: none;
      }
    }

    &-primary:disabled {
      background: rgba(0, 0, 0, 0.12);
      color: rgba(0, 0, 0, 0.26);
    }
  }

  .fc-event {
    padding: ${(props) => props.theme.spacing(1)};
    margin: ${(props) => props.theme.spacing(0.5)};
  }

  .fc-h-event {
    border: 1px solid
      ${(props) => darken(0.05, props.theme.palette.secondary.main)};
    background: ${(props) => props.theme.palette.secondary.main};
  }

  .fc-unthemed td.fc-today {
    background: ${(props) => lighten(0.5, props.theme.palette.primary.main)};
  }

  .fc-dayGrid-view .fc-week-number,
  .fc-dayGrid-view .fc-day-number {
    padding: ${(props) => props.theme.spacing(1)};
  }

  .fc th {
    padding: ${(props) => props.theme.spacing(1)};
  }

  .fc-col-header-cell .fc-col-header-cell-cushion {
    color: #434343;
  }

  .fc-daygrid-day-number {
    color: #434343;
  }

  .fc-header-toolbar .fc-toolbar-chunk:last-child > div {
    display: flex;
    align-items: center;
  }

  .fc-toolbar-title {
    color: ${(props) => props.theme.palette.secondary.main};
    font-size: 1.25rem !important;
    width: 12.5rem !important;
    padding-left: ${(props) => props.theme.spacing(4)};
    padding-right: ${(props) => props.theme.spacing(4)};
    text-align: center;
  }

  .fc-prev-button,
  .fc-next-button {
    background: transparent !important;
    border: none !important;
    &:focus {
      box-shadow: none !important;
    }
    & .fc-icon {
      color: ${(props) => props.theme.palette.primary.main};
      font-size: 1.25rem !important;
      font-weight: bold;
    }
  }
`;
