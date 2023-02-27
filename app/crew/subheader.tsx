"use client";
import { CrewModel } from "@/types/crew";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface SubheaderProps {
  crew: CrewModel[];
}

const Subheader = ({ crew }: SubheaderProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 justify-center md:justify-start">
      {crew.map((crewMember) => (
        <Link
          href={`/crew/${crewMember.id}`}
          className={`h-2.5 w-2.5 rounded-full ${
            segment === crewMember.id.toString()
              ? "bg-white"
              : "bg-grayTitleColor"
          }`}
          key={crewMember.id}
        ></Link>
      ))}
    </div>
  );
};

export default Subheader;
