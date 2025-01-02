import React from "react";
import Card from "./card";
import { howithelps } from "../utils";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../../utility/animation";

const HowItHelps = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {howithelps.map((tag, i) => (
                <motion.div
                  variants={SlideRight(tag.delay)}
                  initial="hidden"
                  whileInView={"visible"}
                  className=""
                >
                  <Card tag={tag} key={i} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            initial="hidden"
            whileInView={"visible"}
            className="flex flex-col xl:justify-center xl:pr-8"
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
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
