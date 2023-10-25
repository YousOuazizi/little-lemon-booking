import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});

  const handleBooking = (details) => {
    setIsSubmitted(true);
    setBookingDetails(details);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Little Lemon Restaurant Booking
      </Typography>
      {isSubmitted ? (
        <Confirmation details={bookingDetails} />
      ) : (
        <BookingForm onBooking={handleBooking} />
      )}
    </Container>
  );
};

export default App;
