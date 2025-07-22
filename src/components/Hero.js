// src/components/Hero.js
import React from "react"; // No need for useState here as it's managed in App.js

// Receive showResume and handleShowResume as props from App.js
const Hero = ({ showResume, handleShowResume }) => {
  return (
    // Added Tailwind CSS classes for gradient background and ensured text color contrast
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 flex flex-col items-center justify-center text-center h-screen pt-20 px-4 text-white">
      <h1 className="text-5xl font-extrabold mb-2">S E PAVITHRA</h1>
      {/* Adjusted text color for better visibility on a dark gradient */}
      <h2 className="text-2xl text-indigo-200 mb-4">Web Developer</h2>
      <p className="max-w-xl text-lg mb-4">Crafting intuitive and powerful web experiences.</p>
      <p className="max-w-xl">
        Motivated and detail-oriented Full Stack Developer passionate about creating innovative software solutions.
      </p>
      <button
        onClick={handleShowResume} // Use the handler passed via props
        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        {showResume ? "Hide Resume" : "Show Resume"}
      </button>
      {/* Removed the conditional resume content from here, as App.js will render <Resume /> separately */}
    </section>
  );
};

export default Hero;