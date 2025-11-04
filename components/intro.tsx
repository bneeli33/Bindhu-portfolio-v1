"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import bindhu from "@/public/bindhu.png";

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
              src={bindhu}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Bindhu.</span> I'm currently working as a{" "}
        <span className="font-bold">Software Engineer</span> at{" "}
        <a href="https://hiivehealth.com/" className="font-bold underline" target='_blank' style={{ textUnderlineOffset: '4px' }}>Hiive Health</a>. I build web applications using React, Next.js, TypeScript, JavaScript, Python/Django, and GraphQL. My work focuses on designing user-friendly interfaces, improving clinical workflows, and delivering secure, reliable healthcare software.
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
    </section>
  );
}
