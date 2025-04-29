import React from "react";
import { RevealOnScroll } from "./section/revealonscroll";

export const Home = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Humaira
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            I'm a UI/UX designer and a front-end developer generating creative, functional, and scalable web applications.
            My goal is to craft out-of-the-box designs that are both functional and delightful.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
