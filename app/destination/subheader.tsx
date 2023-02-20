"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const Subheader = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 justify-center">
      {data.destinations.map((destination) => (
        <Link
          href={`/destination/${destination.name.toLowerCase()}`}
          className={`text-menuColor uppercase tracking-widest font-extraFont ${
            segment === destination.name.toLowerCase() ? "border-b-2 pb-2" : ""
          }`}
          key={destination.name}
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
};

export default Subheader;
