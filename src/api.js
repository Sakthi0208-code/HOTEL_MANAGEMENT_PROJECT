export const API = "http://localhost:5000/bookings";

export const fetchBookings = () => fetch(API).then(res => res.json());
export const createBooking = data =>
  fetch(API, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json());

export const updateBooking = (id, data) =>
  fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(res => res.json());

export const deleteBooking = id =>
  fetch(`${API}/${id}`, { method: "DELETE" }).then(res => res.json());
