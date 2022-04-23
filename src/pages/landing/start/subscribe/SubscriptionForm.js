import React, { useState } from "react";
import { Grid } from "@mui/material";

import SubscriptionCard from "../../../../components/common/card/SubscriptionCard";

import CreateAccountForm from "./CreateAccountForm";
import PaymentDetailsForm from "./PaymentDetailsForm";

const SubscriptionForm = ({ subscription, submit }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingZipCode: "",
  });
  const [accountDetails, setAccountDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleSubmit = (accountDetails) => {
    submit({ user: accountDetails, payment: paymentDetails });
  };

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
            <CreateAccountForm
              accountDetails={accountDetails}
              setAccountDetails={setAccountDetails}
              submit={handleSubmit}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubscriptionForm;
