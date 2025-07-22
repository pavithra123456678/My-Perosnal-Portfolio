// src/App.js
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-md flex justify-between items-center px-6 py-4 z-50">
        <div className="text-xl font-bold">S E PAVITHRA</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#summary" className="hover:text-indigo-400">Summary</a></li>
            <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
            <li><a href="#experience" className="hover:text-indigo-400">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
            <li><a href="#education" className="hover:text-indigo-400">Education</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - Now with gradient and "Download Resume" button, linking to your specific PDF filename */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 flex flex-col items-center justify-center text-center h-screen pt-20 px-4 text-white">
        <h1 className="text-5xl font-extrabold mb-2">S E PAVITHRA</h1>
        {/* Adjusted text color for contrast on dark gradient */}
        <h2 className="text-2xl text-indigo-200 mb-4">Web Developer</h2>
        <p className="max-w-xl mb-4">
          Crafting intuitive and powerful web experiences.
        </p>
        <p className="max-w-xl">
          Motivated and detail-oriented Full Stack Developer passionate about creating innovative software solutions.
        </p>
        {/* Updated href to match your exact resume filename */}
        <a
          href="/Pavithra S E Resume.pdf" // <--- CHANGED THIS LINE
          download="Pavithra S E Resume.pdf" // This suggests the filename for the user's download
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Download Resume
        </a>
      </section>

      {/* Summary */}
      <section id="summary" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-indigo-400 inline-block">Summary</h2>
        <p>
          Motivated and detail-oriented Full Stack Developer with hands-on experience in web development and data integration acquired through internships. Proficient in Python, data structures, algorithms, and object-oriented programming. Passionate about leveraging cutting-edge technologies to create innovative solutions in software development.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-indigo-400 inline-block max-w-4xl mx-auto">Professional & Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Professional Skills */}
          <div>
            <h3 className="font-semibold mb-3 text-indigo-400">Professional Skills</h3>
            <ul className="space-y-2">
              {["Team Work", "Problem-solving", "Adaptability", "Attention to Detail"].map(skill => (
                <li key={skill} className="bg-gray-700 rounded-md py-2">{skill}</li>
              ))}
            </ul>
          </div>
          {/* Technical Skills */}
          <div>
            <h3 className="font-semibold mb-3 text-indigo-400">Technical Skills</h3>
            <ul className="space-y-2">
              {["Python", "HTML", "CSS", "JavaScript"].map(skill => (
                <li key={skill} className="bg-gray-700 rounded-md py-2">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-indigo-400 inline-block">Professional Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Cybersecurity Intern | NovaNectar Services Pvt. Ltd.</h3>
            <p className="italic text-indigo-400">Feb 2025 – May 2025</p>
            <ul className="list-disc list-inside">
              <li>Supported cybersecurity initiatives and maintained security protocols for application deployments.</li>
              <li>Conducted vulnerability assessments and documented findings for software improvements.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Web Development Intern | CodeBind Technologies</h3>
            <p className="italic text-indigo-400">June 2023 – June 2024</p>
            <ul className="list-disc list-inside">
              <li>Developed and maintained dynamic web applications using HTML, CSS, and JavaScript.</li>
              <li>Implemented front-end features in collaboration with designers to improve user experience.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Data Integration Intern | NSIIC Hyderabad</h3>
            <p className="italic text-indigo-400">July 2022</p>
            <ul className="list-disc list-inside">
              <li>Assisted in integrating and processing data from various sources to streamline operations.</li>
              <li>Collaborated with the development team to enhance data accessibility and usability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-indigo-400 inline-block max-w-4xl mx-auto">Projects</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Innovative E-Commerce Website</h3>
            <p className="italic text-indigo-400">Technologies: HTML, CSS, JavaScript</p>
            <p>Designed and developed a responsive e-commerce platform, implementing features such as product listings, shopping carts, and user authentication.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">AI Image Generator Web Application</h3>
            <p className="italic text-indigo-400">Technologies: HTML, CSS, JavaScript, Hugging Face API (Stable Diffusion), Generative AI</p>
            <p>Developed a web application that generates images using AI algorithms, enhancing user engagement through interactive features.</p>
          </div>
          {/* Add a direct link to your GitHub profile for more projects */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 border-b border-indigo-300 pb-2">More on GitHub</h3>
            <p>You can find more of my projects and contributions on my GitHub profile:</p>
            <a href="https://github.com/pavithra123456678" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Visit GitHub Profile →
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-indigo-400 inline-block">Education</h2>
        <p>
          Bachelor of Technology in Computer Science <br />
          Hindustan Institute of Technology and Science | Expected Graduation: 2026
        </p>
        <p className="mt-4">
          Focused academic coursework in core computer science areas including programming, web development, AI, and cybersecurity, with hands-on projects and internship experience complementing theoretical knowledge.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-indigo-400 inline-block">Contact</h2>
        <p>Email: <a href="mailto:spavithraaug8@email.com" className="text-indigo-400 hover:underline">spavithraaug8@email.com</a></p>
        <p className="mt-2">Phone: <a href="tel:+918925298656" className="text-indigo-400 hover:underline">+91-8925298656</a></p>
        <p className="mt-2">
          LinkedIn: <a href="https://linkedin.com/in/pavithra-cse" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">linkedin.com/in/pavithra-cse</a>
        </p>
        <p className="mt-2">
          GitHub: <a href="https://github.com/pavithra123456678" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">github.com/pavithra123456678</a>
        </p>
      </section>
    </div>
  );
}