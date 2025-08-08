"use client";

import Image from "next/image";
import { AppCard } from "../global/app-card";
import { ContentWrapper } from "../global/content-wrapper";
import { FeatureProgramsCircle } from "../feature-programs-circle";
import { AppButton } from "../global/app-button";
import { motion, Variants } from "framer-motion";

const features = [
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
    iconHref: "/feature_1.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
    iconHref: "/feature_2.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
    iconHref: "/feature_3.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
    iconHref: "/feature_4.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
    iconHref: "/feature_5.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem ",
    iconHref: "/feature_6.svg",
  },
];

export const FeaturesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Updated card variants with sequential timing
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Increased delay between cards
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const secondSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="mt-16 sm:mt-20 md:mt-32 lg:mt-36 mb-8 sm:mb-10">
      <ContentWrapper>
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2 text-center sm:text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white"
          >
            Feature Boxes
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#9E9E9E] max-w-full sm:max-w-lg mx-auto sm:mx-0"
          >
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <AppCard className="mt-4 sm:mt-6 px-4 sm:px-6 bg-[#18181C] py-6 sm:py-8 rounded-xl flex flex-col items-center justify-center border-none gap-4 h-full hover:bg-[#1F1F23] transition-colors duration-300 cursor-pointer">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#222228] p-2 rounded-xl flex items-center justify-center">
                  <Image
                    src={feature.iconHref}
                    alt="icon"
                    width={50}
                    height={50}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                </div>
                <h3 className="font-medium text-base sm:text-lg text-white text-center">
                  {feature.title}
                </h3>
                <p className="text-center text-xs sm:text-sm text-[#9E9E9E] max-w-[15rem] sm:max-w-[17rem] leading-relaxed">
                  {feature.description}
                </p>
              </AppCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Section */}
        <motion.div
          variants={secondSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex flex-col lg:flex-row mt-16 md:mt-30 items-center justify-center lg:justify-between gap-12 md:gap-24"
        >
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 order-2 lg:order-1"
          >
            <FeatureProgramsCircle />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-4 sm:gap-6 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-md text-center lg:text-left order-1 lg:order-2 px-4 sm:px-0"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-[45px] md:leading-[50px] lg:leading-[55px] font-semibold text-white"
            >
              We&apos;re here to guide and help you at all times
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#9E9E9E] max-w-full sm:max-w-[21rem] mx-auto lg:mx-0 leading-relaxed"
            >
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="w-fit mx-auto lg:mx-0"
            >
              <AppButton
                variant="gradient"
                className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-sm"
              >
                Download
              </AppButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </ContentWrapper>
    </section>
  );
};
