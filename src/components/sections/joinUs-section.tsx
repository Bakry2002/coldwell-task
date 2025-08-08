"use client";

import Image from "next/image";
import { AppButton } from "../global/app-button";
import { motion } from "framer-motion";

export const JoinUsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:h-[400px] h-[380px] text-white mb-10 relative md:absolute md:justify-between justify-center flex items-center px-4 lg:px-20 md:-top-32 lg:-top-52 top-0 overflow-hidden w-full lg:mx-auto max-w-full lg:max-w-[68rem] md:max-w-[50rem] rounded-2xl md:rounded-4xl bg-gradient-to-tl to-[#FF9898] from-[#8054FF]"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex md:text-left md:items-start items-center text-center flex-col gap-8"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm"
        >
          Love our Our Tool?
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl leading-[50px] font-semibold max-w-[30rem] md:max-w-[22rem]"
        >
          Feel Free to Join our 15 Days Free Trial
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AppButton variant="primary" className="md:w-fit text-sm py-3">
            Download Template
          </AppButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src={"assets/joinus_image.svg"}
          alt="Join us image"
          width={550}
          height={200}
          className="absolute md:block hidden top-1/2 -translate-y-1/2 right-0"
        />
      </motion.div>
    </motion.section>
  );
};
