import React from 'react';

function Blog() {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-2xl max-w-3xl mx-auto mt-10 border border-blue-200">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Crafting a Better Blog Experience</h1>
      <p className="mb-6 text-gray-600 leading-relaxed">
        Welcome to our blog! Here you'll find valuable insights and engaging content designed to elevate your knowledge and skills.
      </p>

      <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
        <h2 className="text-2xl font-semibold text-blue-700">Key Takeaways</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Understand the fundamentals of web design.</li>
          <li>Explore effective UI/UX strategies.</li>
          <li>Stay updated with modern web trends.</li>
        </ul>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Stay tuned for more insightful content. Don’t forget to subscribe and join our community for updates on the latest trends in web design and development.
      </p>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Read More Articles
        </button>
      </div>
    </div>
  );
}

export default Blog;
