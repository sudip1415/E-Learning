import React, { useState } from 'react';
import { Link } from 'react-router';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full max-h-7xl bg-gray-900 p-1 opacity-90 text-white fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 gap-2.5 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">E-learning Portal</Link>

                {/* Hamburger */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex  space-x-20">
                    <Link className="hover:text-blue-400 text-lg" to="/">Home</Link>
                    <Link className="hover:text-blue-400 text-lg" to="/upload">Upload</Link>
                    <Link className="hover:text-blue-400 text-lg" to="/viewContent">View</Link>
                    <Link className="hover:text-blue-400 text-lg" to="/about">About</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
                    <Link className="block text-white hover:text-blue-400 text-lg" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link className="block text-white hover:text-blue-400 text-lg" to="/upload" onClick={() => setIsOpen(false)}>Upload</Link>
                    <Link className="block text-white hover:text-blue-400 text-lg" to="/viewContent" onClick={() => setIsOpen(false)}>View</Link>
                    <Link className="block text-white hover:text-blue-400 text-lg" to="/about" onClick={() => setIsOpen(false)}>About</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;