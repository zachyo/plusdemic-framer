import React from "react";
import { navLinks } from "../utils";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../../utility/animation";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container flex justify-between items-center py-5">
        {/* logo */}
        <div className="">
          <img src={logo} alt="" className="w-40" />
        </div>
        {/* links */}
        <ul className="hidden md:flex items-center gap-5 ">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* cta */}
        <div className="">
          <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
