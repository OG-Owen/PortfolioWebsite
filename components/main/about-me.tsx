"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";
import { orbitron } from "@/lib/fonts";

export const Encryption = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col items-center md:flex-row md:items-center md:justify-center md:min-h-screen w-full h-full"
    >
      <div className="w-full flex flex-col items-center md:absolute md:top-0 z-[5] px-6 gap-3 pt-20">
        <p className="cursive text-[clamp(0.9rem,2.5vw,1.25rem)] text-gray-400 text-center max-w-[700px] tracking-wide pb-6">
          Even though we may never fully grasp what a mind is, I watch in wonder as my own mind picks up new abilities and grows a little stronger every single day.
        </p>
        <motion.div variants={slideInFromTop} className="flex flex-col items-center gap-3">
          <h2 className={`text-[clamp(1.75rem,5vw,2.5rem)] font-900 text-white tracking-wide ${orbitron.className}`}>
            About Me
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd] rounded-full opacity-70" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center md:translate-y-[-50px] md:absolute z-[20] w-auto h-auto my-8 md:my-0">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/lock-top.png`}
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            style={{ width: "50px", height: "50px", filter: "sepia(1) hue-rotate(175deg) saturate(3) brightness(1.1)" }}
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/lock-main.png`}
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
            style={{ width: "70px", height: "70px", filter: "sepia(1) hue-rotate(175deg) saturate(3) brightness(1.1)" }}
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#1e3a5f8b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Owen Gray</h1>
        </div>
      </div>

      <div className="z-[20] md:absolute md:bottom-[10px] px-[5px] max-w-[600px] text-center pb-10 md:pb-0">
        <div className="cursive text-[clamp(0.85rem,2vw,1.125rem)] font-medium text-center text-gray-300 leading-relaxed">
          I write code because it&apos;s what I like to do. Nobody has the answers — not to why anything exists, not to what any of this really is. I find that freeing. So I build, I learn, and I sit with the uncertainty. Whatever this experience is, I&apos;d rather spend it creating things.
        </div>
      </div>


      <div className="w-full flex items-start justify-center absolute opacity-30 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          style={{
            filter: "hue-rotate(-50deg) saturate(0.9) brightness(1.05)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 80%)",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 80%)",
          }}
        >
          <source src={`${process.env.NEXT_PUBLIC_BASE_PATH}/videos/encryption-bg.webm`} type="video/webm" />
        </video>
      </div>
    </div>
  );
};
