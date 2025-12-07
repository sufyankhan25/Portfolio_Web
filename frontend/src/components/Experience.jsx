import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase, FaBuilding, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "XYZ Software House",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Worked on real-world MERN stack projects with a focus on frontend UI components, backend APIs, and MongoDB schema design.",
    icon: <FaBuilding />,
  },
  {
    title: "Freelance Web Developer",
    company: "Fiverr / Upwork",
    duration: "2023 - Present",
    description:
      "Completed client projects using React, Tailwind, Firebase, and Node.js. Specialized in building responsive UIs and integrating APIs.",
    icon: <SiFiverr />,
  },
  {
    title: "Personal Projects",
    company: "Self-Learning",
    duration: "2022 - Present",
    description:
      "Built multiple full-stack apps like Gym Manager, Food Delivery, and Resume Builder using modern stacks and deployment tools.",
    icon: <FaUserGraduate />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-12 drop-shadow-lg"
      >
        Experience Timeline
      </motion.h2>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          style={{ height }}
          className="absolute left-4 top-0 w-1 bg-blue-500 origin-top rounded-full"
        />

        <div className="space-y-12 pl-12 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex gap-6"
            >
              <div className="absolute -left-[2.5rem] top-1 bg-gray-800 border-4 border-blue-500 rounded-full p-2 z-10">
                {exp.icon}
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-md hover:shadow-blue-500/40 transition duration-300 w-full">
                <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                <p className="text-gray-300">
                  {expandedIndex === index ? exp.description : exp.description.slice(0, 80) + "..."}
                </p>
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="text-sm text-blue-400 mt-2 hover:underline"
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
