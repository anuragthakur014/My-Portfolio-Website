import React, { useState } from 'react';
import aboutImg from './images/im4.jpg';
import sectionBg from './images/im7.png';
import contentBg from './images/im10.png';
import htmlIcon from './images/html.png';
import cssIcon from './images/css.png';
import jsIcon from './images/js.png';
import javaIcon from './images/java.png';
import mysqlIcon from './images/mysql.png';
import reactjsIcon from './images/reactjs.png';
import pythonIcon from './images/python.png';
import githubIcon from './images/github.png';

export default function About() {
  const [hover, setHover] = useState(false);

  const h2style = {
    backgroundColor: 'transparent',
    color: hover ? 'red' : 'white',
    fontSize: '3rem',
    textAlign: 'center',
    fontStyle: 'italic',
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
      desc: 'Here are some of my tech skills:',
      alignLeft: true,
      skills: [
        { name: 'HTML', img: htmlIcon },
        { name: 'CSS', img: cssIcon },
        { name: 'JavaScript', img: jsIcon },
        { name: 'JAVA(Basic)', img: javaIcon },
        { name: 'MYSQL', img: mysqlIcon },
        { name: 'REACTJS', img: reactjsIcon },
        { name: 'PYTHON', img: pythonIcon },
        { name: 'GITHUB', img: githubIcon },
      ],
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
      <div className="text-center mb-8">
        <h2
          style={h2style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="inline-block drop-shadow-[10px_0_15px_rgba(255,0,0,0.9)] transition duration-300 mx-auto
                     mt-0 md:mt-[-20px] text-3xl sm:text-4xl md:text-5xl"
        >
          About Me
        </h2>
      </div>

      <div
        className="w-full max-w-[1200px] mx-auto rounded-lg shadow-lg p-10
                    flex flex-col md:flex-row flex-wrap items-center justify-center gap-12 min-h-[500px]"
        style={{
          backgroundImage: `url(${contentBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={aboutImg}
          alt="About illustration"
          className="w-[300px] h-[300px] rounded-full object-cover"
        />

        <div className="flex-1 text-white space-y-6 min-h-0">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`space-y-2 mx-auto max-w-3xl ${item.alignLeft ? 'text-left' : 'text-center'}`}
            >
              <h3
                className={`text-3xl md:text-4xl font-semibold hover:text-red-500 transition-colors duration-300 ${
                  index === 1 ? 'text-green-100' : 'text-white'
                }`}
              >
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 hover:text-blue-300 transition-colors duration-300 break-words">
                {item.desc}
              </p>

              {item.skills && (
                <div className="w-full mt-6">
                  {/* Grid: 2 cols mobile, 3 cols md, 4 cols lg. max-w keeps the grid from stretching too wide */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center max-w-[900px] mx-auto">
                    {item.skills.map((skill) => (
                      <div
                        key={skill.name}
                        /* Hover behaviors:
                           - The container scales on hover (zoom)
                           - The image gets an extra drop-shadow glow on hover
                        */
                        className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                      >
                        <img
                          src={skill.img}
                          alt={skill.name}
                          /* Responsive sizes (Tailwind standard widths): 
                             - mobile: w-12
                             - sm: w-16
                             - md: w-20
                             - lg: w-24
                          */
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mb-3 drop-shadow-md transition-shadow duration-300 hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.7)]"
                        />
                        <span className="text-sm md:text-base font-medium tracking-wide">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
