import React from 'react';

const Contact = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Get in Touch with Us</h2>
                <p className="text-gray-600 mb-12">
                    Have questions or need support? We're here to help.
                </p>

                <div className="bg-gray-100 p-8 rounded-xl shadow-md">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-left text-sm font-medium text-gray-700">Name</label>
                            <input 
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-sm font-medium text-gray-700">Message</label>
                            <textarea 
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-12 text-left">
                    <p className="text-lg font-semibold">Contact Information:</p>
                    <p>Email: <a href="mailto:krushna.webdev26@gmail.com" className="text-blue-500">Krushna.webdev26@gmail.com</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
