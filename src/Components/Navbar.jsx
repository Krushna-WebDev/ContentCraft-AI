import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-green-500 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/" className="text-white text-3xl font-extrabold">ContentCraft AI</Link>

                {/* Mobile Menu Icon */}
                <div 
                    className="text-white text-3xl md:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6 text-lg font-semibold">
                    <Link to="/" className="text-white hover:underline">Home</Link>
                    <Link to="/features" className="text-white hover:underline">Features</Link>
                    <Link to="/pricing" className="text-white hover:underline">Pricing</Link>
                    <Link to="/contact" className="text-white hover:underline">Contact</Link>
                    <a 
                        href="#" 
                        className="bg-white text-blue-500 px-5 py-2 rounded-lg font-bold shadow-md 
                        hover:bg-blue-100 transition duration-300"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Navigation Links */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-green-500 p-6 z-10 md:hidden">
                        <div className="flex flex-col space-y-4 text-lg font-semibold">
                            <Link to="/" className="text-white" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/features" className="text-white" onClick={() => setIsOpen(false)}>Features</Link>
                            <Link to="/pricing" className="text-white" onClick={() => setIsOpen(false)}>Pricing</Link>
                            <Link to="/contact" className="text-white" onClick={() => setIsOpen(false)}>Contact</Link>
                            <a 
                                href="/get-started"
                                className="bg-white text-blue-500 px-5 py-2 rounded-lg font-bold shadow-md 
                                hover:bg-blue-100 transition duration-300 text-center"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
