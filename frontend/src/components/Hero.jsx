import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const titles = [
  "Frontend Enthusiast",
  "MERN Stack Developer",
  "Clean Coder 🚀",
  "React + Node.js Lover",
  "Full Stack Web Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero"
      className="pt-24 relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen px-6 pb-10 font-sans overflow-hidden"
    >
      {/* Floating Glowing Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-600 rounded-full filter blur-2xl opacity-20 animate-ping"></div>
        <div className="absolute top-[50%] left-[60%] w-[200px] h-[200px] bg-cyan-400 rounded-full filter blur-2xl opacity-25 animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6"
      >
        {/* Name + Lottie */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Animated Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
          >
            Muhammad Sufyan
          </motion.h1>

          {/* Lottie iframe animation */}
          <div className="w-40 md:w-60">
            <iframe
              src="https://lottie.host/?file=b27c46fb-0125-4919-babe-76364583c09d/CJ0dxcsk7W.lottie"
              style={{ width: "100%", height: "100%", border: "none" }}
              allowFullScreen
              title="coding animation"
            ></iframe>
          </div>
        </div>

        {/* Sliding Titles */}
        <div className="relative h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={titles[index]}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute w-full text-2xl md:text-4xl font-semibold"
            >
              {titles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Building fast, scalable, and beautiful full-stack web applications
          using React, Node, Express, and MongoDB.
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-6">
          {[{
              href: "https://github.com/sufyankhan25",
              icon: <FaGithub />,
              label: "GitHub"
            },
            {
              href: "https://www.linkedin.com/in/muhammad-sufyan-804921367",
              icon: <FaLinkedin />,
              label: "LinkedIn"
            },
            {
              href: "/Resume.pdf",
              icon: <FaDownload />,
              label: "Resume",
              download: true
            },
          ].map(({ href, icon, label, download }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              download={download}
              aria-label={label}
              whileHover={{ scale: 1.2, color: "#22d3ee" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-cyan-400 transition duration-300 text-3xl"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md transition-all duration-300 animate-pulse"
        >
          Let’s Connect 🚀
        </motion.a>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="mt-16 text-gray-400"
        >
          ↓ Scroll Down
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
