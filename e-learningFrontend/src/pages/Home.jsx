import React from 'react';
import { Link } from 'react-router' // Ensure correct import for routing

const Home = () => {
    return (
        <div className="relative w-full min-h-screen bg-black">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-[72px] text-center text-white">
                {/* pt-[72px] offsets fixed navbar height (approx. 4.5rem) */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to E-Learning Portal</h1>
                <p className="text-base md:text-lg mb-6 max-w-xl">
                    Submit your notes with ease and track your documents in real-time. Built for students and instructors alike.
                </p>
                <Link
                    to="/upload"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-300"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Home;