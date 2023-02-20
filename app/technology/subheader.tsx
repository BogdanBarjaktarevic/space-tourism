"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const Subheader = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 justify-center md:justify-start md:flex-col">
      {data.technology.map((model, i) => (
        <Link
          href={`/technology/${model.name.split(" ")[0].toLowerCase()}`}
          className={`h-10 w-10 flex justify-center items-center border border-line rounded-full md:h-20 md:w-20 ${
            segment === model.name.split(" ")[0].toLowerCase()
              ? "bg-white"
              : "bg-transparent text-white"
          }`}
          key={model.name}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
};

export default Subheader;
