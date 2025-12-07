import React from "react";

const experiences = [
  {
    year: "2024",
    role: "MERN Stack Intern",
    company: "CodeCrafters",
    details: "Worked on building REST APIs and authentication systems with Node.js and MongoDB.",
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Freelance",
    details: "Developed responsive websites using React and Tailwind CSS.",
  },
];

const ExperienceTimeline = () => {
  return (
    <div id="experience" className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="relative border-l-4 border-blue-500 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-gray-500">{exp.year}</p>
            <p className="mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
