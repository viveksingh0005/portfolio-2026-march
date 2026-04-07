import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Dev Soft Tech",
      date: "Dec 2024 - June 2025",
      duration: "6 Months",
      // ← Change this to your actual logo
      desc: "Contributed to the development of a modern Travel Booking Website. Focused primarily on frontend design and development while gaining strong exposure to Laravel and MVC architecture.",
      skills: [
        "Laravel",
        "MVC Architecture",
        "Frontend Development",
        "Responsive Design",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "API Integration",
      ],
      highlights: [
        "Designed and built responsive, pixel-perfect UI components for the travel platform",
        "Worked closely with backend developers to integrate frontend with Laravel APIs",
        "Implemented clean and maintainable code following MVC principles",
        "Enhanced user experience through modern design patterns and smooth interfaces",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-5 md:px-10 lg:px-20 font-sans bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-16 md:mb-20 relative z-10">
        <div className="inline-block px-6 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium tracking-widest mb-4">
          PROFESSIONAL JOURNEY
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
          Experience
        </h2>
        <p className="text-gray-400 mt-5 max-w-xl mx-auto text-base md:text-lg">
          My hands-on experience building real-world web applications
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[3px] bg-gradient-to-b from-purple-500 via-purple-600 to-transparent -translate-x-1/2"></div>

        {experiences.map((exp) => (
          <div key={exp.id} className="relative mb-16 md:mb-24 group">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 md:left-1/2 top-6 -translate-x-1/2 w-6 h-6 bg-[#0a0a0a] border-[5px] border-purple-500 rounded-full z-20 shadow-[0_0_25px_#a855f7] hidden md:block"></div>

            {/* Mobile Timeline Dot */}
            <div className="md:hidden absolute left-8 top-8 w-5 h-5 bg-[#0a0a0a] border-4 border-purple-500 rounded-full z-20 shadow-[0_0_15px_#a855f7]"></div>

            {/* Experience Card */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-900/60 rounded-3xl p-7 md:p-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-1 md:ml-12">
              
              {/* Company Header */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
               

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-purple-400 text-xl md:text-2xl font-medium mt-1">
                    {exp.company}
                  </h4>
                  
                  <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
                    <span className="font-medium">{exp.date}</span>
                    <span className="text-purple-500">•</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-[17px] leading-relaxed mb-9">
                {exp.desc}
              </p>

              {/* Highlights */}
              <div className="mb-9">
                <h5 className="text-white font-semibold mb-4 flex items-center gap-2 text-lg">
                  <span className="text-purple-400">✦</span> Key Highlights
                </h5>
                <ul className="space-y-4 text-gray-400">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-purple-500 text-xl leading-none mt-0.5">→</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h5 className="text-white font-semibold mb-4">Skills & Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 text-sm bg-white/5 hover:bg-purple-500/10 border border-purple-900/50 hover:border-purple-500 rounded-2xl text-gray-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default Experience;