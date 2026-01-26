import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare, Instagram, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/xdkzrbga', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/anurag_thakur__14',
      color: 'hover:text-pink-400',
      bgHover: 'hover:bg-pink-500/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/anurag-kumar-1351a7372',
      color: 'hover:text-blue-400',
      bgHover: 'hover:bg-blue-500/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/anuragthakur014',
      color: 'hover:text-white',
      bgHover: 'hover:bg-gray-500/10'
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, #000 0%, #000 100%),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 92, 246, 0.03) 2px,
            rgba(139, 92, 246, 0.03) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(79, 195, 247, 0.03) 2px,
            rgba(79, 195, 247, 0.03) 4px
          )
        `,
        backgroundColor: '#0d0d0d'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Get In </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-[#1a1d2e] rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="text-[#4fc3f7]" />
                Send me a message
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#0d0d0d] border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all hover:border-slate-600"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Your Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-[#0d0d0d] border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all hover:border-slate-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <label className="block text-gray-400 text-sm font-medium mb-2">Subject</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full bg-[#0d0d0d] border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all hover:border-slate-600"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#0d0d0d] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none hover:border-slate-600"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || submitted}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted 
                      ? 'bg-green-600 hover:bg-green-700 scale-105' 
                      : 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto rounded-fullhover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
                  } ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <span>✓</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Contact Info Card */}
            <div className="bg-[#1a1d2e] rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="text-[#4fc3f7] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm">Surat, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-400">
                  <Mail className="text-[#4fc3f7] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm break-all">Available on request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-[#1a1d2e] rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-[#0d0d0d] border border-slate-700/50 ${social.bgHover} ${social.color} transition-all duration-300 hover:border-slate-500 hover:translate-x-2 hover:scale-105 hover:shadow-lg group`}
                  >
                    <social.icon size={22} className="flex-shrink-0 text-gray-300 group-hover:text-current transition-colors" />
                    <span className="font-medium text-white">{social.name}</span>
                    <svg 
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none"
                    >
                      <path 
                        d="M6 3L11 8L6 13" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-white font-semibold">Quick Response</p>
              </div>
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}