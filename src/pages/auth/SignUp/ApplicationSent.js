import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { Button, Grid, Typography } from "@mui/material";

const Title = styled(Typography)`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
`;
const Text = styled(Typography)`
  color: #434343;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`;
function ApplicationSent() {
  const navigate = useNavigate();

  const handleOkayClicked = () => {
    navigate("/auth/sign-in");
  };

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <img src="/static/img/carrot.png" alt="carrot" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Title>Application Sent!</Title>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Text>
                We'll be in touch within 2 weeks and notify you of our decision.
                Stay patient!
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="flex-end">
          <Button
            onClick={handleOkayClicked}
            variant="contained"
            color="primary"
          >
            Okay
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ApplicationSent;
