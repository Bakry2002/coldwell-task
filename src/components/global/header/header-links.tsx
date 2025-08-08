"use client";

import { HeaderLinksProps } from "@/types";
import Link from "next/link";
import { AppButton } from "../app-button";
import { motion } from "framer-motion";

export const HeaderLinks = ({ links }: HeaderLinksProps) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      {/* Navigation Links - Hidden on mobile, visible on medium+ screens */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {links.map((link) => (
          <motion.div
            key={link.slug}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.href}
              className="text-white hover:text-neutral-400 transition-colors text-sm lg:text-base font-medium"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Button - Responsive text */}
      <motion.div>
        <AppButton
          variant="gradient"
          className="rounded-sm text-xs sm:text-sm md:text-sm lg:text-base px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5"
        >
          <span className="sm:hidden">Download</span>
          <span className="hidden sm:inline">Download Template</span>
        </AppButton>
      </motion.div>
    </div>
  );
};
