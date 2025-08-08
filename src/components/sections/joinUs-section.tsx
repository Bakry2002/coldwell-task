import Image from "next/image";
import { AppButton } from "../global/app-button";
import { ContentWrapper } from "../global/content-wrapper";

export const JoinUsSection = () => {
  return (
    <section className="h-[400px] mb-10 absolute flex justify-between items-center px-20 -top-56  overflow-hidden w-full mx-auto max-w-[60rem] rounded-4xl bg-gradient-to-tl to-[#FF9898] from-[#8054FF]">
      <div className="flex flex-col gap-8">
        <p className="text-sm">Love our Our Tool?</p>
        <h3 className="text-4xl leading-[50px] font-semibold max-w-[22rem]">
          Fell Free to Join our 15 Days Free Trial
        </h3>

        <AppButton variant="primary" className="w-fit text-sm py-2.5">
          Download Template
        </AppButton>
      </div>

      <Image
        src={"/joinus_image.svg"}
        alt="Join us image"
        width={550}
        height={200}
        className="absolute top-1/2 -translate-y-1/2 right-0 "
      />
    </section>
  );
};
