// src/card/ContentCard.jsx
import React from 'react';

function ContentCard({ title, subject, description, fileName, onDownload }) {
    return (
        <div className="bg-gray-800 p-4 shadow-md rounded-md border border-gray-300 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold text-indigo-500">{title}</h3>
                <p className="text-sm text-white">📘 {subject}</p>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <p className="text-sm font-medium text-gray-500">📎 File: {fileName}</p>
            </div>
            <button
                className="mt-3 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                onClick={() => onDownload(fileName)}
            >
                📥 Download
            </button>
        </div>
    );
}

export default ContentCard;
