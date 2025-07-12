import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import sectionBg from './images/im7.png';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="min-h-screen p-0 text-white flex flex-col items-center justify-center "
      style={{
        // backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0f1421',
      }}
    >
   
       


      <h2
        className="text-4xl italic font-semibold mb-8 mt-[50px]
                  drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]
                   hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]
                   hover:text-red-700
                   transition duration-300
                   mt-20"
      >
        Get In Touch
      </h2>

      {/* Flex container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left side: Form */}
        <form
          action="https://formspree.io/f/xdkzrbga"
          method="POST"
          className="w-full md:w-[40%] flex flex-col gap-4 text-black mt-8 bg-white bg-opacity-80 p-4 rounded 
         
                       hover:shadow-[10px_0px_30px_15px_rgba(100,200,255,0.5)]
                       transition-all duration-300"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-3 border rounded"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="p-3 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Right side: Social Links */}
        <div className="flex flex-col gap-6 text-center md:text-left text-white md:w-1/3 mt-8 bg-black bg-transparent  p-4 rounded ">
          <p className="text-xl font-semibold underline underline-offset-4">Contact Me</p>
          <a href="https://www.instagram.com/anurag_thakur__14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3  hover:text-pink-400 transition">
            <FaInstagram className="text-2xl" /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/anurag-kumar-1351a7372" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition">
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>
          <a href="https://github.com/anuragthakur014" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-400 transition">
            <FaGithub className="text-2xl" /> GitHub
          </a>
        </div>
      </div>

       <h1 style={{
          fontSize: '2rem',
          marginTop: '25px',
          backgroundColor: 'red',
          width: '100%',
          textAlign: 'center',
          
      }}>
        &copy; All Copy Right Recived
        </h1>  

    </section>
  );
}
