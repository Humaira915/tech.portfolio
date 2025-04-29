
import { RevealOnScroll } from "./section/revealonscroll";



export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="block-xl text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-white mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};