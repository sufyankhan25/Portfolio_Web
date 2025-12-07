import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationArrow, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("http://13.203.204.44:5000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 4000);

    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-6 overflow-hidden">
      {/* Glowing Shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-bounce"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-400 underline underline-offset-8 mb-16"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start z-10 relative">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-2 text-blue-300">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Open to freelance, internships, or full-time roles. Got a project or idea? Let's talk!
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-300">
              <a href="mailto:sufyan265631@gmail.com" className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-blue-500 text-xl" />
                <p>sufyan265631@gmail.com</p>
              </a>
              <a href="https://wa.me/923069044757" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-green-400 transition-colors">
                <FaPhone className="text-blue-500 text-xl" />
                <p>0306-9044757</p>
              </a>
              <div className="flex items-center gap-4">
                <FaLocationArrow className="text-blue-500 text-xl" />
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20"
          >
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Connect on Social</h4>
            <div className="flex gap-4">
              {[
                { icon: FaWhatsapp, color: "hover:bg-green-600", link: "https://wa.me/923069044757" },
                { icon: FaLinkedin, color: "hover:bg-blue-600", link: "https://www.linkedin.com/in/sufyan-khan-5b8b8b1b0/" },
                { icon: FaGithub, color: "hover:bg-gray-700", link: "https://github.com/sufyankhan25" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white/10 rounded-xl ${social.color} transition-all duration-300 border border-white/20 hover:border-white/40`}
                >
                  <social.icon className="text-2xl text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form - Enhanced */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-2xl space-y-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            Send Me a Message
          </h3>

          {/* Name Input */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative group"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/5 border-2 border-white/20 px-5 py-4 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-all duration-300 group-hover:bg-white/10"
              required
            />
            <motion.div
              initial={{ width: 0 }}
              whileFocus={{ width: "100%" }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative group"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/5 border-2 border-white/20 px-5 py-4 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-all duration-300 group-hover:bg-white/10"
              required
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative group"
          >
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/5 border-2 border-white/20 px-5 py-4 rounded-xl focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 transition-all duration-300 resize-none group-hover:bg-white/10"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="relative w-full py-4 rounded-xl text-lg font-bold text-white overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 transition-all duration-300" />
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : (
                "Send Message 🚀"
              )}
            </span>
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium backdrop-blur-sm"
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center font-medium backdrop-blur-sm"
            >
              ❌ {errorMsg}
            </motion.div>
          )}
        </motion.form>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-24 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#gradient)"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Contact;