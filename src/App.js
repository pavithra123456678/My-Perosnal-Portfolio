// src/App.js
import React from "react";

const skillGroups = [
  {
    label: "AI / ML",
    skills: ["Python", "Machine Learning (XGBoost)", "NLP (TF-IDF, Cosine Similarity)", "Gemini API", "Prompt Engineering"],
  },
  {
    label: "Backend & APIs",
    skills: ["Java", "REST APIs", "JWT Authentication", "MySQL", "MongoDB"],
  },
  {
    label: "Frontend & Tools",
    skills: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Postman"],
  },
  {
    label: "Professional",
    skills: ["Team Work", "Problem-solving", "Adaptability", "Attention to Detail"],
  },
];

const experiences = [
  {
    role: "Cybersecurity Intern",
    company: "NovaNectar Services Pvt. Ltd.",
    location: "Remote",
    duration: "Feb 2025 – May 2025",
    points: [
      "Supported cybersecurity initiatives and maintained security protocols for application deployments.",
      "Conducted vulnerability assessments and documented findings for software improvements.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Codebind Technologies",
    location: "Chennai",
    duration: "Jun 2024",
    points: [
      "Developed and maintained dynamic web applications using HTML, CSS, and JavaScript.",
      "Implemented front-end features in collaboration with designers to improve user experience.",
    ],
  },
  {
    role: "Data Integration Intern",
    company: "NSIIC",
    location: "Chennai",
    duration: "Jul 2023",
    points: [
      "Assisted in integrating and processing data from various sources to streamline operations.",
      "Collaborated with the development team to enhance data accessibility and usability.",
    ],
  },
];

const projects = [
  {
    title: "AI Student Developer Kit",
    tech: ["Python", "NLP", "XGBoost", "Gemini API", "JWT"],
    description:
      "Candidate-role match scoring system using an XGBoost model, with rule-based skill-gap analysis and secure REST APIs.",
  },
  {
    title: "AI Image Generator",
    tech: ["Python", "Gemini API", "Prompt Engineering"],
    description:
      "Multi-step agentic workflow for AI image generation featuring prompt chaining, retry logic, and structured output evaluation.",
  },
  {
    title: "Shrimp Detection System",
    tech: ["Python", "OpenCV"],
    description:
      "Six-stage image processing pipeline for detecting and analyzing shrimp in image data.",
  },
  {
    title: "TaskFlow — Task Management API",
    tech: ["Java", "MySQL", "Postman"],
    description:
      "Task management REST API with core CRUD functionality and basic authentication, validated end-to-end with Postman.",
  },
  {
    title: "Innovative E-Commerce Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive e-commerce platform with product listings, shopping cart, and user authentication.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-400/20 flex justify-between items-center px-6 py-4 z-50">
        <div className="text-xl font-bold tracking-wide text-teal-300">S E PAVITHRA</div>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            {["summary", "skills", "experience", "projects", "education", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-cyan-200 hover:text-lime-400 transition-colors capitalize"
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 flex flex-col items-center justify-center text-center h-screen pt-20 px-4">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-lime-600/20 rounded-full blur-3xl" />

        <span className="relative inline-block mb-4 px-4 py-1 rounded-full bg-lime-500/10 border border-lime-400/30 text-lime-300 text-sm tracking-wide">
          Final-year CSE • CGPA 9.4/10
        </span>
        <h1 className="relative text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-teal-300 to-lime-400 bg-clip-text text-transparent">
          S E PAVITHRA
        </h1>
        <h2 className="relative text-xl md:text-2xl text-lime-300 mb-5 font-medium">
          Software Engineer&nbsp;|&nbsp;AI/ML Enthusiast
        </h2>
        <p className="relative max-w-xl text-cyan-100 mb-8 leading-relaxed">
          Building intelligent systems with NLP, machine learning, and generative AI —
          backed by hands-on full-stack and cybersecurity experience.
        </p>
        <div className="relative flex gap-4 flex-wrap justify-center">
          <a
            href="/Pavithra S E Resume.pdf"
            download="Pavithra S E Resume.pdf"
            className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-teal-900/40 transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border border-cyan-300/20 hover:border-lime-400 hover:text-lime-300 text-cyan-100 font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-lime-400 pb-1 text-teal-300">Summary</h2>
        <p className="text-cyan-100 leading-relaxed text-lg">
          Motivated Computer Science Engineering student with hands-on experience across cybersecurity,
          full-stack development, and data integration internships. Proficient in Python, machine learning
          fundamentals (XGBoost), NLP techniques (TF-IDF, cosine similarity), and generative AI (Gemini API).
          Passionate about applying AI/ML to build practical, intelligent software solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-900/60 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-300">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-slate-950/60 border border-cyan-400/20 rounded-xl p-5 hover:border-lime-400/50 transition-colors"
            >
              <h3 className="font-semibold text-lime-400 mb-4 text-sm uppercase tracking-wider">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-teal-500/10 border border-teal-400/20 text-teal-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-300">Experience</h2>
        <div className="relative border-l border-cyan-400/30 pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-lime-500 ring-4 ring-lime-500/20" />
              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-xl p-6 hover:border-lime-400/40 transition-colors">
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-cyan-50">{exp.role}</h3>
                  <span className="text-lime-300 text-sm font-medium">{exp.duration}</span>
                </div>
                <p className="text-cyan-300 text-sm mb-3">{exp.company} — {exp.location}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-cyan-100 text-sm flex gap-2">
                      <span className="text-lime-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-900/60 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-300">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950/70 border border-cyan-400/20 rounded-xl p-6 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-xl hover:shadow-lime-900/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-teal-300">{project.title}</h3>
              <p className="text-cyan-100 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-teal-500/10 border border-teal-400/20 text-teal-300 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/pavithra123456678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-teal-900/40 transition duration-300"
          >
            Visit GitHub Profile →
          </a>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-300">Education</h2>
        <div className="bg-slate-900/60 border border-cyan-400/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-cyan-50">Bachelor of Technology in Computer Science Engineering</h3>
          <p className="text-cyan-300 mt-1">Hindustan Institute of Technology and Science, Chennai</p>
          <p className="text-lime-300 mt-2 font-medium">CGPA: 9.4 / 10 &nbsp;•&nbsp; Expected Graduation: 2026</p>
          <p className="text-cyan-100 mt-4 text-sm leading-relaxed">
            Core coursework in programming, machine learning, web development, and cybersecurity,
            complemented by hands-on projects and internship experience.
          </p>
          <p className="mt-4 text-sm text-cyan-200">
            <span className="font-semibold text-teal-300">Certification:</span>{" "}
            Oracle Cloud Infrastructure 2025 AI Foundations Associate
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900/60 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-teal-300">Let's Connect</h2>
        <div className="max-w-md mx-auto space-y-3 text-cyan-100">
          <p>
            <a href="mailto:spavithraaug8@gmail.com" className="hover:text-lime-400 transition-colors">
              spavithraaug8@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+918925298656" className="hover:text-lime-400 transition-colors">
              +91-8925298656
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/pavithra-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors"
            >
              linkedin.com/in/pavithra-cse
            </a>
          </p>
          <p>
            <a
              href="https://github.com/pavithra123456678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors"
            >
              github.com/pavithra123456678
            </a>
          </p>
        </div>
        <p className="mt-10 text-xs text-cyan-600">© 2026 S E Pavithra. Built with React & Tailwind CSS.</p>
      </section>
    </div>
  );
}
