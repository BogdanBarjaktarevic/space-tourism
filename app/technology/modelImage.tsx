"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const ModelImage = () => {
  const segment = useSelectedLayoutSegment();

  const model = data.technology.find(
    (model) => model.name.split(" ")[0].toLowerCase() === segment
  );

  const imageSrcLandscape = model?.images.landscape || "";
  const imageSrcPortrait = model?.images.portrait || "";

  return (
    <>
      <Image
        src={imageSrcLandscape}
        alt="planet"
        width={1000}
        height={1000}
        className="h-[170px] w-full md:hidden"
      />
      <Image
        src={imageSrcPortrait}
        alt="planet"
        width={1000}
        height={1000}
        className="hidden h-[170px] w-full md:block md:h-[527px]"
      />
    </>
  );
};

export default ModelImage;
