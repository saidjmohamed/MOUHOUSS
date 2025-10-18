// pages/Bookings.tsx
import React from "react";

const Bookings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">حجوزات الاستشارات</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">يمكنك حجز موعد للاستشارة القانونية هنا.</p>
        {/* هنا يمكن إضافة نموذج الحجز */}
      </div>
    </div>
  );
};

export default Bookings;