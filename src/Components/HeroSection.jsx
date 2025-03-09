import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-5xl font-extrabold mb-4">
        Unlock the Power of AI for Effortless Content Creation
      </h1>
      <p className="text-white text-lg mb-6">
        Create high-quality, SEO-optimized content in seconds. Write smarter, not harder.
      </p>

      <div className="flex items-center gap-2 w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Enter what you want to create..."
          className="flex-1 p-2 text-black bg-white border border-gray-300 rounded-md outline-none"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
          Create
        </button>
      </div>

      <button className="bg-gradient-to-r curse-pointer font-bold from-blue-600 to-blue-400 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;