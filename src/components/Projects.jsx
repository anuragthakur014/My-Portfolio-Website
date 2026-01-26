import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      src: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop',
      alt: 'Stone Paper Scissor Game',
      title: 'Stone Paper Scissor',
      desc: 'An interactive Rock Paper Scissors game built with vanilla JavaScript, featuring smooth animations and score tracking.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      demoLink: 'https://rock-paper-scissor-game-1410.netlify.app/',
      codeLink: 'https://github.com/anuragthakur014/RPS-Games',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop',
      alt: 'Kerala Tourism Website',
      title: 'Kerala Tourism',
      desc: 'A responsive tourism portal showcasing Kerala\'s breathtaking destinations with stunning visuals and intuitive navigation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://kerala-tourism-clone-14.netlify.app/',
      codeLink: 'https://github.com/anuragthakur014/anurag-html',
      gradient: 'from-green-500/20 to-teal-500/20',
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      alt: 'My Portfolio Site',
      title: 'My Portfolio',
      desc: 'A modern, responsive portfolio website showcasing my projects and skills with sleek animations and professional design.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      demoLink: 'https://my-portfolio-website-sigma-eight.vercel.app',
      codeLink: 'https://github.com/anuragthakur014/My-Portfolio-Website',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto rounded-ful"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            Explore my latest work showcasing modern web development techniques and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#0f1218] backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-overlay z-10`}></div>
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-20 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-blue-300 rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More */}
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/anuragthakur014"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}