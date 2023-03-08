import { getTechModel } from "@/lib/technology/getTechModel";
import { getTechnology } from "@/lib/technology/getTechnology";

interface TechModelProps {
  params: {
    model: string;
  };
}

export async function generateStaticParams() {
  const technology = await getTechnology();

  return technology.map((techModel) => ({
    model: techModel.id.toString(),
  }));
}

export async function generateMetadata({ params }: TechModelProps) {
  const { model } = params;
  const techModel = await getTechModel(model);
  const selectedTechModel = techModel[0];

  return {
    title: selectedTechModel.name,
    description: selectedTechModel.description,
  };
}

const TechModelPage = async ({ params }: TechModelProps) => {
  const { model } = params;
  const techModel = await getTechModel(model);
  const selectedTechModel = techModel[0];

  return (
    <div className="text-white flex flex-col items-center px-6 text-center mt-8 md:text-left md:items-start md:p-0 md:max-w-md md:min-h-fit md:h-80 md:m-0">
      <p className="uppercase text-sm font-extraFont tracking-widest">
        The terminology...
      </p>
      <h1 className="text-2xl uppercase font-titleFont mb-4 mt-2 md:text-[56px] md:leading-none">
        {selectedTechModel?.name}
      </h1>
      <p className="text-menuColor font-paragraphFont leading-6 md:text-lg">
        {selectedTechModel?.description}
      </p>
    </div>
  );
};

export default TechModelPage;
