"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const CrewMember = () => {
  const segment = useSelectedLayoutSegment();
  const imageSource =
    segment != null ? data.crew[segment as keyof typeof data.crew] : "";

  return (
    <Image
      src={imageSource}
      alt="planet"
      width={1000}
      height={1000}
      className="w-[227px] h-[237px] md:h-auto md:w-auto"
    />
  );
};

export default CrewMember;
