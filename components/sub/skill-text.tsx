"use client";

import { motion } from "framer-motion";

import { slideInFromTop } from "@/lib/motion";
import { orbitron } from "@/lib/fonts";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mb-6">
      <motion.div variants={slideInFromTop} className="flex flex-col items-center gap-3">
        <h2 className={`text-[40px] font-900 text-white tracking-wide ${orbitron.className}`}>
          Skills & Technologies
        </h2>
        <div className="w-24 h-[2px] bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd] rounded-full opacity-70" />
      </motion.div>
    </div>
  );
};
