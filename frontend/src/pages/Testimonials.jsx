import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed Qaiser",
    role: "Senior Developer",
    feedback:
      "Sufyan is a brilliant MERN developer. His UI/UX sense and backend knowledge make him stand out. Highly recommend for modern web projects.",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Vineeta",
    role: "Team Lead",
    feedback:
      "Incredible dedication and consistent delivery. Sufyan always goes above and beyond in every team project.",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
  },
  {
    name: "Owais Gul",
    role: "Project Partner",
    feedback:
      "A valuable teammate. His full-stack skills and communication help us finish our GoTaxi app with excellence.",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-16 drop-shadow-lg"
      >
        Testimonials
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group relative"
          >
            {/* Avatar */}
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full border-2 border-blue-500 absolute -top-8 left-1/2 transform -translate-x-1/2"
            />

            <div className="mt-10">
              <p className="text-gray-300 italic mb-4 transition-all group-hover:scale-[1.02]">
                “{t.feedback}”
              </p>
              <div className="border-t border-blue-500/30 pt-4">
                <h4 className="text-blue-300 font-semibold text-lg">{t.name}</h4>
                <p className="text-sm text-gray-400 mb-1">{t.role}</p>
                {/* Rating Stars */}
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(t.rating)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
