// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Gym Management System",
    description: "A full-stack gym web app with user signup/login, trainer dashboard, and BMI calculator.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sufyankhan25/Gym_Website",
    live: "https://gym-website-1-weld.vercel.app/",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    date: "2024-06-01"
  },
  {
    title: "Food Delivery App",
    description: "MERN-based food ordering system with real-time order tracking and admin panel.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/sufyankhan25/Food_app",
    live: "https://food-app-sufi.vercel.app/",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
    date: "2024-05-12"
  },
  {
    title: "Resume Builder",
    description: "A responsive resume builder and job portal app using Firebase and React.",
    tech: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/sufyankhan25/resume-builder",
    live: "https://resume-builder-sufyan.vercel.app/",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    date: "2024-04-18"
  },

  /* -------------------------------------------
      🚀 Your New Added Projects
     ------------------------------------------- */

  {
    title: "Real-Time Currency Converter",
    description: "A real-time currency conversion app that fetches live rates using an API. Users can convert any currency instantly with a beautiful UI.",
    tech: ["Css", "Html", "Js","API"],
    github: "https://github.com/sufyankhan25/real-time-currency-converter",
    live: "https://real-time-currency-converter-xi.vercel.app/",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    date: "2024-07-10"
  },
  {
    title: " Fact",
    description: "Simple, lightweight, and fun app that generates random interesting facts using an external API.",
    tech: ["React", "API", "TailwindCSS"],
    github: "https://github.com/sufyankhan25/random-fact",
    live: "https://fact-alpha.vercel.app/",
    image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=600&h=400&fit=crop",
    date: "2024-07-05"
  },
  {
    title: "AI Traffic Management System",
    description: "AI-based traffic simulation model that optimizes routes, controls signals, and reduces congestion using intelligent algorithms.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sufyankhan25/AI-Traffic-Management",
    live: "https://ai-traffic-management.vercel.app/",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    date: "2024-08-01"
  },
  {
    title: "Laptop E-Commerce Website",
    description: "A complete e-commerce website with login, cart, order placing, protected routes, and admin backend. Built with MERN stack and JWT authentication.",
    tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sufyankhan25/laptop_web",
    live: "",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    date: "2024-09-10"
  }
];
const Projects = () => {
  const [viewMore, setViewMore] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects
    .filter(p => (filter === "All" ? true : p.tech.includes(filter)))
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  const visibleProjects = viewMore ? sortedProjects : sortedProjects.slice(0, 2);
  const allTech = ["All", ...new Set(projects.flatMap(p => p.tech))];

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6 relative z-0">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-6 drop-shadow-lg"
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {allTech.map((tech, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 text-sm rounded-full shadow-md transition font-medium ${filter === tech ? 'bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20'}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <div className="flex gap-4">
          <button
            onClick={() => setSortBy("recent")}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition ${sortBy === 'recent' ? 'bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20'}`}
          >
            Newest First
          </button>
          <button
            onClick={() => setSortBy("oldest")}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition ${sortBy === 'oldest' ? 'bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20'}`}
          >
            Oldest First
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by project name..."
          className="mt-2 md:mt-0 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <AnimatePresence>
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl overflow-hidden hover:shadow-cyan-400/40 hover:scale-[1.03] transition duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-blue-300 drop-shadow">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 text-xs rounded-full shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setViewMore(!viewMore)}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-cyan-500 hover:to-blue-500 shadow-lg hover:scale-105 transition"
        >
          {viewMore ? "Show Less" : "View More"}
        </button>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 text-white p-8 rounded-xl max-w-md w-full relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-3 text-white hover:text-red-300"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-300 mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-gray-200 mb-3">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a href={selectedProject.github} target="_blank" className="text-blue-400 hover:underline flex items-center gap-1">
                <FaGithub /> GitHub
              </a>
              <a href={selectedProject.live} target="_blank" className="text-green-400 hover:underline flex items-center gap-1">
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
