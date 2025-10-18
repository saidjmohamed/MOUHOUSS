// pages/Blog.tsx
import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">المدونة القانونية</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">مقالات قانونية ومعلومات مفيدة.</p>
        {/* هنا يمكن إضافة مقالات المدونة */}
      </div>
    </div>
  );
};

export default Blog;