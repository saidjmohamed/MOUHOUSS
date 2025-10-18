// pages/Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">اتصل بنا</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف.</p>
        {/* هنا يمكن إضافة نموذج الاتصال */}
      </div>
    </div>
  );
};

export default Contact;