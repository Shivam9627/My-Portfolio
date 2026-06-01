// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 sm:py-20 md:py-24 lg:py-32 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom relative"
  >
    {/* Section Title */}
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-purple-300 mb-2 sm:mb-3 md:mb-4 font-semibold">
        Technical Expertise
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">SKILLS & TECH STACK</h2>
      <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
      <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
        A comprehensive collection of technologies and frameworks I've mastered through building scalable, 
        production-ready applications with modern engineering practices.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.02}
          transitionSpeed={800}
        >
          <div
            className="relative group rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl p-5 sm:p-6 md:p-8 
            hover:border-purple-500/40 transition-all duration-300 shadow-[0_0_30px_0px_rgba(124,58,237,0.2)]
            hover:shadow-[0_0_40px_0px_rgba(124,58,237,0.4)]"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-8">
                <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skill Items - Responsive Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center justify-start gap-2 sm:gap-3 bg-white/5 border border-white/10 hover:border-purple-500/50 
                    rounded-lg sm:rounded-xl py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 font-medium truncate group-hover/skill:text-white transition-colors duration-300 leading-tight\">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
