import Image from "next/image";
import { ContentWrapper } from "../global/content-wrapper";
import { FaDiscord, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const AppFooter = () => {
  return (
    <footer className="bg-[#18181C] text-white flex flex-col">
      {/* Upper Section */}
      <ContentWrapper className="flex w-full flex-col md:flex-row flex-1 py-6 md:justify-between items-center md:items-start">
        {/* LOGO and Description */}
        <div className="flex self-center flex-col gap-6 text-center md:text-left mb-8 md:mb-0">
          <div className="flex justify-center md:justify-start">
            <Image src={"/plain-logo.svg"} alt="logo" width={50} height={50} />
          </div>
          <p className="text-sm text-[#9E9E9E] max-w-[20rem]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex justify-center md:justify-end mb-4 md:mb-0">
          <div className="text-center md:text-left">
            <p className="mb-2">Sections</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <ul key={index} className="flex flex-col gap-3">
                  <li className="cursor-pointer text-neutral-500 hover:text-neutral-400 transition-colors">
                    Home
                  </li>
                  <li className="cursor-pointer text-neutral-500 hover:text-neutral-400 transition-colors">
                    Section 1
                  </li>
                  <li className="cursor-pointer text-neutral-500 hover:text-neutral-400 transition-colors">
                    Section 2
                  </li>
                  <li className="cursor-pointer text-neutral-500 hover:text-neutral-400 transition-colors">
                    Section 3
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>

      {/* Lower Section */}
      <ContentWrapper className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center bg-black py-4 md:py-0 h-auto md:h-16">
        <p className="text-[#9E9E9E] text-sm mb-4 md:mb-0">
          All Rights Reserved Inkyy.com 2022
        </p>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center bg-[#18181C] hover:bg-neutral-600 cursor-pointer rounded-xl">
            <FaTwitter className="w-4 h-4" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-[#18181C] hover:bg-neutral-600 cursor-pointer rounded-xl">
            <FaLinkedinIn className="w-4 h-4" />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-[#18181C] hover:bg-neutral-600 cursor-pointer rounded-xl">
            <FaDiscord className="w-4 h-4" />
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};
