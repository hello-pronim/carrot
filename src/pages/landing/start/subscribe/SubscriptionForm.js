import React, { useState } from "react";
import { Grid } from "@mui/material";

import SubscriptionCard from "../../../../components/common/card/SubscriptionCard";

import CreateAccountForm from "./CreateAccountForm";
import PaymentDetailsForm from "./PaymentDetailsForm";

const SubscriptionForm = ({ subscription }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingZipCode: "",
  });

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={3}>
            <SubscriptionCard subscription={subscription} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <PaymentDetailsForm
              paymentDetails={paymentDetails}
              setPaymentDetails={setPaymentDetails}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <CreateAccountForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubscriptionForm;
