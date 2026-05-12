import React, { useState } from 'react';
import { User, Code, Briefcase, Award } from 'lucide-react';

// Add your image import here
const characterImage = require('./images/im4.jpg');

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'HTML', level: 90, icon: 'htmlIcon', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, icon: 'cssIcon', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 80, icon: 'jsIcon', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 85, icon: 'reactjsIcon', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 75, icon: 'nodejsIcon', color: 'from-green-500 to-green-700' },
    { name: 'Laravel', level: 75, icon: 'laravelIcon', color: 'from-red-500 to-orange-500' },
    { name: 'php', level: 75, icon: 'phpIcon', color: 'from-blue-700 to-blue-900' },
    { name: 'MySQL', level: 80, icon: 'mysqlIcon', color: 'from-blue-600 to-blue-800' },
    { name: 'MongoDB', level: 75, icon: 'mongodbIcon', color: 'from-green-500 to-green-700' },
    { name: 'Git', level: 80, icon: 'gitIcon', color: 'from-blue-400 to-blue-600' },
    { name: 'GitHub', level: 85, icon: 'githubIcon', color: 'from-green-700 to-green-900' },
    { name: 'Tailwind Css', level: 75, icon: 'tailwindIcon', color: 'from-blue-700 to-blue-900' },
    { name: 'Java (Basic)', level: 65, icon: 'javaIcon', color: 'from-red-600 to-orange-600' },
    { name: 'Python', level: 75, icon: 'pythonIcon', color: 'from-blue-400 to-yellow-500' },
    { name: 'Bootstrap', level: 80, icon: 'bootstrapIcon', color: 'from-purple-500 to-pink-500' },
    
  ];

  const experience = [
    { 
      year: '2025-2026', 
      title: 'Diploma Final Year', 
      place: 'Vidhyadeep University',
      desc: 'Working on final year project, building full-stack applications and preparing for career'
    },
    { 
      year: '2024-2025', 
      title: 'Advanced Web Development', 
      place: 'Second Year Diploma',
      desc: 'Deep dive into React, JavaScript frameworks, and modern web technologies with multiple projects'
    },
    { 
      year: '2023-2024', 
      title: 'Programming & Web Fundamentals', 
      place: 'First Year Diploma',
      desc: 'Learned HTML, CSS, JavaScript, Java, Python, and MySQL - built strong foundation in programming'
    },
    { 
      year: '2023', 
      title: 'Started Diploma Journey', 
      place: 'Vidhyadeep University',
      desc: 'Enrolled in Diploma program and discovered passion for web development and coding'
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16 animate-[fadeIn_0.8s_ease-out_forwards]">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1 animate-[slideInLeft_0.8s_ease-out_forwards]">
            <div className="bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90 rounded-3xl p-8 border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 sticky top-24">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                <div className="relative w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center ring-2 ring-white/10">
                    {characterImage ? (
                      <img src={characterImage} alt="Anurag Thakur" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-24 h-24 text-white/80" />
                    )}
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Anurag Kumar Thakur
                </h3>
                <p className="text-gray-400 text-lg">Diploma Student</p>
                <p className="text-sm text-gray-500">Vidhyadeep University</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">3+</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">15+</div>
                  <div className="text-xs text-gray-500">Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2 animate-[slideInRight_0.8s_ease-out_forwards]">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 bg-slate-900/50 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('about')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'about'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <User className="w-5 h-5 inline mr-2" />
                About
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Code className="w-5 h-5 inline mr-2" />
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5 inline mr-2" />
                Journey
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-slate-900/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm min-h-[500px]">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-6 animate-[fadeIn_0.5s_ease-out_forwards]">
                  <h3 className="text-3xl font-bold text-white mb-4">Get to know me</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Hi! I'm <span className="text-indigo-400 font-semibold">Anurag Kumar Thakur</span>, 
                    a passionate Diploma student currently studying at <span className="text-purple-400 font-semibold">Vidhyadeep University</span>. 
                    I'm dedicated to learning and mastering modern web development technologies.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My journey in tech has been driven by curiosity and a desire to build meaningful projects. 
                    I enjoy solving problems through code and creating applications that make a difference.
                  </p>

                  {/* Interests */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all">
                      <Award className="w-8 h-8 text-indigo-400 mb-3" />
                      <h4 className="text-xl font-semibold text-white mb-2">What I Do</h4>
                      <p className="text-gray-400 text-sm">Full-stack web development, UI/UX design, and building responsive applications</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
                      <Code className="w-8 h-8 text-purple-400 mb-3" />
                      <h4 className="text-xl font-semibold text-white mb-2">My Focus</h4>
                      <p className="text-gray-400 text-sm">Learning modern frameworks, building real-world projects, and continuous improvement</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-8 animate-[fadeIn_0.5s_ease-out_forwards]">
                  <h3 className="text-3xl font-bold text-white mb-6">Technical Skills</h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2" style={{
                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                        opacity: 0
                      }}>
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium flex items-center gap-2">
                            {/* Add your icons here: <img src={skill.icon} className="w-6 h-6" /> */}
                            {skill.name}
                          </span>
                          <span className="text-indigo-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                            style={{
                              width: `${skill.level}%`,
                              animation: `slideInRight 1s ease-out ${index * 0.1}s forwards`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-6 animate-[fadeIn_0.5s_ease-out_forwards]">
                  <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="flex gap-6 group" style={{
                        animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                        opacity: 0
                      }}>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center ring-4 ring-slate-900 group-hover:ring-indigo-500/50 transition-all">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          {index < experience.length - 1 && (
                            <div className="w-0.5 h-full bg-gradient-to-b from-indigo-500/50 to-transparent mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all hover:bg-white/10">
                            <span className="text-sm text-indigo-400 font-semibold">{exp.year}</span>
                            <h4 className="text-xl font-bold text-white mt-2">{exp.title}</h4>
                            <p className="text-gray-400 mt-1">{exp.place}</p>
                            {exp.desc && (
                              <p className="text-gray-500 text-sm mt-3 leading-relaxed">{exp.desc}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
}