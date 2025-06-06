import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#101828] text-[#e5e7eb] font-sans">
      {/* Left Side */}
      <aside className="md:w-1/3 flex flex-col justify-between items-start p-8 md:py-16 md:pl-16 bg-[#111827] shadow-lg">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Nidhi K</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#60a5fa]">Front End Developer</h2>
          <p className="text-base md:text-lg text-[#cbd5e1] mb-8 max-w-xs">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <div className="flex gap-5 mb-8">
          <a href="https://github.com/nidhiiiiii" aria-label="GitHub" className="hover:text-[#60a5fa] transition"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/nidhi-k-n/" aria-label="LinkedIn" className="hover:text-[#60a5fa] transition"><FaLinkedin size={24} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#60a5fa] transition"><FaInstagram size={24} /></a>
          <a href="mailto:knnidhi81@gmail.com" aria-label="Email" className="hover:text-[#60a5fa] transition"><FaEnvelope size={24} /></a>
        </div>
      </aside>
      {/* Right Side */}
      <main className="flex-1 flex flex-col gap-8 p-8 md:py-16 md:pr-16">
        {/* About Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">About Me</h3>
          <p className="text-[#cbd5e1]">I am a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that are both beautiful and performant.</p>
        </section>
        {/* Work Experience Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Work Experience</h3>
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <span className="font-semibold text-lg">Graduate Apprentice</span>
              <span className="flex flex-col md:items-end">
                <span className="flex items-center gap-2 text-sm text-[#60a5fa]">
                  <Image src="/bosch.png" alt="Bosch Logo" width={50} height={30} className="inline-block rounded" />
                  Bosch
                </span>
                <span className="text-xs text-[#94a3b8]">Sept 2024 – Present</span>
              </span>
            </div>
            <ul className="list-disc list-inside text-[#cbd5e1] text-sm mb-2">
              <li>Web application development</li>
              <li>Responsibility of interns and managing them</li>
              <li>Testing, hosting, debugging critical applications</li>
              <li>Handled savings evaluation for all projects in the department</li>
              <li>Saved more than 3m INR for the plant by building applications in-house</li>
              <li>Worked on Java, JSP, HTML, CSS, ReactJs, AJAX, Tomcat, mail integrations using JavaMail API, and job scheduling</li>
              <li>Experience in building dynamic web pages and handling server-side logic</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <span className="font-semibold text-lg">Software Engineering Intern (Fullstack)</span>
              <span className="flex flex-col md:items-end">
                <span className="flex items-center gap-2 text-sm text-[#60a5fa]">
                  <Image src="/mobiezy.png" alt="Mobiezy Logo" width={50} height={30} className="inline-block rounded" />
                  Mobiezy
                </span>
                <span className="text-xs text-[#94a3b8]">Aug 2022 – Feb 2023</span>
              </span>
            </div>
            <ul className="list-disc list-inside text-[#cbd5e1] text-sm mb-2">
              <li>Part of the product development team</li>
              <li>Introduced to AWS Lambda and API Gateway</li>
              <li>Created databases in MySQL</li>
              <li>Developed components using ReactJS and React Native</li>
            </ul>
          </div>
        </section>
        {/* Projects Section */}
        <section className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-4 animate-fade-in">
          <h3 className="text-2xl font-bold mb-2 text-[#60a5fa]">Projects</h3>
          <ul className="space-y-4">
            <li>
              <div className="font-semibold">Gatepass Tool</div>
              <div className="text-sm text-[#cbd5e1]">A application to the customers and the assoiates to bbring in the material into the plant and take out of the plant with the higher level approvals.
More than 3mINR saved to the plant by building it inhouse and 5000 papers saved.
Using Java, JSP, MySQL built the complete application with features of SSO, Azure services for IDM.
Hosted it myself and maintaining it. </div>
            </li>
            <li>
              <div className="font-semibold">ProInnovate - inventive warehouse for learning</div>
              <div className="text-sm text-[#cbd5e1]">Developed a platform for students to upload and collaborate on project ideas, similar to GitHub.
Front-end: React.JS, Tailwind CSS, HTML, CSS
Back-end: Java, Spring, Spring Boot
Collaboration Tools: Git, GitHub
API Testing: Postman
Achievements: Selected as one of the top projects for the Project Expo held at MVJ College, where teams from multiple colleges attended and competed.</div>
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
          <a href="mailto:knnidhi81@gmail.com" className="inline-block bg-[#60a5fa] text-[#1e293b] font-semibold px-6 py-2 rounded-full hover:bg-[#2563eb] transition">Email Me</a>
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
