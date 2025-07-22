import React, { useState } from 'react';
import './BookingItem.css';

function BookingItem({ booking, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...booking });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(form);
    setEditing(false);
  };

  return (
    <div className="booking-item">
      {editing ? (
        <>
          <input name="name" value={form.name} onChange={handleChange} />
          <input name="roomNumber" value={form.roomNumber} onChange={handleChange} />
          <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} />
          <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p><strong>{booking.name}</strong> - Room {booking.roomNumber}</p>
          <p>{booking.checkIn} to {booking.checkOut}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(booking.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default BookingItem;
