import React, { useState } from 'react';
import aboutImg from './images/im4.jpg';
import sectionBg from './images/im7.png';
import contentBg from './images/im10.png';
import htmlIcon from './images/html.png';
import cssIcon from './images/css.png';
import jsIcon from './images/js.png';
import javaIcon from './images/java.png';
import mysqlIcon from './images/mysql.png';

export default function About() {
  const [hover, setHover] = useState(false);

  const h2style = {
    backgroundColor: 'transparent',
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
      desc: 'Here are some of my tech skills:',
      alignLeft: true,
      skills: [
        { name: 'HTML', img: htmlIcon },
        { name: 'CSS', img: cssIcon },
        { name: 'JavaScript', img: jsIcon },
        { name: 'JAVA', img: javaIcon },
        { name: 'MYSQL', img: mysqlIcon },
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
          className="inline-block drop-shadow-[10px_0_15px_rgba(255,0,0,0.9)] transition duration-300 mx-auto"
        >
          About Me
        </h2>
      </div>

      <div
        className="w-full max-w-[1200px] mx-auto rounded-lg shadow-lg p-10
                    flex flex-col md:flex-row items-center justify-center gap-12 h-[500px]"
        style={{
          backgroundImage: `url(${contentBg})`,
          // backgroundColor: '#0f1421',
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

              {item.skills && (
                <div className="flex justify-evenly gap-6 mt-4">
                  {item.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-16 h-16 mt-5 object-contain mb-2 drop-shadow-md hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.7)] transition-shadow duration-300"
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
