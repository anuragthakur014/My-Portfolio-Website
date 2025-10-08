import rps from './images/rps.png';
import kerala from './images/kerala.png';
import portfolio from './images/portfolio.png';
import contentBg from './images/im5.png';
import sectionBg from './images/im7.png';

export default function Projects() {
  const projects = [
    {
      src: rps,
      alt: 'Stone Paper Scissor Game',
      title: 'Stone Paper Scissor',
      desc: 'A simple RPS game implemented with JavaScript.',
      demoLink: 'https://rock-paper-scissor-game-1410.netlify.app/',
      codeLink: 'https://github.com/anuragthakur014/RPS-Games',
    },
    {
      src: kerala,
      alt: 'Kerala Tourism Website',
      title: 'Kerala Tourism',
      desc: 'A tourism portal for exploring Kerala’s beauty.',
      demoLink: 'https://kerala-tourism-clone-14.netlify.app/',
      codeLink: 'https://github.com/anuragthakur014/anurag-html',
    },
    {
      src: portfolio,
      alt: 'My Portfolio Site',
      title: 'My Portfolio',
      desc: 'This very portfolio you are viewing!',
      demoLink: 'https://my-portfolio-website-sigma-eight.vercel.app',
      codeLink: 'https://github.com/anuragthakur014/My-Portfolio-Website',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2
        className="text-5xl italic font-bold text-white mt-20 mb-8
                   drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]
                   hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]
                   hover:text-red-700 transition duration-300"
      >
        Projects
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-20 mt-12">
        {projects.map((p, i) => (
          <div
            key={i}
            className="min-w-[300px] w-[30%] h-[450px] max-w-sm rounded border-2 border-white
                       hover:shadow-[10px_0px_30px_15px_rgba(100,200,255,0.5)]
                       transition-all duration-300
                       flex flex-col overflow-hidden text-white"
            style={{
              backgroundImage: `url(${contentBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={p.src} alt={p.alt} className="w-full h-1/2 object-cover" />
            <div className="flex flex-col justify-start items-center px-4 py-4 bg-black bg-opacity-30 h-1/2">
              <h3 className="mt-2 mb-5 text-2xl font-semibold text-white drop-shadow-md">{p.title}</h3>
              <p className="mb-7 text-white drop-shadow-sm">{p.desc}</p>
              <div className="flex space-x-10">
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4  py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
                >
                  See Live
                </a>
                <a
                  href={p.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
