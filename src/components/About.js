// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="mb-4 leading-relaxed">
        I am Pavithra S E, a passionate Full Stack Developer with experience in building web applications
        using modern technologies like React, Node.js, and Tailwind CSS. I enjoy solving complex problems and
        continuously improving my skills.
      </p>
      <p className="mb-4 leading-relaxed">
        I am fluent in English and Tamil and hold certifications like the MongoDB Certificate and Excel – Learn Excel from Beginner to Advanced.
      </p>
      <p>
        I am also a member of the CSI Kancheepuram Chapter and actively participate in community events.
      </p>
    </section>
  );
};

export default About;
