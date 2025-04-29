import React from "react";

import { RevealOnScroll } from "./revealonscroll"; 



export const Projects = () => {
  const projects = [
    
    {
      title: "Portfolio Website",
      description: "Designed and built a fully responsive portfolio using figma prototyping to showcase my journy and skills.",
      link: "https://www.figma.com/design/OKBAVjXarDZndUhs13gquq/Portfolio-jan-2024?node-id=0-1&t=wxYQ5oRu5OjCQuxF-1"
    },
    {
      title: "Task Manager Webite",
      description: "A basic website integrated with responsive features and graphs.",
      link: "https://github.com/Humaira915/expense-tracker"
    },
    {
      title: "Tinder-like Features in an E-commerce Platform",
      description: "Implemented swipe-based product discovery to personalize shopping experiences, enhancing user engagement.",
      link: "https://www.figma.com/design/5rPrxCPAsbvLOzF8tTa5lC/finder?node-id=0-1&t=c34QrkosIbS2Bvbt-1"
    },
    {
      title: "UX / UI design for a nursery",
      description: "Conducted user research and wireframed a user-friendly mobile banking solution focused on accessibility.",
      link: "https://www.figma.com/design/XWG3aPBGBMtGvUiKvwOVd0/project-for-nursery?node-id=0-1&t=lHaUqOoOlSamWSIw-1"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-cyan-400 hover:underline"
                >
                  View Project ↗
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
