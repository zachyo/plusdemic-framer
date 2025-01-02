import React from "react";
import who from "../../assets/icon1.png";
import doctor from "../../assets/icon2.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-10 mt-16">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold text-darkBlue text-center py-6"
        >
          Why you can trust this tool
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mt-5">
          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            className="space-y-6 text-center md:text-left px-10 xl:px-20 2xl:px-32"
          >
            <img src={who} alt="" className="h-[97px] mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO
            </p>
            <p className="text-sm text-gray-400">
              Enhance your preliminary diagnosis and triage with pediatric
              content. <span className="text-primary">Learn more</span>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            className="space-y-6 text-center md:text-left px-10 xl:px-20 2xl:px-32"
          >
            <img src={doctor} alt="" className="h-[97px] mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">Verified by doctors</p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO
            </p>
            <p className="text-sm text-gray-400">
              Enhance your preliminary diagnosis and triage with pediatric
              content. <span className="text-primary">Learn more</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;

/**
 * 
 * <div className="flex items-start gap-4 md:px-8">
            <img src={doctor} alt="" className="h-[97px]" />
            <div className="space-y-6 text-center md:text-left mt-5">
              <p className="text-3xl font-semibold">Verified by doctors</p>
              <p className="">
                We want our tool to be safe and reliable, so its logic is based
                on the official global information provided by the WHO
              </p>
              <p className="text-sm text-gray-400">
                Enhance your preliminary diagnosis and triage with pediatric
                content. <span className="text-primary">Learn more</span>
              </p>
            </div>
          </div>
 */
