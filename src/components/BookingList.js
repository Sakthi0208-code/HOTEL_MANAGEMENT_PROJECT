import React from 'react';
import BookingItem from './BookingItem';
import './BookingList.css';

function BookingList({ bookings, onDelete, onUpdate }) {
  return (
    <div className="booking-list">
      <h2>Bookings</h2>
      {bookings.map(booking => (
        <BookingItem key={booking.id} booking={booking} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default BookingList;
