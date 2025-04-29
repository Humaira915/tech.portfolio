import React from "react";
import { RevealOnScroll } from "./section/revealonscroll";

export const About = () => {
  const frontendskills = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const designingskills = ["Figma", "Adobe", "User Research", "Wireframing", "Prototyping"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <RevealOnScroll>
          {/* About Box */}
          <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              As a passionate designer and developer, I thrive at the intersection of creativity and technology.
              With a strong background in both design principles and coding, I craft seamless user experiences
              that are visually appealing and highly functional. I believe in the power of clean, user-centered
              design paired with well-structured, efficient code to create digital solutions that are not only
              aesthetically pleasing but also intuitive to use. Whether I'm designing a modern, responsive
              website or developing a complex web application, I aim to bridge the gap between design and
              development, ensuring that every project I work on looks great and works flawlessly across all
              platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendskills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Designing Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Designing</h3>
                <div className="flex flex-wrap gap-2">
                  {designingskills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience Box */}
          <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-50 space-y-2">
                  <li>
                    <strong>B.Tech in Computer Science</strong> – LNCT College (2022–2026)
                  </li>
                  <li>
                    Relevant coursework: Data Structures, OOPM, Web Development, Blockchain and IoT, Cybersecurity, DBMS
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <ul className="list-disc list-inside text-gray-50 space-y-2">
                  <li>
                    <strong>Design Intern at Wheelmate</strong> (3 months)
                  </li>
                  <li>
                    Designed a website from scratch with a focus on accessibility, responsive UI, and user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
