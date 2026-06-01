import React from "react";
import { education } from "../../constants"; // Import the education data
import Tilt from "react-parallax-tilt";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom-3 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-10 md:mb-16 px-2">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-purple-300 mb-2 sm:mb-3 md:mb-4">
          Academic Journey
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">EDUCATION</h2>
        <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          My educational path has shaped my technical expertise and problem-solving approach. 
          Here's where I've learned and grown as an engineer.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative mt-8 sm:mt-12 md:mt-16">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>

        {/* Education Entries */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex items-center gap-4 sm:gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Circle - Hidden on mobile */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full border-4 border-purple-500 bg-slate-950 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden border-2 border-purple-400">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <Tilt
                className="w-full md:w-5/12"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                perspective={1000}
                scale={1.02}
                transitionSpeed={600}
              >
                <div className="rounded-lg sm:rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-8
                hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                  {/* Logo, Degree and School Info */}
                  <div className="flex gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
                    <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 border border-purple-500/20">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-1">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-300 font-semibold text-sm sm:text-base md:text-lg line-clamp-1">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  {/* Grade and Date */}
                  <div className="flex gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 flex-wrap">
                    <span className="inline-block px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold whitespace-nowrap">
                      {edu.date}
                    </span>
                    <span className="inline-block px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold whitespace-nowrap">
                      Grade: {edu.grade}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-6 sm:leading-7 text-xs sm:text-sm md:text-base">
                    {edu.desc}
                  </p>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
