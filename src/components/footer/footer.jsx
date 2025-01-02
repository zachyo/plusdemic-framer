import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{opacity : 0}}
      whileInView={{opacity : 1}}
      transition={{delay : 0.3, duration : 0.5, type : 'tween'}}
    >
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* brand */}
        <div className="space-y-4">
          <img src={logo} alt="" className="w-40" />
          <p className="text-gray-400 md:max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur, architecto expedita delectus.
          </p>
        </div>
        {/* socials */}
        <div className="flex space-x-6 text-3xl">
          <FaFacebook className="hover:text-primary duration-200" />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
