import React from "react";
import styled from "styled-components/macro";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const Card = styled(MuiCard)`
  position: relative;
`;
const CardHeader = styled(MuiCardHeader)`
  position: absolute;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.palette.primary.main
      : props.color === "secondary"
      ? props.theme.palette.secondary.main
      : "#FFF"};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0px 0px;
  color: #fff;
  & .MuiCardHeader-content .MuiTypography-root {
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 1;
  }
  & .MuiCardHeader-action {
    margin: 0;
  }
`;
const CardContent = styled(MuiCardContent)`
  padding-top: 48px;
  border-radius: 10px;
  border: 2px solid
    ${(props) =>
      props.color === "primary"
        ? props.theme.palette.primary.main
        : props.color === "secondary"
        ? props.theme.palette.secondary.main
        : "#FFF"};
`;

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
  boldFont: {
    fontWeight: "bold",
  },
});

const SubscriptionCard = ({ subscription }) => {
  const classes = useStyles();

  return (
    <Card className={classes.fullWidth}>
      {subscription.heading && (
        <CardHeader
          title={
            <Typography variant="body2" className={classes.boldFont}>
              {subscription.heading}
            </Typography>
          }
          color={subscription.color}
        />
      )}
      <CardContent color={subscription.color}>
        <Grid container direction="column" alignItems="center" spacing={6}>
          <Grid item>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.boldFont}
            >
              {subscription.title}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={1}>
              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      {subscription.price}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h3"
                      color="secondary"
                      sx={{ fontWeight: "bold" }}
                    >
                      {subscription.unit}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{ color: "#717171", fontStyle: "italic" }}
                >
                  {subscription.period}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={1}>
              {subscription.items.map((item) => (
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="secondary"
                    className={classes.boldFont}
                    sx={{
                      color: subscription.itemColor,
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
