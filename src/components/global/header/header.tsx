"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { ContentWrapper } from "../content-wrapper";
import Image from "next/image";
import { HeaderLinks } from "./header-links";

const links = [
  {
    title: "Home",
    slug: "home",
    href: "/",
  },
];

export const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to background opacity
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const linksVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`flex pt-2 z-50 fixed w-full top-0 left-0 right-0 items-center transition-all duration-300 ${
        isScrolled ? "h-20" : " h-18"
      }`}
    >
      {/* Animated background that appears on scroll */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 bg-black backdrop-blur-sm"
      />

      {/* Pattern background - only show when not scrolled */}
      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute md:block hidden inset-0 bottom-4 bg-[url('/hero-pattern.svg')] bg-center bg-no-repeat bg-cover"
          style={{
            mask: "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.2) 100%)",
            WebkitMask:
              "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      )}

      <ContentWrapper className="relative z-10 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex w-full justify-between items-center gap-1 sm:gap-2 md:gap-4">
          {/* LOGO */}
          <motion.div
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <Image
              src={"/logo.svg"}
              alt="app logo"
              width={80}
              height={80}
              className="w-24 h-24"
            />
          </motion.div>

          {/* Links & CTA */}
          <motion.div variants={linksVariants} className="flex-shrink-0">
            <HeaderLinks links={links} />
          </motion.div>
        </div>
      </ContentWrapper>
    </motion.header>
  );
};
