"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import data from "../../public/data.json";

const Subheader = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      {data.destinations.map((destination) => (
        <Link
          href={`/destination/${destination.name.toLowerCase()}`}
          className="text-white"
          key={destination.name}
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
};

export default Subheader;
