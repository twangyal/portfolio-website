import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="ml-auto pr-64">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
