// pages/Bookings.tsx
import React, { useState, useEffect } from "react";
import { supabase } from "../src/supabaseClient";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select("*");
      if (error) {
        console.error("Error fetching bookings:", error);
      } else {
        setBookings(data);
      }
      setLoading(false);
    };
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">حجوزات الاستشارات</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {loading ? (
          <p className="text-center">جارٍ تحميل الحجوزات...</p>
        ) : (
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id} className="border-b py-2">
                <p>التاريخ: {new Date(booking.date).toLocaleString()}</p>
                <p>الخدمة: {booking.service}</p>
                <p>الحالة: {booking.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bookings;