import Image from "next/image";
import { ContentWrapper } from "../global/content-wrapper";
import { FaDiscord, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const AppFooter = () => {
  return (
    <footer className=" bg-[#18181C] flex flex-col h-[320px]">
      <ContentWrapper className="flex w-full flex-1 py-6 justify-between">
        {/* LOGO */}
        <div className="flex justify-center flex-col gap-6">
          <Image src={"/plain-logo.svg"} alt="logo" width={50} height={50} />
          <p className="text-sm text-[#9E9E9E] max-w-[20rem]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>

        {/* Links */}
        <div className="self-end mb-4">
          <p className="mb-2">Sections</p>
          <div className="flex items-center gap-30">
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
      </ContentWrapper>

      <ContentWrapper className="w-full justify-between  bg-black h-16 flex items-center">
        <p className="text-[#9E9E9E] text-sm">
          All Rights Reservd Inkyy.com 2022
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
