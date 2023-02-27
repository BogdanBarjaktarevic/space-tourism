"use client";

import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const ModelImage = () => {
  const segment = useSelectedLayoutSegment();

  const imageSrcLandscape =
    segment != null
      ? data.technology[segment as keyof typeof data.technology].landscape
      : "";

  const imageSrcPortrait =
    segment != null
      ? data.technology[segment as keyof typeof data.technology].portrait
      : "";

  return (
    <>
      <Image
        src={imageSrcLandscape}
        alt="planet"
        width={1000}
        height={1000}
        className="h-[170px] w-full md:hidden"
        priority
      />
      <Image
        src={imageSrcPortrait}
        alt="planet"
        width={1000}
        height={1000}
        className="hidden h-[170px] w-full md:block md:h-[527px]"
        priority
      />
    </>
  );
};

export default ModelImage;
