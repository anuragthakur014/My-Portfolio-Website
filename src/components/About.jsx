import React, { useState } from 'react';
import aboutImg from './images/im4.jpg';       // circular profile image
import sectionBg from './images/im7.png';     // background for section
import contentBg from './images/im5.png';     // background for card

export default function About() {
  const [hover, setHover] = useState(false);

  const h2style = {
    backgroundColor: 'transparent', // no bg
    color: hover ? 'red' : 'white',
    fontSize: '3rem',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '-20px',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const aboutItems = [
    {
      title: 'My name is Anurag Kumar Thakur',
      desc: 'I am currently a Diploma student at Vidhyadeep University',
      alignLeft: true,
    },
    {
      title: 'My Skills',
      desc: 'HTML , CSS , JS , JAVA , MYSQL , REACT JS !',
      alignLeft: true,
    },
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black',
      }}
    >
      {/* Centered Heading without underline */}
      <div className="text-center mb-8">
        <h2
          style={h2style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="inline-block drop-shadow-[10px_0px_15px_rgba(255,0,0,0.9)] transition duration-300 mx-auto"
        >
          About Me
        </h2>
      </div>

      {/* Main Card */}
      <div
        className="w-full max-w-[1200px] h-[500px] mx-auto rounded-lg shadow-lg p-10 
                   flex flex-col md:flex-row items-center justify-center gap-12"
        style={{
          backgroundImage: `url(${contentBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Profile Image */}
        <img
          src={aboutImg}
          alt="About illustration"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />

        {/* Text Content */}
        <div className="flex-1 text-white space-y-6">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`space-y-2 mx-auto max-w-3xl ${
                item.alignLeft ? 'text-left' : 'text-center'
              }`}
            >
              <h3
                className={`text-3xl md:text-4xl font-semibold hover:text-red-500 transition-colors duration-300 ${
                  index === 1 ? 'text-green-100' : 'text-white'
                }`}
              >
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 hover:text-blue-300 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
