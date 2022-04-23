import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import PrefixInput from "../../../../components/common/input/PrefixInput";

const PaymentDetailsForm = ({ paymentDetails, setPaymentDetails }) => {
  const handleCardNumberChanged = (e) => {
    setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value });
  };
  const handleExpirationDateChanged = (e) => {
    setPaymentDetails({ ...paymentDetails, expirationDate: e.target.value });
  };
  const handleCVVChanged = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      handleCVVChanged: e.target.value,
    });
  };
  const handleBillingZipCodeChanged = (e) => {
    setPaymentDetails({ ...paymentDetails, billingZipCode: e.target.value });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box pl={8}>
          <Typography variant="h3" color="primary">
            Payment Details
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <PrefixInput
                  prefix="Card Number"
                  placeholder="1234 5678 9123 4567"
                  value={paymentDetails.cardNumber}
                  onChange={handleCardNumberChanged}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <PrefixInput
                  prefix="Expiration Date"
                  placeholder="00/00"
                  value={paymentDetails.expirationDate}
                  onChange={handleExpirationDateChanged}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <PrefixInput
                  prefix="cvv/cvv2"
                  placeholder="000"
                  value={paymentDetails.cvv}
                  onChange={handleCVVChanged}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <PrefixInput
                  prefix="Billing Zip Code"
                  placeholder="00000"
                  value={paymentDetails.billingZipCode}
                  onChange={handleBillingZipCodeChanged}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentDetailsForm;
