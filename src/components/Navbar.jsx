import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Home, User, Briefcase, Send, Code } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavSolid(scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, color: 'text-indigo-400' },
    { id: 'about', label: 'About', icon: User, color: 'text-teal-400' },
    { id: 'projects', label: 'Projects', icon: Briefcase, color: 'text-pink-500' },
    { id: 'contact', label: 'Contact', icon: Send, color: 'text-orange-500' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        navSolid 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <button 
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <Code className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Anurag <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Thakur</span>
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group ${
                  activeSection === item.id
                    ? 'text-white bg-gray-800/50'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <item.icon 
                  className={`w-5 h-5 ${item.color} transition-transform group-hover:scale-110`} 
                />
                <span className="font-medium">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/anurag-kumar-1351a7372" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-[#0e76a8] hover:text-blue-400 hover:scale-110 hover:border-gray-600 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/anuragthakur014" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-[#6cc644] hover:text-green-300 hover:scale-110 hover:border-gray-600 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white hover:border-gray-600 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gray-800/50 text-white border border-gray-700/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="pt-6 mt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-3 px-4">Connect with me</p>
              <div className="flex gap-3 px-4">
                <a 
                  href="https://www.linkedin.com/in/anurag-kumar-1351a7372" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-[#0e76a8] hover:text-blue-400 hover:border-gray-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/anuragthakur014" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-[#6cc644] hover:text-green-300 hover:border-gray-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient accent line */}
      {navSolid && (
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      )}
    </nav>
  );
}