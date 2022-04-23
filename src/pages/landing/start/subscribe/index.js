import React, { useState } from "react";

import Subscriptions from "./Subscriptions";
import SubscriptionForm from "./SubscriptionForm";

import { subscriptions } from "./mock";

function Subscribe({ jobDetails, handleBack, handleSubmit }) {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const handleSubscriptionSelected = (subscription) => {
    setSelectedSubscription(subscription);
  };

  return selectedSubscription !== null ? (
    <SubscriptionForm
      subscription={selectedSubscription}
      submit={handleSubmit}
    />
  ) : (
    <Subscriptions
      subscriptions={subscriptions}
      selectSubscription={handleSubscriptionSelected}
    />
  );
}

export default Subscribe;
