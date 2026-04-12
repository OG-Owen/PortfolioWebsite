"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div
      id="about-me"
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-cyan-400">
            Me
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#1e3a5f8b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Owen Gray</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px] max-w-[600px] text-center">
        <div className="cursive text-[18px] font-medium text-center text-gray-300 leading-relaxed">
          I write code because I&apos;m here and it&apos;s what I do. Nobody has the answers — not to why anything exists, not to what any of this really is. I find that freeing. So I build, I learn, and I sit with the uncertainty. Whatever this experience is, I&apos;d rather spend it creating things.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
