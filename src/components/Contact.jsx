import { useRef, useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: { 'Accept': 'application/json' },
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        toast.success('✅ Message sent successfully!', { position: 'top-right' });

        // Reload page after a short delay (to let toast show briefly)
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error('🚫 Failed to send. Please try again.', { position: 'top-right' });
      }
    } catch {
      toast.error('😞 An error occurred. Please try again later.', { position: 'top-right' });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-white" style={{ backgroundColor: '#0f1421' }}>
      <ToastContainer />
      <h2 className="text-4xl italic font-semibold mb-8 mt-[50px] drop-shadow-[0_0_15px_rgba(255,0,0,0.6)] hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] hover:text-red-700 transition duration-300">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-20 w-full max-w-6xl px-4">
        <form
          ref={formRef}
          action="https://formspree.io/f/xdkzrbga"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full md:w-[40%] flex flex-col gap-4 text-black mt-8 bg-white bg-opacity-80 p-4 rounded hover:shadow-[10px_0px_30px_15px_rgba(100,200,255,0.5)] transition-all duration-300"
        >
          <input name="name" type="text" placeholder="Name" required className="p-3 border rounded" />
          <input name="email" type="email" placeholder="Email" required className="p-3 border rounded" />
          <input name="subject" type="text" placeholder="Subject" required className="p-3 border rounded" />
          <textarea name="message" rows="5"   placeholder="Message" required className="p-3 border rounded resize-none h-32" />

          <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
            {submitted ? 'Sent' : 'Send Message'}
          </button>
        </form>

        <div className="flex flex-col gap-6 bg-black bg-transparent p-4 rounded text-white md:w-1/3 mt-8">
          <p className="text-xl font-semibold underline underline-offset-4">Contact Me</p>
          <a href="https://www.instagram.com/anurag_thakur__14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pink-400 transition">
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

      
    </section>
  );
}
