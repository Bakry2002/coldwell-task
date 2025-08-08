import Image from "next/image";
import { ContentWrapper } from "../global/content-wrapper";

const companyLogos = [
  "/assets/companyLogos/company_1.svg",
  "/assets/companyLogos/company_2.svg",
  "/assets/companyLogos/company_3.svg",
  "/assets/companyLogos/company_4.svg",
  "/assets/companyLogos/company_5.svg",
  "/assets/companyLogos/company_6.svg",
];
export const TrustedBySection = () => {
  return (
    <section className="mt-14 bg-[#18181C] h-[590px]">
      <ContentWrapper className="px-6 py-20 gap-14 flex flex-col items-center h-full">
        <h2 className="text-4xl font-semibold max-w-md text-center leading-[50px]">
          Companies we Worked With in Since 2015
        </h2>

        <div className="flex flex-wrap gap-8">
          {companyLogos.map((logo) => (
            <CompanyCard key={logo} logo={logo} />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

const CompanyCard = ({ logo }: { logo: string }) => {
  return (
    <div className="flex flex-col w-32 bg-black px-2 py-3 rounded-md items-center justify-center">
      <Image src={logo} alt="company logo" width={100} height={100} />
    </div>
  );
};
