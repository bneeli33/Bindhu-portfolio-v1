"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import bindhuNeeli from "@/public/bindhuNeeli.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={bindhuNeeli}
              alt="Bindhu portrait"
              width={240}
              height={240}
              quality={95}
              priority
              className="h-36 w-36 rounded-full object-cover object-top border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.h4
            className=" mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl text-white max-w-[50rem] mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mt-3 flex justify-center">
              <div className="relative inline-flex text-sm sm:text-base font-bold px-5 py-2 whitespace-nowrap 
            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
            text-white shadow-lg rounded-full tracking-wide overflow-hidden">
                #OpenToWork
                <span
                  className="absolute inset-0 -translate-x-full animate-[shine_3s_ease-in-out_infinite] 
               bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <span className="absolute -top-1 left-3 text-white/90 animate-[sparkle_2.5s_ease-in-out_infinite]">✨</span>
                <span className="absolute -bottom-1 right-3 text-white/80 animate-[sparkle_3s_ease-in-out_infinite]">✨</span>
              </div>
            </div>
          </motion.h4>
        </div>
      </div>    
      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Bindhu Neeli.</span> I'm currently working as a{" "}
        <span className="font-bold">Software Developer</span> at{" "}
        <a href="https://symbols.app/" className="font-bold underline" target='_blank' style={{ textUnderlineOffset: '4px' }}>Symbols</a>. I build design-system tooling and reusable UI components in React and TypeScript, including no-code styling and CSS selector editors.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="relative group inline-block">
          <a
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                      focus:scale-110 hover:scale-105 active:scale-95 transition cursor-pointer 
                      borderBlack text-gray-950"
            href="https://github.com/bneeli33"
            target="_blank"
          >
            GitHub <FaGithub className="opacity-70" />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap 
                            rounded-md bg-black text-white text-xs px-2 py-1 opacity-0 
                            group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Mostly worked on Company private GIT repositories
          </span>
        </div>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/bindhuneeli/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          40% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
