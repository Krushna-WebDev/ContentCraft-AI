import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "AI-Powered Writing",
      description:
        "Leverage cutting-edge AI to create engaging and SEO-optimized content in seconds.",
      icon: "🧠",
    },
    {
      title: "Time-Saving Automation",
      description:
        "Generate high-quality content quickly, saving hours of manual writing.",
      icon: "⏱️",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your rankings with content that's crafted to perform well in search engines.",
      icon: "📈",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Easily generate content with an intuitive and simple interface.",
      icon: "🖥️",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">Why Choose ContentCraft AI?</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Experience the power of AI for smarter, faster content creation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-lg">{benefit.title}</h3>
              <p className="text-sm mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
