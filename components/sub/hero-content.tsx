"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { orbitron } from "@/lib/fonts";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#1e3a5f8b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#7dd3fc] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Student — Future Software Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`flex flex-row items-baseline gap-4 mt-6 whitespace-nowrap ${orbitron.className}`}
        >
          <span className="text-6xl font-900 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd]">
            OWEN
          </span>
          <span className="text-6xl font-900 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#c4c9d4] to-gray-500">
            GRAY
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] italic"
        >
          The universe doesn&apos;t grant meaning &mdash; which is why I must build.
        </motion.p>

        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          View Projects
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="space illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 45%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 45%, transparent 80%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
