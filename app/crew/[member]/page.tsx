import data from "../../../public/data.json";

export async function generateStaticParams() {
  const crew = data.crew;

  return crew.map((crewMember) => ({
    member: crewMember.name.split(" ")[0].toLowerCase(),
  }));
}

interface CrewMemberPageProps {
  params: {
    member: string;
  };
}

const CrewMemberPage = ({ params }: CrewMemberPageProps) => {
  const { member } = params;

  const crewMember = data.crew.find(
    (crewMember) => crewMember.name.split(" ")[0].toLowerCase() === member
  );

  return (
    <div className="text-white flex flex-col items-center px-6 text-center mt-8 md:text-left md:items-start md:p-0 md:max-w-md">
      <h2 className="opacity-50 uppercase font-titleFont tracking-wide md:text-[32px]">
        {crewMember?.role}
      </h2>
      <h1 className="text-2xl uppercase font-titleFont mb-4 mt-2 md:text-[56px] md:leading-none">
        {crewMember?.name}
      </h1>
      <p className="text-menuColor font-paragraphFont leading-6 md:text-lg">
        {crewMember?.bio}
      </p>
    </div>
  );
};

export default CrewMemberPage;
