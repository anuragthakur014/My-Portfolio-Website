import React from 'react';
import { Instagram, Linkedin, Github, Heart, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/anurag_thakur__14',
      color: 'hover:text-pink-400',
      bgHover: 'hover:bg-pink-500/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/anuragthakur014',
      color: 'hover:text-white',
      bgHover: 'hover:bg-gray-500/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/anurag-kumar-1351a7372',
      color: 'hover:text-blue-400',
      bgHover: 'hover:bg-blue-500/10'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-slate-800/50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#b77ae6] to-[#4fc3f7] bg-clip-text text-transparent">
              Anurag Thakur
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Diploma Student passionate about web development and creating innovative digital solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} className="text-[#4fc3f7]" />
              <span>Surat, Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#4fc3f7] transition-colors duration-300 text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#4fc3f7] transition-colors"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-[#1a1d2e] border border-slate-700/50 ${social.color} ${social.bgHover} transition-all duration-300 hover:scale-110 hover:border-slate-600 group`}
                  aria-label={social.name}
                >
                  <social.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@anuragthakur.com"
              className="flex items-center gap-2 text-gray-400 hover:text-[#4fc3f7] transition-colors text-sm mt-4"
            >
              <Mail size={16} />
              <span>Available on request</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 Anurag Thakur. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 animate-pulse" fill="currentColor" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-[#b77ae6] to-[#4fc3f7] rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 text-white transition-transform group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}