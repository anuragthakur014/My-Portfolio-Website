import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-8 " style={{ backgroundColor: 'black' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6">
        <p className="text-lg text-white mb-4 text-center">
          &copy; 2025 Anurag Thakur — All Rights Reserved
        </p>
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/anurag_thakur__14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/anuragthakur014"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-kumar-1351a7372"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
);
}
