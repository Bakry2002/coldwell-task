"use client";

import Image from "next/image";
import { AppButton } from "../global/app-button";
import { ContentWrapper } from "../global/content-wrapper";
import { motion } from "framer-motion";

export const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative mb-6 md:mb-10">
      {/* Background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-center bg-no-repeat bg-cover"
        style={{
          mask: "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.2) 100%)",
          WebkitMask:
            "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] bg-center bg-no-repeat bg-cover overflow-hidden">
        <ContentWrapper className="flex h-full items-center justify-center relative z-10 px-4 sm:px-6">
          {/* Animated radial gradient circles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [-10, 10, -10],
            }}
            transition={{
              opacity: { duration: 0.5 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
            className="absolute top-2 sm:top-3 left-[45%] sm:left-[48%] transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full"
            style={{
              background:
                "radial-gradient(circle at top left, #494955 0%, #141414 70%)",
              filter: "blur(4px)",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [-15, 15, -15],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            className="absolute top-[55%] sm:top-[60%] left-40 sm:left-56 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
            style={{
              background:
                "radial-gradient(circle at top left, #494955 0%, #141414 70%)",
              filter: "blur(6px)",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [-8, 12, -8],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
            className="absolute top-[40%] sm:top-[45%] right-32 sm:right-48 w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            style={{
              background:
                "radial-gradient(circle at top left, #494955 0%, #141414 70%)",
              filter: "blur(4px)",
            }}
          />

          {/* Center radial gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              },
            }}
            className="absolute top-[35%] sm:top-[40%] left-1/2 transform -translate-x-1/2 -z-10 -translate-y-1/2 rounded-full"
            style={{
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, #222228 0%, #22222800 100%)",
              filter: "blur(6px)",
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex relative z-20 flex-col gap-4 sm:gap-6 items-center justify-center text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[75px]"
            >
              Beautiful Landing Page Design for You
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-neutral-400 font-light text-sm sm:text-base md:text-lg text-center max-w-xs sm:max-w-md lg:max-w-lg px-4 sm:px-0"
            >
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppButton
                variant="gradient"
                className="rounded-sm mt-2 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
              >
                Download Template
              </AppButton>
            </motion.div>
          </motion.div>
        </ContentWrapper>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full flex items-center justify-center px-4 sm:px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02, zIndex: 10 }}
          exit={{ zIndex: 10 }}
          whileInView={{ zIndex: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/hero-image.svg"}
            alt="Hero image"
            width={600}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] relative z-10 h-auto"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute h-[300px] sm:h-[400px] md:h-[450px] lg:h-[510px] top-12 sm:top-16 md:top-20 lg:top-24 left-0 right-0 bottom-0 z-[8] bg-[url('/hero-gradient-pattern.svg')] bg-center bg-no-repeat bg-cover"
        />
      </motion.div>
    </section>
  );
};
