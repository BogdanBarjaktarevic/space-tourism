"use client";
import { DestinationModel } from "@/types/destinations";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface SubheaderProps {
  destinations: DestinationModel[];
}

const Subheader = ({ destinations }: SubheaderProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 justify-center">
      {destinations.map((destination) => (
        <Link
          href={`/destinations/${destination.id}`}
          className={`text-menuColor uppercase tracking-widest font-extraFont ${
            segment === destination.id.toString() ? "border-b-2 pb-2" : ""
          }`}
          key={destination.id}
        >
          {destination.name}
        </Link>
      ))}
    </div>
  );
};

export default Subheader;
