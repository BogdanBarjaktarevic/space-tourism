import PlanetImage from "./planetImage";
import Subheader from "./subheader";

const DestinationLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-destination-mobile bg-cover pt-28">
      <h2 className="text-white uppercase tracking-widest text-center">
        <span className="opacity-25 mr-5">01</span>Pick your destination
      </h2>
      <div className="flex justify-center pt-8">
        <PlanetImage />
      </div>
      <Subheader />
      {children}
    </div>
  );
};

export default DestinationLayout;
