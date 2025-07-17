import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {
  FaBars, FaTimes, FaLinkedin, FaGithub,
  FaHome, FaUser, FaProjectDiagram, FaEnvelope
} from 'react-icons/fa';

export default function Navbar() {
  const [navSolid, setNavSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: 'home', icon: <FaHome className="text-indigo-400" /> },
    { name: 'about', icon: <FaUser className="text-teal-400" /> },
    { name: 'projects', icon: <FaProjectDiagram className="text-pink-500" /> },
    { name: 'contact', icon: <FaEnvelope className="text-orange-500" /> },
  ];

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY >= window.innerHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full flex items-center px-6 py-4 z-50 transition-colors duration-300 ${
      navSolid ? 'bg-gray-900 text-white' : 'bg-transparent text-white'
    }`}>
      <div className="font-bold text-xl hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] hover:text-blue-200 transition duration-300">
        Anurag Thakur!
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex flex-1 justify-center space-x-6">
        {navItems.map(({ name, icon }) => (
          <li key={name}>
            <Link
              to={name} smooth duration={500}
              className="flex items-center space-x-1 cursor-pointer text-lg hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] transition duration-300"
            >
              <span className="text-xl">{icon}</span>
              <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social & mobile */}
      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/..." target="_blank" rel="noopener noreferrer"
           className="text-[#0e76a8] hover:text-blue-400 transition duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/..." target="_blank" rel="noopener noreferrer"
           className="text-[#6cc644] hover:text-green-300 transition duration-300">
          <FaGithub size={30} />
        </a>
        <div className="md:hidden ml-2" onClick={() => setOpen(!open)}>
          {open
            ? <FaTimes size={24} className="text-pink-500" />
            : <FaBars size={24} className="text-indigo-400" />
          }
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          {navItems.map(({ name, icon }) => (
            <li key={name} className="flex items-center space-x-2">
              <Link to={name} smooth duration={500} onClick={() => setOpen(false)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <span className="text-xl">{icon}</span>
                <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
