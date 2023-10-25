import React from "react";
import { Typography, Container } from "@mui/material";

const Confirmation = ({ details }) => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Booking Confirmation
      </Typography>
      <Typography variant="body1">
        Thank you {details.name} for your booking on {details.date} at{" "}
        {details.time} for {details.numberOfGuests} guests.
      </Typography>
    </Container>
  );
};

export default Confirmation;
