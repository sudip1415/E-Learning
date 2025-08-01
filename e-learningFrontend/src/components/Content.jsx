import React, { useEffect, useState } from 'react';
import { downloadFile, getAllContent } from '../Api';
import ContentCard from '../card/ContentCard';

function Content() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        getAllContent().then((res) => setContents(res.data));
    }, []);

    const handleDownload = async (fileName) => {
        try {
            const response = await downloadFile(fileName);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.click();
        } catch (err) {
            console.error("Download error:", err);
            alert("Failed to download file");
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-900 pt-[72px] px-6 pb-10">
            {/* pt-[72px] offsets fixed navbar height */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 mt-10">
                📚 Available E-learning Content
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contents.map((content) => (
                    <ContentCard
                        key={content.id}
                        title={content.title}
                        subject={content.subject}
                        description={content.description}
                        fileName={content.fileName}
                        onDownload={handleDownload}
                    />
                ))}
            </div>

            {contents.length === 0 && (
                <p className="text-center text-gray-400 mt-10">No content available at the moment.</p>
            )}
        </div>
    );
}

export default Content;