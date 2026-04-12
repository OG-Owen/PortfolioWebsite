import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
        style={{
          filter: "hue-rotate(-70deg) saturate(1.2)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH}/videos/blackhole.webm`} type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
