import React, { useState, useEffect } from 'react';
import logo from './images/im1.png';
import bgImage from './images/im7.png';
import resume from './pdf/My Resume.pdf';

// Custom useTypewriter hook remains unchanged
function useTypewriter(text, speed = 100, pause = 2000) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    let typingTimer;
    const startTyping = () => {
      typingTimer = setInterval(() => {
        setDisplay((prev) => {
          const next = text.slice(0, prev.length + 1);
          if (next === text) {
            clearInterval(typingTimer);
            setTimeout(() => {
              setDisplay('');
              startTyping();
            }, pause);
          }
          return next;
        });
        i++;
      }, speed);
    };
    startTyping();
    return () => clearInterval(typingTimer);
  }, [text, speed, pause]);
  return display;
}

export default function Home() {
  const typedName = useTypewriter('Anurag Thakur !', 150, 2500);

  return (
    <section
      id="home"
      className="min-h-screen text-white flex items-center justify-center bg-cover bg-center px-6 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 max-w-6xl w-full">
        <div className="text-center lg:text-left max-w-2xl w-full">
          <h1 className="text-6xl sm:text-4xl md:text-5xl font-bold ">
            Hello,
          </h1>
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mt-2 max-w-full break-words">
            I'm{' '}
            <span className="text-red-400">{typedName}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl hover:text-blue-300">
            I'm a Diploma Final year student.
            <br />This is my portfolio website.
          </p>
          <a
            href={resume}
            download="Anurag_Thakur_CV"
            className="mt-6 inline-block px-8 py-4 text-white bg-blue-700 rounded-full shadow-[0_0_10px_rgba(0,0,255,0.5)] hover:shadow-[0_0_15px_rgba(255,0,0,0.7)] transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>

        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto animate-bounce object-contain"
          />
        </div>
      </div>
    </section>
  );
}
