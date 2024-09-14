import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container">
      <h2>My Bookings</h2>
      <ul className="list-group">
        {bookings.map(booking => (
          <li key={booking._id} className="list-group-item">
            {booking.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingManagement;
