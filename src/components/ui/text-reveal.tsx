"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import { cn } from "../../lib/utils";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.avif";
import img3 from "../../assets/img3.avif";


interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const words = text.split(" ");

  const image1Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "10%"]);
  const image2Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "205%"]);
  const image3Y = useTransform(scrollYProgress, [0, 0.5], ["100%", "60%"]);

  const image1Rotate = useTransform(smoothProgress, [0, 1], [-10, 10]);
  const image2Rotate = useTransform(smoothProgress, [0, 1], [10, -10]);
  const image3Rotate = useTransform(smoothProgress, [0, 1], [-10, 10]);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-transparent md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>

      <motion.div
        style={{
          y: image1Y,
          rotate: image1Rotate,
        }}
        className="absolute left-[25%] md:left-[5%] w-[220px] h-[220px] md:w-[250px] md:h-[250px] -translate-x-1/2"
      >
        <img src={img1} alt="Animated 1" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        style={{
          y: image2Y,
          rotate: image2Rotate,
        }}
        className="absolute left-[25%] w-[220px] h-[220px] md:w-[250px] md:h-[250px] -translate-x-1/2"
      >
        <img src={img2} alt="Animated 2" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        style={{
          y: image3Y,
          rotate: image3Rotate,
        }}
        className="absolute right-[5%] w-[220px] h-[220px] md:w-[250px] md:h-[250px] -translate-x-1/2  hidden md:block"
      >
        <img src={img3} alt="Animated 3" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
