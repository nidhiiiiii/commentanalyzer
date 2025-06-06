// import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#101828] text-[#e5e7eb] font-sans">
      {/* Left Side */}
      <aside className="md:w-1/3 flex flex-col justify-between items-start p-8 md:py-16 md:pl-16 bg-[#111827] shadow-lg">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Your Name</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#60a5fa]">Front End Developer</h2>
          <p className="text-base md:text-lg text-[#cbd5e1] mb-8 max-w-xs">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <div className="flex gap-5 mb-8">
          <a href="#" aria-label="GitHub" className="hover:text-[#60a5fa] transition"><FaGithub size={24} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#60a5fa] transition"><FaLinkedin size={24} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#60a5fa] transition"><FaInstagram size={24} /></a>
          <a href="#" aria-label="Email" className="hover:text-[#60a5fa] transition"><FaEnvelope size={24} /></a>
        </div>
      </aside>
      {/* Right Side */}
      <main className="flex-1 flex flex-col gap-8 p-8 md:py-16 md:pr-16">
        {/* About Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">About Me</h3>
          <p className="text-[#cbd5e1]">I am a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that are both beautiful and performant.</p>
        </section>
        {/* Projects Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Projects</h3>
          <ul className="space-y-4">
            <li>
              <div className="font-semibold">Awesome Project 1</div>
              <div className="text-sm text-[#cbd5e1]">A short description of your project goes here.</div>
            </li>
            <li>
              <div className="font-semibold">Awesome Project 2</div>
              <div className="text-sm text-[#cbd5e1]">A short description of your project goes here.</div>
            </li>
          </ul>
        </section>
        {/* Skills Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Skills</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">UI/UX</span>
          </div>
        </section>
        {/* Contact Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Contact</h3>
          <p className="text-[#cbd5e1] mb-4">Want to work together or have a question? Reach out!</p>
          <a href="mailto:your@email.com" className="inline-block bg-[#60a5fa] text-[#1e293b] font-semibold px-6 py-2 rounded-full hover:bg-[#2563eb] transition">Email Me</a>
        </section>
        {/* Resume Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Resume</h3>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#60a5fa]">Download my resume</a>
        </section>
      </main>
    </div>
  );
}
