import { ContactSection } from "@/components/sections/contact-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JoinUsSection } from "@/components/sections/joinUs-section";
import { TrustedBySection } from "@/components/sections/trustedBy-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <HeroSection />

      <FeaturesSection />

      <TrustedBySection />

      <div className="relative flex items-center justify-center">
        <JoinUsSection />
      </div>

      <ContactSection />

      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
}
