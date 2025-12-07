import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] backdrop-blur-md shadow-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Corner Logo */}
        <Link to="hero" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-bold text-white hover:text-blue-400 tracking-wide transition-colors duration-300">
            <span className="text-blue-400">Sufyan</span>.dev
          </h1>
        </Link>

        {/* Desktop Nav (Right Corner) */}
        <ul className="hidden md:flex gap-8 items-center text-white text-sm font-semibold uppercase tracking-wide">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-blue-400 border-b border-blue-400"
                className="cursor-pointer relative group py-2 transition-all duration-300 hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-6 space-y-4 text-white text-lg font-medium animate-slideDown">
          {navLinks.map((link) => (
            <div key={link.id} onClick={() => setOpen(false)}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-blue-400"
                className="block cursor-pointer py-2 border-b border-gray-700 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
