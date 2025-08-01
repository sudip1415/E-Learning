import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Branding */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">E-Learning Portal</h2>
                    <p className="text-sm text-gray-400">
                        A modern platform for submitting and managing notes with ease.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link to="/upload" className="hover:text-white transition">Upload</Link></li>
                        <li><Link to="/viewContent" className="hover:text-white transition">View Content</Link></li>
                        <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                    </ul>
                </div>

                {/* Contact or Note */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Developer Note</h3>
                    <p className="text-sm text-gray-400">
                        Built using ReactJS, Spring Boot, and MongoDB. Designed for scalability, security, and user experience.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} E-Learning Portal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;