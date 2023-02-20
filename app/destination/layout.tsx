import PlanetImage from "./planetImage";
import Subheader from "./subheader";

interface DestinationLayoutProps {
  children: React.ReactNode;
}

const DestinationLayout = ({ children }: DestinationLayoutProps) => {
  return (
    <div className="min-h-screen bg-destination-mobile bg-cover pt-28 md:bg-destination-desktop">
      <div className="md:container md:m-auto">
        <h2 className="text-white uppercase tracking-widest text-center md:mt-[76px] md:text-left">
          <span className="opacity-25 mr-5">01</span>Pick your destination
        </h2>
      </div>
      <div className="md:mt-16 md:grid md:grid-cols-2 md:container">
        <div className="flex justify-center pt-8 mb-6">
          <PlanetImage />
        </div>
        <div className="md:flex md:flex-col md:items-start">
          <Subheader />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DestinationLayout;
