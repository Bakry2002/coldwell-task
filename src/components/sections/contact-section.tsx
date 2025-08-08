import Image from "next/image";
import { ContentWrapper } from "../global/content-wrapper";
import { AppButton } from "../global/app-button";

export const ContactSection = () => {
  return (
    <section className="mt-60 mb-40">
      <ContentWrapper className="flex relative items-center justify-center gap-24 md:flex-row flex-col">
        <Image
          src={"/contact-image.svg"}
          alt="contact image"
          width={400}
          height={400}
        />

        {/* Form */}
        <div>
          <div>
            <h3 className="text-4xl font-semibold">Get In Touch</h3>
            <p className="text-[#9E9E9E] max-w-md">
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

            <AppButton variant="gradient" className="text-sm w-fit py-2.5">
              Get in Touch
            </AppButton>
          </form>
        </div>

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
          className="absolute top-96 right-[52%] w-24 h-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle at top left, #494955 0%, #141414 70%)",
            filter: "blur(5px)",
            // opacity: 0.6,
          }}
        />
      </ContentWrapper>
    </section>
  );
};
