import React from "react";
import heroImg from "../../assets/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] place-items-center bg-brandWhite rounded-3xl">
        {/* info */}
        <div className="space-y-4 text-center md:text-left mt-24 mb-10 md:mt-0 md:mb-0 xl:pr-40">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView={"visible"}
            className="text-5xl font-bold text-darkBlue"
          >
            COVID-19 Risk
            <br /> Assessment Tool
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView={"visible"}
            className="text-lg text-gray-400 mt-4"
          >
            A set of solutions designed to help quickly identify coronavirus
            symptoms and get reliable information regarding COVID-19 concerns.
          </motion.p>
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView={"visible"}
            className="bg-primary text-white p-4 font-bold rounded-lg mt-4 w-fit hover:shadow-lg duration-200 mx-auto md:mx-0"
          >
            <button className="">See how to use it</button>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          className="flex items-center justify-center"
        >
          <img src={heroImg} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
