import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from './images/im1.png';


export default function Navbar() {
  const [navSolid, setNavSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = ['home', 'about', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // When you scroll past the top of "About" section → make navbar solid
      if (window.scrollY >= window.innerHeight) {
        setNavSolid(true);
      } else {
        setNavSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full flex items-center px-6 py-4 z-50 transition-colors duration-300 ${
        navSolid ? 'bg-gray-900 text-white' : 'bg-transparent text-white'
      }`}
    >
      {/* Left: Site title */}
      <div className="font-bold text-xl  
                   hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]
                   hover:text-blue-200
                   transition duration-300" >
        Anurag Thakur !
        </div>

      {/* Center: Nav links */}
      <ul className="hidden md:flex flex-1 justify-center space-x-6">
        {navItems.map((s) => (
          <li key={s}>
            <Link
              to={s}
              smooth
              duration={500}
              className="cursor-pointer text-lg  text-white mt-10 mb-8
                   hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]
                   hover:text-red-700
                   transition duration-300"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Logo, socials, mobile toggle */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 inline-block animate-bounce"
        />
        <a
          href="https://www.linkedin.com/in/anurag-kumar-1351a7372"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-blue-800 hover:text-blue-400"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/anuragthakur014"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-green-800 hover:text-green-300"
        >
          <FaGithub size={30} />
        </a>

        <div className="md:hidden ml-2" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {open && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          {navItems.map((s) => (
            <li key={s}>
              <Link
                to={s}
                smooth
                duration={500}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-400"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
