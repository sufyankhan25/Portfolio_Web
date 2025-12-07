// ===============================================
// Skills Section Component
// Cleaned, formatted, commented version
// ===============================================

import React from "react";
import { motion } from "framer-motion";

// Skill Icons
import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiMysql, SiGithub, SiPostman, SiVercel,
} from "react-icons/si";

import { DiJava, DiVisualstudio } from "react-icons/di";


// ===============================================
// SKILLS DATA (Frontend, Backend, Tools)
// ===============================================
const skills = {
  frontend: [
    { name: "React", level: 90, icon: SiReact },
    { name: "Tailwind CSS", level: 85, icon: SiTailwindcss },
    { name: "JavaScript", level: 90, icon: SiJavascript },
    { name: "HTML/CSS", level: 95, icon: SiHtml5 },
  ],

  backend: [
    { name: "Node.js", level: 85, icon: SiNodedotjs },
    { name: "Express.js", level: 80, icon: SiExpress },
    { name: "MongoDB", level: 85, icon: SiMongodb },
    { name: "Firebase", level: 70, icon: SiFirebase },
    { name: "MySQL", level: 75, icon: SiMysql },
    { name: "Java", level: 70, icon: DiJava },
  ],

  tools: [
    { name: "Git/GitHub", level: 90, icon: SiGithub },
    { name: "Postman", level: 80, icon: SiPostman },
    { name: "VS Code", level: 95, icon: DiVisualstudio },
    { name: "Vercel/Render", level: 80, icon: SiVercel },
  ],
};


// ===============================================
// Skill Progress Bar Component
// ===============================================
const SkillBar = ({ name, level, icon: Icon }) => (
  <div className="space-y-2 group">

    {/* Skill Name + Percentage */}
    <div className="flex justify-between text-sm text-gray-300">
      <div className="flex items-center gap-2">
        <Icon className="text-blue-400 text-lg" />
        <span>{name}</span>
      </div>
      <span>{level}%</span>
    </div>

    {/* Animated Progress Bar */}
    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 h-3 rounded-full shadow-md"
      />
    </div>

  </div>
);


// ===============================================
// Reusable Fade-In Animation Function
// ===============================================
const fadeInSlide = (x = 0, delay = 0) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay },
});


// ===============================================
// Skills Component (Main Section)
// ===============================================
const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-6">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-12 drop-shadow-lg"
      >
        Skills
      </motion.h2>

      {/* Skill Boxes Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* ---------------- Frontend ---------------- */}
        <motion.div
          {...fadeInSlide(-50, 0)}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-6 
          border border-white/20 hover:shadow-blue-500/40 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-300 text-center">Frontend</h3>
          {skills.frontend.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </motion.div>

        {/* ---------------- Backend ---------------- */}
        <motion.div
          {...fadeInSlide(0, 0.2)}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-6 
          border border-white/20 hover:shadow-blue-500/40 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-300 text-center">Backend</h3>
          {skills.backend.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </motion.div>

        {/* ---------------- Tools ---------------- */}
        <motion.div
          {...fadeInSlide(50, 0.4)}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-6 
          border border-white/20 hover:shadow-blue-500/40 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-300 text-center">Tools</h3>
          {skills.tools.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
