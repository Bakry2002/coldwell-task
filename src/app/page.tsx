import { ContactSection } from "@/components/sections/contact-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JoinUsSection } from "@/components/sections/joinUs-section";
import { TrustedBySection } from "@/components/sections/trustedBy-section";
import { StructuredData } from "@/components/seo/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex flex-col bg-black gap-2">
        <HeroSection />

        <FeaturesSection />

        <TrustedBySection />

        <div className="relative flex px-4 items-center justify-center">
          <JoinUsSection />
        </div>

        <ContactSection />
      </div>
    </>
  );
}
