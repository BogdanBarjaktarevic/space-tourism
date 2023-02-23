"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const CrewMember = () => {
  const segment = useSelectedLayoutSegment();

  const crewMember = data.crew.find(
    (crewMember) => crewMember.name.split(" ")[0].toLowerCase() === segment
  );

  const imageSrc = crewMember?.images.webp || "";

  return (
    <Image
      src={imageSrc}
      alt="planet"
      width={1000}
      height={1000}
      className="w-[227px] h-[237px] md:w-[268px] md:h-full"
      priority
    />
  );
};

export default CrewMember;
