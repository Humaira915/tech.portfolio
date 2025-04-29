import React, { useState } from 'react';
import './App.css';
import './index.css';

import { Loadingscreen } from './components/section/loadingscreen';
import { Navbar } from './components/navbar';
import { Mobilemenu } from './components/section/mobilemenu';
import { Home } from './components/home';
import { About } from './components/about';
import { Projects } from './components/section/projects';
import { Contact } from './components/contact';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuopen, setmenuopen] = useState(false);

  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />
        <Mobilemenu menuopen={menuopen} setmenuopen={setmenuopen} />

        {/* Add IDs to sections for anchor scrolling */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
