import React from 'react';
import logo from './images/im1.png';
import bgImage from './images/im7.png';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen text-white flex items-center justify-center bg-cover bg-center px-6 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:gap-[400px] max-w-6xl w-full">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-6xl sm:text-4xl md:text-5xl font-bold hover:text-red-600">
            Hello,
          </h1>
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold hover:text-red-500 mt-2">
            I'm Anurag Thakur
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl hover:text-blue-300">
            I'm a Diploma Final year student.
            <br />This is my portfolio website.
          </p>
        </div>

        {/* Bouncing logo */}
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
