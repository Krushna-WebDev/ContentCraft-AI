import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold">ContentCraft AI</h1>
          <p className="mt-2 text-gray-400">
            Create Content That Ranks & Converts!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-blue-400">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a href="https://x.com" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/krushna-web-dev-2b347b353"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Krushna-WebDev"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* CTA + Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          © 2025 Krushna Web Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
