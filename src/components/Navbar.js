// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  const navItems = ["about", "projects", "experience", "contact", "resume"];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Pavithra</h1>
        <ul className="flex space-x-6 capitalize">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
