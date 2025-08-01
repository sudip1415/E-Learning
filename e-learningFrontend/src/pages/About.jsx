import React from 'react';

function About() {
    return (
        <div className="w-full px-6 py-10 pt-24 bg-gray-900 text-gray-800 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">About</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-300 mb-2">🎯 Purpose</h2>
                <p className="text-gray-400">
                    This platform simplifies academic documensts submissions. Students can securely upload their work,notes and refer it for studies and for exams.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-300 mb-2">✨ Key Features</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Secure file upload and download</li>
                    <li>Real-time submission tracking</li>
                    <li>Student and instructor dashboards</li>
                    <li>Deadline reminders and notifications</li>
                    <li>MongoDB-based storage with metadata handling</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-300 mb-2">🛠️ Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li><span className="font-medium text-white">Frontend:</span> ReactJS, Axios, Tailwind CSS</li>
                    <li><span className="font-medium text-white">Backend:</span> Spring Boot, Java</li>
                    <li><span className="font-medium text-white">Database:</span> MongoDB with GridFS</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-300 mb-2">👨‍💻 Developer Note</h2>
                <p className="text-gray-400">
                    Built with a focus on modularity, scalability, and user experience, this project showcases full-stack development using modern technologies.
                </p>
            </section>
        </div>
    );
}

export default About;