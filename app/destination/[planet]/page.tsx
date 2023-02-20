import data from "../../../public/data.json";

export async function generateStaticParams() {
  const destinations = data.destinations;

  return destinations.map((destination) => ({
    planet: destination.name.toLowerCase(),
  }));
}

interface PlanetPageProps {
  params: {
    planet: string;
  };
}

const PlanetPage = ({ params }: PlanetPageProps) => {
  const { planet } = params;

  const destination = data.destinations.find(
    (destination) => destination.name.toLowerCase() === planet
  );

  return (
    <div className="text-white flex flex-col divide-y divide-line gap-16 text-center px-6 md:px-0 md:text-left">
      <div>
        <h1 className="text-[56px] uppercase font-titleFont md:text-[100px]">
          {destination?.name}
        </h1>
        <p className="text-sm text-menuColor font-paragraphFont tracking-widest md:text-lg">
          {destination?.description}
        </p>
      </div>
      <div className="pt-8 flex flex-col gap-8 md:flex-row md:gap-20">
        <div>
          <h2 className="text-menuColor text-sm uppercase tracking-widest font-extraFont">
            Avg. distance
          </h2>
          <span className="text-[28px] font-titleFont">
            {destination?.distance}
          </span>
        </div>
        <div>
          <h2 className="text-menuColor text-sm uppercase tracking-widest font-extraFont">
            Est. travel time
          </h2>
          <span className="text-[28px] font-titleFont">
            {destination?.travel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanetPage;
