import React, { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";

// Just hardcode the version you installed
pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.3.2/pdf.worker.min.js`;
  
const Resume = () => {
  const [showFull, setShowFull] = useState(false);
  const [zoom, setZoom] = useState(50);

  useEffect(() => {
  const updateZoom = () => {
    const screenHeight = window.innerHeight;
    const previewHeight = 500;
    const estimatedZoom = Math.floor((previewHeight / screenHeight) * 100);
    setZoom(estimatedZoom < 30 ? 30 : estimatedZoom);
  };

  updateZoom(); // initial
  window.addEventListener("resize", updateZoom);
  return () => window.removeEventListener("resize", updateZoom);
}, []);


  return (
    <section id="resume" className="py-10 px-4 md:px-8 bg-[#0d0d0d] text-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          My <span className="text-red-500">Resume</span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="/GOKULS_Resume.pdf"
            download
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Download Resume
          </a>
          <button
            onClick={() => setShowFull(true)}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
          >
            View Full Resume
          </button>
        </div>

        {/* Small Preview (Dynamic Zoom) */}
        <div
          className="w-full shadow-lg rounded-lg overflow-hidden border border-gray-800 mx-auto"
          style={{ maxWidth: "800px", height: "500px" }}
        >
          <iframe
            title="Gokul S Resume Preview"
            src={`/GOKULS_Resume.pdf#zoom=${zoom}`}
            width="100%"
            height="100%"
            className="border-none"
          ></iframe>
        </div>
      </div>

      {/* Full Screen Modal */}
      {showFull && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setShowFull(false)}
            className="mb-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition"
          >
            Close
          </button>
          <iframe
            title="Gokul S Resume Full View"
            src="/GOKULS_Resume.pdf"
            width="90%"
            height="90%"
            className="border-none rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Resume;
