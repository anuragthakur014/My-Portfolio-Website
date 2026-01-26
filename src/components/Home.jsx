import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Send, User } from 'lucide-react';
// import characterImage from './images/im4.jpg'; // Uncomment this when you have your image

const cvFilePath = '/cv/my_resume.pdf';  // cv path in public folder
export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // For now using a placeholder - replace with your actual image
  const characterImage = require('./images/im4.jpg'); // Set to your image path when ready

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-black">
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
        {/* Animated Linear Grid Background */}
        <div className="absolute inset-0 -z-10 w-full h-full bg-black">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-black to-purple-950/30"></div>
          
          {/* Linear Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'rgb(99, 102, 241)', stopOpacity: 0.3}} />
                <stop offset="50%" style={{stopColor: 'rgb(236, 72, 153)', stopOpacity: 0.2}} />
                <stop offset="100%" style={{stopColor: 'rgb(249, 115, 22)', stopOpacity: 0.3}} />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated Lines */}
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.3">
              <animate attributeName="y1" values="20%;80%;20%" dur="20s" repeatCount="indefinite" />
              <animate attributeName="y2" values="20%;80%;20%" dur="20s" repeatCount="indefinite" />
            </line>
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.3">
              <animate attributeName="y1" values="60%;10%;60%" dur="25s" repeatCount="indefinite" />
              <animate attributeName="y2" values="60%;10%;60%" dur="25s" repeatCount="indefinite" />
            </line>
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.3">
              <animate attributeName="x1" values="20%;80%;20%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="x2" values="20%;80%;20%" dur="30s" repeatCount="indefinite" />
            </line>
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.3">
              <animate attributeName="x1" values="70%;30%;70%" dur="35s" repeatCount="indefinite" />
              <animate attributeName="x2" values="70%;30%;70%" dur="35s" repeatCount="indefinite" />
            </line>
          </svg>

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: i % 3 === 0 ? 'rgba(99, 102, 241, 0.6)' : i % 3 === 1 ? 'rgba(236, 72, 153, 0.6)' : 'rgba(249, 115, 22, 0.6)',
                boxShadow: `0 0 ${Math.random() * 20 + 10}px ${i % 3 === 0 ? 'rgba(99, 102, 241, 0.8)' : i % 3 === 1 ? 'rgba(236, 72, 153, 0.8)' : 'rgba(249, 115, 22, 0.8)'}`,
                animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}

          {/* Mouse Follow Glow */}
          <div 
            className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-1000 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-3 animate-[slideInLeft_0.8s_ease-out_forwards]">
              <h2 className="text-2xl md:text-3xl font-light text-gray-300">Hello,</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                I'm 
                <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'> Anurag</span> <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                   Thakur !
                </span>
              </h1>
            </div>
            
            <div className="space-y-3 animate-[slideInLeft_0.8s_ease-out_0.2s_forwards]">
              <p className="text-xl md:text-2xl text-gray-300 font-light">I'm a Diploma Final year student.</p>
              <p className="text-lg md:text-xl text-gray-400">This is my portfolio website.</p>
            </div>

            <div className="flex flex-wrap gap-4 animate-[slideInLeft_0.8s_ease-out_0.4s_forwards]">
              <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full font-semibold text-white transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 group">
                <a href={cvFilePath} download="Anurag_Thakur_CV.pdf" className="flex items-center gap-3">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
                </a>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-3 px-8 py-4 border-2 border-indigo-500 text-white rounded-full font-semibold transition-all transform hover:scale-105 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/50"
              >
                <Send className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 animate-[slideInLeft_0.8s_ease-out_0.6s_forwards]">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all">
                <div className="text-3xl font-bold text-indigo-400">3+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-pink-500/50 transition-all">
                <div className="text-3xl font-bold text-pink-400">1+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all">
                <div className="text-3xl font-bold text-orange-400">9+</div>
                <div className="text-sm text-gray-400">Skills</div>
              </div>
            </div>
          </div>

          {/* Right 3D Character Illustration */}
          <div className="relative animate-[slideInRight_1s_ease-out_0.3s_forwards]">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated Glow Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 border-t-indigo-500"></div>
              </div>
              <div className="absolute inset-4 animate-spin-reverse">
                <div className="absolute inset-0 rounded-full border-2 border-pink-500/30 border-t-pink-500"></div>
              </div>
              
              {/* Central Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Character Container with Circular Image Frame - PROFESSIONAL */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Main Card Container */}
                <div className="relative w-96 h-[28rem] bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90 rounded-[2rem] backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-6">
                    
                    {/* Circular Image Frame with Enhanced Gradient Border */}
                    <div className="relative">
                      {/* Outer Glow Ring */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                      
                      {/* Image Container with Gradient Border */}
                      <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 shadow-lg">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center ring-2 ring-white/10">
                          {characterImage ? (
                            <img 
                              src={characterImage} 
                              alt="Anurag Thakur" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.log('Image failed to load');
                                e.target.style.display = 'none';
                              }}
                            />
                          ) : (
                            // Professional Placeholder
                            <div className="w-full h-full bg-gradient-to-br from-indigo-500/90 via-purple-600/90 to-pink-500/90 flex items-center justify-center">
                              <User className="w-24 h-24 text-white/90 drop-shadow-lg" strokeWidth={1.5} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Anurag Thakur
                      </h3>
                      {/* Option 1: Diploma Student (Default - Uncommented) */}
                      <p className="text-sm text-gray-400 font-medium tracking-wide">
                        Diploma Final Year Student
                      </p>
                      {/* Option 2: Full Stack Developer (Commented Out) */}
                      {/* <p className="text-sm text-gray-400 font-medium tracking-wide">
                        Full Stack Developer
                      </p> */}
                    </div>

                    {/* Professional Info Lines */}
                    <div className="space-y-3 w-full max-w-xs">
                      <div className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"></div>
                      <div className="flex items-center justify-center gap-3">
                        <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-500 to-purple-500 rounded-full"></div>
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 rounded-full"></div>
                        <div className="h-1 w-16 bg-gradient-to-r from-pink-500 via-orange-500 to-transparent rounded-full"></div>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
                    </div>

                    {/* Decorative Corner Accents */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-indigo-500/50 rounded-tl-2xl"></div>
                    <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-purple-500/50 rounded-tr-2xl"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-purple-500/50 rounded-bl-2xl"></div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-pink-500/50 rounded-br-2xl"></div>
                  </div>
                  
                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-[fadeIn_0.8s_ease-out_1s_forwards] group"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2 group-hover:text-indigo-400 transition-colors">Scroll Down</span>
            <ChevronDown className="w-8 h-8 text-indigo-400 animate-bounce group-hover:text-pink-400 transition-colors" />
          </div>
        </button>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}