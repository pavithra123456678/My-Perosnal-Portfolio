import React from 'react';

const experiences = [
  {
    role: 'Data Integration Intern',
    company: 'NSIIC Hyderabad',
    duration: 'July 2022',
    details: [
      'Assisted in integrating and processing data from various sources to streamline operations.',
      'Collaborated with the development team to enhance data accessibility and usability.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'CodeBind Technologies',
    duration: 'June 2023 – June 2024',
    details: [
      'Developed and maintained dynamic web applications using HTML, CSS, and JavaScript.',
      'Implemented front-end features in collaboration with designers to improve user experience.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'NovaNectar Services Pvt. Ltd.',
    duration: 'Feb 2025 – May 2025',
    details: [
      'Supported cybersecurity initiatives and maintained security protocols for application deployments.',
      'Conducted vulnerability assessments and documented findings for software improvements.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto p-6" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map(({ role, company, duration, details }, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="fade-right"
            data-aos-delay={idx * 150}
          >
            <h3 className="text-2xl font-semibold">{role}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {company} — <span className="text-gray-600 dark:text-gray-400">{duration}</span>
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
              {details.map((point, i) => (
                <li key={i} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
