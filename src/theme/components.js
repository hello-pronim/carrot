const components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        "&.MuiButton-contained": {
          fontSize: "18px",
          lineHeight: "21px",
          borderRadius: "7px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          "&.MuiButton-containedPrimary": {
            backgroundColor: "#FD9827",
          },
          "&.MuiButton-containedSecondary": {
            backgroundColor: "#9797DD",
          },
          "&.Mui-disabled": {
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            color: "#FFF",
            opacity: 0.3,
          },
        },
        "&.MuiButton-outlined": {
          fontSize: "18px",
          lineHeight: "21px",
          borderRadius: "7px",
          border: "2px solid #AFAFE8",
          color: "#AFAFE8",
          filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))",
          "&:hover": {
            borderWidth: 2,
            color: "#9797DD",
          },
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        backgroundImage: "none",
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: "h6",
      },
    },
    styleOverrides: {
      action: {
        marginTop: "-4px",
        marginRight: "-4px",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "6px",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: "#434343",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        backgroundColor: "#FFF",
        border: "none",
        borderRadius: "10px",
        boxShadow: " 0px 0px 4px 0px #00000040",
        "&.MuiInputBase-multiline": {
          padding: "16px",
          fontSize: "14px",
          fontWeight: "bold",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiPickersCalendar: {
    styleOverrides: {
      transitionContainer: {
        marginTop: "6px",
      },
    },
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      iconButton: {
        backgroundColor: "transparent",
        "& > *": {
          backgroundColor: "transparent",
        },
      },
      switchHeader: {
        marginTop: "2px",
        marginBottom: "4px",
      },
    },
  },
  MuiPickersClock: {
    styleOverrides: {
      container: {
        margin: `32px 0 4px`,
      },
    },
  },
  MuiPickersClockNumber: {
    styleOverrides: {
      clockNumber: {
        left: `calc(50% - 16px)`,
        width: "32px",
        height: "32px",
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      day: {
        fontWeight: "300",
      },
    },
  },
  MuiPickerDTHeader: {
    styleOverrides: {
      dateHeader: {
        "& h4": {
          fontSize: "2.125rem",
          fontWeight: 400,
        },
      },
      timeHeader: {
        "& h3": {
          fontSize: "3rem",
          fontWeight: 400,
        },
      },
    },
  },
  MuiPickersTimePicker: {
    styleOverrides: {
      hourMinuteLabel: {
        "& h2": {
          fontSize: "3.75rem",
          fontWeight: 300,
        },
      },
    },
  },
  MuiPickersToolbar: {
    styleOverrides: {
      toolbar: {
        "& h4": {
          fontSize: "2.125rem",
          fontWeight: 400,
        },
      },
    },
  },
  MuiPickersYear: {
    styleOverrides: {
      root: {
        height: "64px",
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      root: {
        "& .MuiStepLabel-label": {
          "&.Mui-active": {
            color: "#FD9827",
          },
          "&:not(.Mui-active)": {
            display: "none",
          },
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        border: "none",
        borderRadius: "10px",
        padding: "6px 16px",
        transition:
          "background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,color 250ms cubic-bezier(0.4,0,0.2,1) 0ms",
        "&.MuiToggleButton-primary": {
          color: "#FFF",
          backgroundColor: "#FD9827",
        },
        "&.MuiToggleButton-secondary": {
          color: "#FFF",
          backgroundColor: "#9797DD",
        },
        "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
          borderRight: "3px solid #FFF",
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};

export default components;
