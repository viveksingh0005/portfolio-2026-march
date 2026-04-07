import React, { useState } from "react";
import { projects } from "../../constants";

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
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 font-sans bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
          <span className="text-purple-400 text-sm tracking-[3px] font-medium">PORTFOLIO</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A curated collection of my best work showcasing modern web development, 
          AI integration, and cloud technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-900/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* GitHub Icon Badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-xs text-gray-300 border border-white/10">
                <span>GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.044-.015-2.051-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-2xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-[15px] leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-4 py-1.5 bg-purple-950/70 text-purple-400 border border-purple-900/50 rounded-2xl font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Glow Line */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* GitHub Showcase Note */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        And 30+ more projects available on my{" "}
        <a 
          href="https://github.com/viveksingh0005?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          GitHub
        </a>
      </div>

      {/* Modal */}
    {/* Modal */}
{selectedProject && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-6 overflow-y-auto">
    <div 
      className="bg-gradient-to-br from-gray-950 to-black border border-purple-800/70 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative max-h-[95vh] flex flex-col"
    >
      {/* Close Button - Top Right */}
      <button
        onClick={handleCloseModal}
        className="absolute top-5 right-5 z-50 w-10 h-10 flex items-center justify-center text-4xl text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
      >
        ×
      </button>

      {/* Project Image Section */}
      <div className="relative bg-black flex items-center justify-center p-6 md:p-10 h-64 sm:h-80 md:h-96 flex-shrink-0">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
        />
        
        {/* Subtle image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-b-3xl pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
          {selectedProject.title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-[17px] md:text-lg mb-10">
          {selectedProject.description}
        </p>

        {/* Technologies */}
        <div className="mb-10">
          <h4 className="uppercase text-purple-400 text-xs tracking-[2px] font-medium mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-3">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-gray-900 border border-purple-900/60 text-purple-300 text-sm rounded-2xl hover:bg-purple-950 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {/* GitHub Button */}
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-3 bg-white hover:bg-purple-600 text-black hover:text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-300 active:scale-[0.985]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 transition-transform group-hover:rotate-12" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.044-.015-2.051-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Project on GitHub
          </a>

          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="flex-1 flex items-center justify-center gap-3 border border-white/30 hover:bg-white/10 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-300 active:scale-[0.985]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Work;