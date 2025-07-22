// src/components/Resume.js
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">My Resume</h2>
      <p className="mb-6 text-gray-700">Click below to view or download my resume.</p>
      <a
        href="/Pavithra S E Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
      >
        View / Download Resume
      </a>
    </section>
  );
};

export default Resume;
