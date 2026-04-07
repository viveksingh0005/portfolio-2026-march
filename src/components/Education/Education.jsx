import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 font-sans bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
          <span className="text-purple-400 text-sm tracking-[3px] font-medium">ACADEMIC JOURNEY</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
          Education
        </h2>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
          My academic foundation that built the base for my technical expertise
        </p>
      </div>

      {/* Education Card */}
      <div className="max-w-4xl mx-auto">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-900/60 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col md:flex-row gap-8 md:items-start">
              {/* Institute Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-white/10 border border-white/10 rounded-2xl overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-purple-400 mt-2 font-medium">
                      {edu.school}
                    </h4>
                  </div>

                  <div className="text-right md:text-left">
                    <p className="text-gray-400 font-medium">{edu.date}</p>
                    {edu.grade && (
                      <p className="text-sm text-emerald-400 mt-1 font-semibold">
                        Grade: {edu.grade}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-8 text-gray-300 leading-relaxed text-[17px]">
                  {edu.desc}
                </p>

                {/* Optional Highlights */}
                {edu.highlights && (
                  <div className="mt-10">
                    <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <span className="text-purple-500">✦</span> Key Highlights
                    </h5>
                    <ul className="space-y-3 text-gray-400">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Decorative Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-b-3xl opacity-70"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;