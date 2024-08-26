import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App flex">
      <div className={`flex-grow ${isMobile ? 'w-full' : 'ml-auto pr-64'}`}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <div className='hidden sm:block'>
      <Sidebar />
      </div>
    </div>
  );
}

export default App;
