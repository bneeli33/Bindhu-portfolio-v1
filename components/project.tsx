"use client";

import { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
  images?: ReadonlyArray<StaticImageData>;
};

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
  urlLink,
  images,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.setAttribute("data-modal-open", "true");
    } else {
      body.removeAttribute("data-modal-open");
    }
    return () => {
      body.removeAttribute("data-modal-open");
    };
  }, [isModalOpen]);

  const imageGallery: ReadonlyArray<StaticImageData> = images ?? [imageUrl];

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageGallery.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? imageGallery.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") previousImage();
    if (e.key === "Escape") closeModal();
  };

  return (
    <>
      <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
        <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
              <p className="font-bold text-gray-500 dark:text-white/70">
                Made with:{" "}
              </p>
              {icons.map((icon, iconIndex) => (
                <Icon key={iconIndex} icon={icon} className="mr-3 text-2xl" />
              ))}
            </ul>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={openModal}
                // className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-full hover:scale-105 hover:bg-blue-700 transition"
                className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-full hover:scale-105"
              >
                View Project
              </button>

              {urlLink && (
                <a
                  href={urlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-full hover:scale-105"
                >
                  <BiLinkExternal className="mr-1" /> Live
                </a>
              )}

              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#111827] text-white py-2 px-4 rounded-full hover:scale-105"
                >
                  <AiFillYoutube className="mr-1" /> Demo
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-[#111827] py-2 px-4 rounded-full text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                >
                  <AiFillGithub className="mr-1 opacity-70" />{" "}
                  <span className="opacity-70">GitHub</span>
                </a>
              )}
            </div>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition lg:scale-[1.1] cursor-pointer"
            onClick={openModal}
          />
        </section>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
              >
                <MdClose size={24} />
              </button>

              {imageGallery.length > 1 && (
                <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {imageGallery.length}
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <Image
                  src={imageGallery[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className="object-contain max-h-full"
                  quality={95}
                />
              </div>

              {/* Navigation buttons */}
              {imageGallery.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                  >
                    <MdArrowBack size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
                  >
                    <MdArrowForward size={24} />
                  </button>
                </>
              )}

              {/* Project details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">
                  {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}