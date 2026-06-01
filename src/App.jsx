import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
//import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414] text-white relative overflow-hidden">
      <BlurBlob position={{ top: '18%', left: '25%' }} size={{ width: '32%', height: '44%' }} />
      <BlurBlob position={{ top: '8%', left: '82%' }} size={{ width: '26%', height: '32%' }} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_20%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%),repeating-linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_16px)] pointer-events-none"></div>
      
      <div className="relative pt-24">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
