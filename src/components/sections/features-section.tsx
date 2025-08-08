import Image from "next/image";
import { AppCard } from "../global/app-card";
import { ContentWrapper } from "../global/content-wrapper";
import { FeatureProgramsCircle } from "../feature-programs-circle";
import { AppButton } from "../global/app-button";

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
  return (
    <section className="mt-36 mb-10">
      <ContentWrapper>
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold">Feature Boxes</h2>
          <p className="text-base text-[#9E9E9E] max-w-lg">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 mt-4 lg:grid-cols-3 grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <AppCard
              key={index}
              className="mt-6 px-4 bg-[#18181C] py-8 rounded-xl flex items-center justify-center border-none"
            >
              <div className="w-20 h-20 bg-[#222228] p-2 rounded-xl flex items-center justify-center">
                <Image
                  src={feature.iconHref}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-medium">{feature.title}</h3>
              <p className="text-center text-sm text-[#9E9E9E] max-w-[17rem]">
                {feature.description}
              </p>
            </AppCard>
          ))}
        </div>

        <div className="w-full flex md:flex-row flex-col mt-14 items-center md:gap-24 gap-8">
          <FeatureProgramsCircle />
          <div className="flex flex-col gap-6 max-w-md">
            <h2 className="text-5xl leading-[55px] font-semibold">
              We&apos;re here to guide and help you at all times
            </h2>
            <p className="text-base text-[#9E9E9E] max-w-[21rem]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>

            <AppButton variant="gradient" className="w-fit">
              Download
            </AppButton>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};
