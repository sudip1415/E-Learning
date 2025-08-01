import React, { useState } from 'react';
import { uploadContent } from '../Api';

function UploadContent() {
    const [form, setForm] = useState({
        title: '',
        subject: '',
        description: '',
        file: null
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("subject", form.subject);
        formData.append("description", form.description);
        formData.append("file", form.file);

        try {
            await uploadContent(formData);
            alert("Content uploaded successfully!");
            setForm({
                title: '',
                subject: '',
                description: '',
                file: null
            });
            event.target.reset();
        } catch (error) {
            alert("Upload failed");
            console.error("Upload error:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setForm({
            ...form,
            [name]: name === 'file' ? files[0] : value
        });
    };

    return (
        <div className="w-full min-h-screen bg-gray-900 pt-[72px] p-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-10 mb-10 text-white">
                Upload E-learning Content
            </h1>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-gray-800 rounded-lg shadow-2xl text-white p-6 space-y-4"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    className="w-full border text-white border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 px-3 py-2 rounded resize-none focus:outline-none focus:ring focus:ring-indigo-300"
                />

                <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded file:mr-3 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
                >
                    Upload
                </button>
            </form>
        </div>
    );
}

export default UploadContent;