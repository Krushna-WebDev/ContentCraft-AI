import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Powerful Features to Boost Your Content Creation</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature Cards */}
                    <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">AI-Powered Writing</h3>
                        <p>Generate high-quality content quickly with AI-driven writing tools that understand your niche and audience.</p>
                    </div>
                    <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">SEO Optimization</h3>
                        <p>Enhance your content's visibility with built-in SEO suggestions and keyword integration.</p>
                    </div>
                    <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Content Templates</h3>
                        <p>Access pre-designed templates for blogs, social media posts, and email campaigns.</p>
                    </div>
                    <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Real-time Collaboration</h3>
                        <p>Work with your team efficiently using shared documents and instant updates.</p>
                    </div>
                    <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Plagiarism Checker</h3>
                        <p>Ensure content originality with integrated plagiarism detection tools.</p>
                    </div>
                    <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Content Scheduler</h3>
                        <p>Plan, schedule, and publish your content with ease using our intuitive calendar system.</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white text-blue-500 mt-16 p-8 rounded-lg shadow-md text-center">
                    <h3 className="text-3xl font-bold mb-4">Start Creating Stunning Content Today!</h3>
                    <p className="mb-6">Boost your productivity and achieve your content marketing goals effortlessly.</p>
                    <Link to="/get-started" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                        Get Started Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Features;