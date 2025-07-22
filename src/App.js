import React, { useEffect, useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';

function App() {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from db.json
  useEffect(() => {
    fetch('http://localhost:3001/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, []);

  const addBooking = (newBooking) => {
    const isConflict = bookings.some(
      b => b.roomNumber === newBooking.roomNumber && b.checkIn === newBooking.checkIn
    );

    if (isConflict) {
      alert('Room already booked for that check-in date!');
      return;
    }

    fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBooking)
    })
      .then(res => res.json())
      .then(data => setBookings(prev => [...prev, data]));
  };

  const deleteBooking = (id) => {
    fetch(`http://localhost:3001/bookings/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setBookings(prev => prev.filter(b => b.id !== id));
    });
  };

  const updateBooking = (updated) => {
    fetch(`http://localhost:3001/bookings/${updated.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    }).then(res => res.json())
      .then(data => {
        setBookings(prev =>
          prev.map(b => (b.id === data.id ? data : b))
        );
      });
  };

  return (
    <div className="container">
      <h1 className="title">🏨 Hotel Management System</h1>
      <BookingForm onAddBooking={addBooking} />
      <BookingList bookings={bookings} onDelete={deleteBooking} onUpdate={updateBooking} />
    </div>
  );
}

export default App;
