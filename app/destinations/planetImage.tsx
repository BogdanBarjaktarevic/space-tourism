"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const PlanetImage = () => {
  const segment = useSelectedLayoutSegment();
  const imageSource =
    segment != null
      ? data.destinations[segment as keyof typeof data.destinations]
      : "";

  return (
    <Image
      src={imageSource}
      alt="planet"
      width={1000}
      height={1000}
      className="w-[170px] h-[170px] md:w-[445px] md:h-[445px]"
      priority
    />
  );
};

export default PlanetImage;
