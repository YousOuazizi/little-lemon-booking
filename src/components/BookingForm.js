import React, { useState } from "react";
import { Button, TextField, Container } from "@mui/material";

const BookingForm = ({ onBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    numberOfGuests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBooking(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Your Name"
          name="name"
          value={formData.name} // Corrected here
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="date"
          name="date"
          value={formData.date} // Corrected here
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="time"
          name="time"
          value={formData.time} // Corrected here
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="number"
          label="Number of Guests"
          name="numberOfGuests"
          value={formData.numberOfGuests} // Corrected here
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Book Table
        </Button>
      </form>
    </Container>
  );
};

export default BookingForm;
