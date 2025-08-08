"use client";

import Image from "next/image";
import { ContentWrapper } from "../global/content-wrapper";
import { AppButton } from "../global/app-button";
import { useIsMobile } from "@/hooks/use-mobile";

export const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="md:mt-80 mt-10 mb-40">
      <ContentWrapper className="flex relative items-center md:justify-between gap-20 md:gap-32 lg:flex-row flex-col">
        <Image
          src={"/contact-image.svg"}
          alt="contact image"
          width={300}
          height={300}
          className="md:w-[400px] relative left-4 md:h-[400px] w-[300px] h-[300px]"
        />

        {/* Form */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl md:text-left text-center font-semibold">
              Get In Touch
            </h3>
            <p className="text-[#9E9E9E] md:text-left text-center max-w-md">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
          </div>

          <form action="" className="flex flex-col gap-4 mt-6">
            <input
              type="email"
              className="border-none bg-[#18181C] h-10 rounded-md px-4"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="border-none bg-[#18181C] h-10 rounded-md px-4"
              placeholder="Name"
            />

            <textarea
              className="border-none bg-[#18181C] h-32 rounded-md px-4 py-2"
              placeholder="Message"
            />

            <AppButton variant="gradient" className="text-sm md:w-fit py-2.5">
              Get in Touch
            </AppButton>
          </form>
        </div>

        {!isMobile && (
          <>
            <div
              className="absolute top-4 left-[15%] transform -translate-x-1/2 w-16 h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at top left, #494955 0%, #141414 70%)",
                filter: "blur(5px)",
                // opacity: 0.8,
              }}
            />

            <div
              className="absolute top-96 right-[58%] w-24 h-24 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at top left, #494955 0%, #141414 70%)",
                filter: "blur(5px)",
                // opacity: 0.6,
              }}
            />
          </>
        )}
      </ContentWrapper>
    </section>
  );
};
