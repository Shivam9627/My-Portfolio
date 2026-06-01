import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 sm:mt-4 md:mt-5"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-12 md:w-16 sm:h-12 md:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-3 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Company Logo/Image */}
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white line-clamp-1">
                      {experience.role}
                    </h3>
                    <h4 className="text-xs sm:text-sm md:text-base text-gray-300 line-clamp-1">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-xs text-gray-500 mt-1 sm:mt-2 whitespace-nowrap">{experience.date}</p>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">{experience.desc}</p>
              <div className="mt-3 sm:mt-4">
                <h5 className="font-medium text-white text-xs sm:text-sm">Skills:</h5>
                <ul className="flex flex-wrap mt-2 gap-1.5 sm:gap-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 text-xs md:text-sm rounded-md sm:rounded-lg border border-gray-400 whitespace-nowrap"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
