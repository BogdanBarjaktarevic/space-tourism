import data from "../../../public/data.json";

export async function generateStaticParams() {
  const technology = data.technology;

  return technology.map((techModel) => ({
    model: techModel.name.split(" ")[0].toLowerCase(),
  }));
}

interface TechModelProps {
  params: {
    model: string;
  };
}

const TechModelPage = ({ params }: TechModelProps) => {
  const { model } = params;

  const techModel = data.technology.find(
    (techModel) => techModel.name.split(" ")[0].toLowerCase() === model
  );

  return (
    <div className="text-white flex flex-col items-center px-6 text-center mt-8 md:text-left md:items-start md:p-0 md:max-w-md md:min-h-fit md:h-80 md:m-0">
      <p className="uppercase text-sm font-extraFont tracking-widest">
        The terminology...
      </p>
      <h1 className="text-2xl uppercase font-titleFont mb-4 mt-2 md:text-[56px] md:leading-none">
        {techModel?.name}
      </h1>
      <p className="text-menuColor font-paragraphFont leading-6 md:text-lg">
        {techModel?.description}
      </p>
    </div>
  );
};

export default TechModelPage;
