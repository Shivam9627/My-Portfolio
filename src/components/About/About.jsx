import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Profile.jpg';
import leetcodeLogo from '../../assets/work_logo/leetcode.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 sm:py-6 md:py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-12 sm:mt-16 md:mt-20 lg:mt-24 relative"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-6 sm:mt-8 md:mt-0">
          {/* Greeting */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-purple-300 mb-2 sm:mb-3 font-semibold">
            Welcome to my portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 leading-tight">
            Hi, I'm
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5 leading-tight">
            Shivam Chamoli
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6 text-gray-300 leading-tight">
            <span className="text-white">A </span>
            <ReactTypingEffect
              text={[
                'Full-Stack Developer',
                'Software Engineer',
                'System Architect',
                'Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-5 md:mt-6 leading-relaxed max-w-2xl">
            I architect and build high-quality web applications using clean code, scalable architecture, 
            and modern engineering practices. My work is centered around strong problem-solving, efficient 
            backend systems, and intuitive frontend experiences that delight users.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
            <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-6
            hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-1 sm:mb-2 font-semibold leading-tight">
                Problems Solved
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">700+</p>
              <p className="text-gray-500 text-xs sm:text-sm leading-tight break-words">LeetCode</p>
            </div>
            <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-6
            hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-1 sm:mb-2 font-semibold leading-tight">
                Experience
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">1+</p>
              <p className="text-gray-500 text-xs sm:text-sm leading-tight">Years</p>
            </div>
            <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-6
            hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-1 sm:mb-2 font-semibold leading-tight">
                Projects
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">16+</p>
              <p className="text-gray-500 text-xs sm:text-sm leading-tight break-words">Deployed & GitHub</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center flex-wrap">
            <a
              href="https://github.com/Shivam9627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-white transition duration-300 hover:border-purple-400 hover:from-purple-600/40 hover:to-blue-600/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-chamoli-405883303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-white transition duration-300 hover:border-blue-400 hover:from-blue-600/40 hover:to-cyan-600/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Shivam_Chamoli/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-yellow-500/30 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-white transition duration-300 hover:border-yellow-400 hover:from-yellow-600/40 hover:to-orange-600/40 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]"
            >
              <img src={leetcodeLogo} alt="LeetCode" className="h-4 sm:h-5 w-4 sm:w-5" />
              <span className="hidden sm:inline">LeetCode</span>
              <span className="sm:hidden">700+</span>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative mt-6 sm:mt-8 md:mt-0">
          <Tilt
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.03}
            transitionSpeed={800}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/30 
            shadow-[0_0_60px_0px_rgba(124,58,237,0.4)] group">
              <img
                src={profileImage}
                alt="Shivam Chamoli"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          </Tilt>

          {/* Info Card below image */}
          <div className="absolute bottom-0 sm:-bottom-10 md:-bottom-12 left-1/2 hidden w-72 sm:w-80 -translate-x-1/2 rounded-xl sm:rounded-2xl border border-purple-500/20 
          bg-gradient-to-br from-slate-950/95 to-slate-900/95 backdrop-blur-xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 text-left 
          shadow-[0_20px_60px_-20px_rgba(124,58,237,0.3)] md:block">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-2 sm:mb-3 leading-tight\">Full-Stack Engineer</p>
            <p className="text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6\">
              Crafting elegant solutions with React, Node.js, and modern databases. Always learning, always building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
