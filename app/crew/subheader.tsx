"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const Subheader = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 justify-center md:justify-start">
      {data.crew.map((crewMember) => (
        <Link
          href={`/crew/${crewMember.name.split(" ")[0].toLowerCase()}`}
          className={`h-2.5 w-2.5 bg-white rounded-full ${
            segment === crewMember.name.split(" ")[0].toLowerCase()
              ? "opacity-100"
              : "opacity-20"
          }`}
          key={crewMember.name}
        ></Link>
      ))}
    </div>
  );
};

export default Subheader;
