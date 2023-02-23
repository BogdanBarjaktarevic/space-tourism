"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const PlanetImage = () => {
  const segment = useSelectedLayoutSegment();
  const destination = data.destinations.find(
    (destination) => destination.name.toLowerCase() === segment
  );
  const imageSrc = destination?.images.webp || "";

  return (
    <Image
      src={imageSrc}
      alt="planet"
      width={1000}
      height={1000}
      className="w-[170px] h-[170px] md:w-[445px] md:h-[445px]"
      priority
    />
  );
};

export default PlanetImage;
