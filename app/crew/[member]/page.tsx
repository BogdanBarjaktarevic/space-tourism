import { getCrew } from "@/lib/crew/getCrew";
import { getCrewMember } from "@/lib/crew/getCrewMember";

export async function generateStaticParams() {
  const crew = await getCrew();

  return crew.map((crewMember) => ({
    member: crewMember.id.toString(),
  }));
}

interface CrewMemberPageProps {
  params: {
    member: string;
  };
}

const CrewMemberPage = async ({ params }: CrewMemberPageProps) => {
  const { member } = params;
  const crewMember = await getCrewMember(member);
  const selectedCrewMember = crewMember[0];

  return (
    <div className="text-white flex flex-col items-center px-6 text-center mt-8 md:text-left md:items-start md:p-0 md:max-w-md md:min-h-fit md:h-80">
      <h2 className="text-grayTitleColor uppercase font-titleFont tracking-wide md:text-[32px]">
        {selectedCrewMember?.role}
      </h2>
      <h1 className="text-2xl uppercase font-titleFont mb-4 mt-2 md:text-[56px] md:leading-none">
        {selectedCrewMember?.name}
      </h1>
      <p className="text-menuColor font-paragraphFont leading-6 md:text-lg">
        {selectedCrewMember?.bio}
      </p>
    </div>
  );
};

export default CrewMemberPage;
