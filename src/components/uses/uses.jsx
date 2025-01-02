import React from "react";
import { uses } from "../utils";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            initial="hidden"
            whileInView={"visible"}
            className="flex flex-col justify-center xl:pr-8"
          >
            <h2 className="text-3xl font-bold text-darkBlue">
              How it helps people
            </h2>
            <p className=" text-gray-400 mt-4">
              Lorem ipsum dolor sit adipisicing elit. Atque culpa assumenda, ti
              id debitis nobis.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum sectetur adipisicing elit. Laborum ipsa iure
              aspernatur ape alias ex excepturi ipsam repellat iusto minima!.{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
            <button className="w-fit border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300 mt-4">
              Get in Touch
            </button>
          </motion.div>
          {uses.map((option, i) => (
            <motion.div
              variants={SlideLeft(option.delay)}
              initial="hidden"
              whileInView={"visible"}
              key={i}
            >
              <img src={option.img} alt="" className="w-full rounded-3xl" />
              <p className="text-gray-400 mt-4">{option.heading}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uses;
