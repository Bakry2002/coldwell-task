"use client";

import Image from "next/image";
import { ContentWrapper } from "../global/content-wrapper";
import { motion, Variants } from "framer-motion";

const companyLogos = [
  "/assets/companyLogos/company_1.svg",
  "/assets/companyLogos/company_2.svg",
  "/assets/companyLogos/company_3.svg",
  "/assets/companyLogos/company_4.svg",
  "/assets/companyLogos/company_5.svg",
  "/assets/companyLogos/company_6.svg",
];

export const TrustedBySection = () => {
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

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logosContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mt-8 md:mb-0 mb-10 sm:mt-12 md:mt-14 bg-[#18181C] min-h-[400px] sm:min-h-[500px] md:min-h-[590px] py-12 sm:py-16 md:py-20">
      <ContentWrapper className="px-4 sm:px-6 md:px-8 lg:px-12 gap-8 sm:gap-12 md:gap-14 flex flex-col items-center h-full justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={headerVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-center leading-tight sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-white"
          >
            Companies we Worked With Since 2015
          </motion.h2>
        </motion.div>

        <motion.div
          variants={logosContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl"
        >
          {companyLogos.map((logo, index) => (
            <motion.div key={logo} variants={logoVariants} custom={index}>
              <CompanyCard logo={logo} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </ContentWrapper>
    </section>
  );
};

const CompanyCard = ({ logo, index }: { logo: string; index: number }) => {
  return (
    <motion.div
      className="flex flex-col w-full h-16 bg-black px-2 py-3 rounded-md items-center justify-center hover:bg-[#222228] transition-colors duration-300 cursor-pointer"
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src={logo}
        alt={`Company logo ${index + 1}`}
        width={100}
        height={100}
        className="w-20 h-20 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
      />
    </motion.div>
  );
};
