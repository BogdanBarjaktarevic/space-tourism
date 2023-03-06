import Subheader from "@/components/subheader";
import { getTechnology } from "@/lib/technology/getTechnology";
import ModelImage from "./modelImage";

interface TechnologyLayoutProps {
  children: React.ReactNode;
}

const TechnologyLayout = async ({ children }: TechnologyLayoutProps) => {
  const technology = await getTechnology();

  return (
    <div className="min-h-screen bg-tech-mobile bg-cover pt-28 md:bg-tech-desktop">
      <div className="md:container md:m-auto">
        <h2 className="text-white uppercase tracking-widest text-center md:mt-[76px] md:text-left">
          <span className="opacity-25 mr-5">01</span>Space launch 101
        </h2>
      </div>
      <div className="md:flex md:container md:m-auto">
        <div className="my-8 md:order-2 md:m-0">
          <ModelImage />
        </div>
        <div className="md:flex md:flex-1 md:items-center md:gap-20">
          <div className="flex gap-6 justify-center md:justify-start md:flex-col">
            <Subheader links={technology} linkGroup="technology" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TechnologyLayout;
