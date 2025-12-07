import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center z-[9999] overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Loader Container */}
      <div className="relative">
        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-32 h-32 -left-4 -top-4"
        >
          <div className="w-full h-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 rounded-full"></div>
        </motion.div>

        {/* Middle Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-28 h-28 -left-2 -top-2"
        >
          <div className="w-full h-full border-4 border-transparent border-b-purple-400 border-l-pink-500 rounded-full"></div>
        </motion.div>

        {/* Inner Circle with Glow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            boxShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 40px rgba(59, 130, 246, 0.8)",
              "0 0 20px rgba(59, 130, 246, 0.6)",
            ]
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center relative"
        >
          {/* Pulse Effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-blue-400 rounded-full"
          />

          {/* Text Logo with Gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 1)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ]
            }}
            transition={{ 
              delay: 0.6, 
              duration: 0.8,
              textShadow: { duration: 2, repeat: Infinity }
            }}
            className="text-3xl font-extrabold text-white z-10 drop-shadow-2xl"
          >
            MS
          </motion.h1>
        </motion.div>
      </div>

      {/* Loading Text with Animated Dots */}
      <div className="mt-10 flex items-center gap-2">
        <motion.p
          className="text-gray-300 tracking-widest text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Loading
        </motion.p>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom Decorative Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500 text-xs tracking-wider"
      >
        Powered by Modern Design
      </motion.p>
    </div>
  );
};

export default Loader;