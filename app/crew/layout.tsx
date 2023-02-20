import CrewMember from "./crewMember";
import Subheader from "./subheader";

interface CrewLayoutProps {
  children: React.ReactNode;
}

const CrewLayout = ({ children }: CrewLayoutProps) => {
  return (
    <div className="min-h-screen bg-crew-mobile bg-cover pt-28 md:bg-crew-desktop md:flex md:flex-col">
      <div className="md:container md:m-auto">
        <h2 className="text-white uppercase tracking-widest text-center md:mt-[76px] md:text-left">
          <span className="opacity-25 mr-5">02</span>
          Meet your crew
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 md:container md:m-auto md:flex-1">
        <div className="flex justify-center pt-8 mb-6 border-b-line border-b mx-6 md:order-2 md:border-0 md:m-0">
          <CrewMember />
        </div>
        <div className="md:grid md:place-content-center md:justify-start md:gap-y-28">
          <div className="md:order-2">
            <Subheader />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CrewLayout;
