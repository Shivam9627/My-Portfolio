import React, { useState } from "react";
import { projects } from "../../constants";
import Tilt from "react-parallax-tilt";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-purple-300 mb-2 sm:mb-3 md:mb-4 font-semibold">
          Creative Showcase
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">FEATURED PROJECTS</h2>
        <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          High-impact software systems built with modern architecture, engineering discipline,
          and scalable full-stack development. Each project showcases real-world solutions and technical excellence.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            className="h-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={700}
          >
            <div
              onClick={() => handleOpenModal(project)}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl 
              transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_20px_60px_rgba(124,58,237,0.4)] cursor-pointer h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Tag Badge */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                  <span className="rounded-full bg-gradient-to-r from-purple-500/80 to-blue-500/80 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-white shadow-lg whitespace-nowrap">
                    Project
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-2.5 md:mb-3 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2\">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-3 sm:mb-4 md:mb-5 text-xs sm:text-sm leading-5 sm:leading-6 flex-1 line-clamp-2 sm:line-clamp-3\">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4\">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 whitespace-nowrap\">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-gray-400 whitespace-nowrap\">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-2 sm:pt-2.5 md:pt-3 border-t border-white/10">
                  <span className="text-xs text-gray-500 font-medium">Click to explore</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950/95 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute right-3 sm:right-4 md:right-5 top-3 sm:top-4 md:top-5 z-20 inline-flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-xl sm:text-2xl text-white transition duration-300 hover:border-purple-500 hover:bg-purple-500/20 hover:text-purple-300"
            >
              ✕
            </button>

            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-[1.2fr_1fr] p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-lg sm:rounded-2xl bg-slate-800 h-48 sm:h-64 md:h-80 lg:h-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-purple-300">
                    Project Overview
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-6 sm:leading-7 text-sm sm:text-base md:text-lg">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] md:tracking-[0.28em] text-purple-300 mb-2 sm:mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium text-purple-200 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-5 md:pt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-purple-500/50 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-purple-400 hover:from-purple-600/40 hover:to-blue-600/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="hidden sm:inline">View GitHub</span>
                    <span className="sm:hidden">GitHub</span>
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="hidden sm:inline">Open Live App</span>
                    <span className="sm:hidden">Live App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
