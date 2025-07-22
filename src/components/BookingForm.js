import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onAddBooking }) => {
  const [form, setForm] = useState({
    name: '',
    roomNumber: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.roomNumber || !form.checkIn || !form.checkOut) {
      alert('Please fill all fields');
      return;
    }

    onAddBooking(form);
    setForm({
      name: '',
      roomNumber: '',
      checkIn: '',
      checkOut: ''
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Room</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="roomNumber"
        placeholder="Room Number"
        value={form.roomNumber}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="checkIn"
        value={form.checkIn}
        onChange={handleChange}
        onFocus={(e) => e.target.showPicker && e.target.showPicker()}
        required
      />
      <input
        type="date"
        name="checkOut"
        value={form.checkOut}
        onChange={handleChange}
        onFocus={(e) => e.target.showPicker && e.target.showPicker()}
        required
      />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
