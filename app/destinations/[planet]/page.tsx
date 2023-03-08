import { getDestination } from "@/lib/destinations/getDestination";
import { getDestinations } from "@/lib/destinations/getDestinations";
import { DestinationModel } from "@/types/destinations";

interface PlanetPageProps {
  params: {
    planet: string;
  };
}

export async function generateStaticParams() {
  const destinations: DestinationModel[] = await getDestinations();

  return destinations.map((destination) => ({
    planet: destination.id.toString(),
  }));
}

export async function generateMetadata({ params }: PlanetPageProps) {
  const { planet } = params;
  const destination = await getDestination(planet);
  const selectedDestination = destination[0];

  return {
    title: selectedDestination.name,
    description: selectedDestination.description,
  };
}

const PlanetPage = async ({ params }: PlanetPageProps) => {
  const { planet } = params;
  const destination = await getDestination(planet);
  const selectedDestination = destination[0];

  return (
    <div className="mt-5">
      <div className="text-white flex flex-col divide-y divide-line gap-16 text-center px-6 md:px-0 md:text-left">
        <div>
          <h1 className="text-[56px] uppercase font-titleFont md:text-[100px]">
            {selectedDestination?.name}
          </h1>
          <p className="text-sm text-menuColor font-paragraphFont tracking-widest md:text-lg">
            {selectedDestination?.description}
          </p>
        </div>
        <div className="pt-8 flex flex-col gap-8 md:flex-row md:gap-20">
          <div>
            <h2 className="text-menuColor text-sm uppercase tracking-widest font-extraFont">
              Avg. distance
            </h2>
            <span className="text-[28px] font-titleFont">
              {selectedDestination?.distance}
            </span>
          </div>
          <div>
            <h2 className="text-menuColor text-sm uppercase tracking-widest font-extraFont">
              Est. travel time
            </h2>
            <span className="text-[28px] font-titleFont">
              {selectedDestination?.travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetPage;
