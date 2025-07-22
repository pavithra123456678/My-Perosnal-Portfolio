import React from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/pavithra-cse',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.24 7h4.5v14H.24V7zM7 7h4.32v2.03h.06c.6-1.14 2.07-2.34 4.25-2.34 4.55 0 5.39 3 5.39 6.89V21H17v-6.89c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.63 1.78-2.63 3.61V21H7V7z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/pavithra123456678',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.287-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.754-1.334-1.754-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.805 1.304 3.49.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.01-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.137 3 .405 2.29-1.552 3.3-1.23 3.3-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.103.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.217.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:spavithraaug8@email.com',
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 13.5l8-6V18H4V7.5l8 6zm0-12l-12 9v12h24V10.5l-12-9z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-6" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
      <p className="text-center mb-6 text-lg text-gray-700 dark:text-gray-300">
        Feel free to reach out via any of the platforms below or send me an email directly.
      </p>
      <div className="flex justify-center space-x-8">
        {socialLinks.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
