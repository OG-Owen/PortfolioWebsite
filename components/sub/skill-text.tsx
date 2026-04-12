"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#1e3a5f8b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#7dd3fc] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Skills & Technologies</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        What I&apos;ve learned so far.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        We don&apos;t know what a mind is, yet here&apos;s what mine has learned to do.
      </motion.div>
    </div>
  );
};
