import rps from './images/rps.png';
import kerala from './images/kerala.png';
import portfolio from './images/pfolio.png';
import contentBg from './images/im5.png';
import sectionBg from './images/im7.png'; // Background image

export default function Projects() {
  const projects = [
    { src: rps, alt: 'Stone Paper Scissor Game', title: 'Stone Paper Scissor', desc: 'A simple RPS game implemented with JavaScript.' },
    { src: kerala, alt: 'Kerala Tourism Web Site', title: 'Kerala Tourism', desc: 'A tourism portal for exploring Kerala’s beauty.' },
    { src: portfolio, alt: 'My Portfolio', title: 'My Portfolio', desc: 'This very portfolio you are viewing!' },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen p-0 flex flex-col items-center " 
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
      }}
    >
      {/* Heading with red glow and hover text color red */}
      <h2
        className="text-4xl font-bold italic text-white mt-20 mb-8
                   drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]
                   hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]
                   hover:text-red-700
                   transition duration-300"
      >
        Projects
      </h2>

      {/* Project Cards */}
      <div className="w-full flex flex-wrap justify-center gap-20 max-w-100% mt-12">
        {projects.map((p, i) => (
          <div
            key={i}
            className="min-w-[300px] w-[30%] h-[450px] max-w-sm rounded 
                      shadow-[0px_3px_30px_15px_rgba(255,0,0,0.5)]
                       hover:shadow-[10px_0px_30px_15px_rgba(100,200,255,0.5)]
                       transition-all duration-300
                       flex flex-col overflow-hidden text-white"
            style={{
              backgroundImage: `url(${contentBg})`,
              backgroundSize: 'cover',
              
              backgroundPosition: 'center',
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-1/2 object-cover"
            />
            <div className="w-full h-1/2 text-center py-4 px-3 bg-white bg-opacity-0 flex flex-col justify-center gap-2">
              <h3 className="text-xl font-semibold text-blue-400 drop-shadow-md">{p.title}</h3>
              <p className="text-blue-300 drop-shadow-sm">{p.desc}</p>
              <div className="flex justify-center space-x-6 mt-3">
                <a href="#" className="text-blue-500 hover:underline">Demo</a>
                <a href="#" className="text-blue-500 hover:underline">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
