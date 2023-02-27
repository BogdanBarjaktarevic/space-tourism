"use client";
import { TechnologyModel } from "@/types/technology";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface SubheaderProps {
  technology: TechnologyModel[];
}

const Subheader = ({ technology }: SubheaderProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 justify-center md:justify-start md:flex-col">
      {technology.map((model, i) => (
        <Link
          href={`/technology/${model.id}`}
          className={`h-10 w-10 flex justify-center items-center border border-line rounded-full md:h-20 md:w-20 ${
            segment === model.id.toString()
              ? "bg-white"
              : "bg-transparent text-white"
          }`}
          key={model.id}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
};

export default Subheader;
