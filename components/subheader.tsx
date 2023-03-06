"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { DestinationModel } from "@/types/destinations";
import { CrewModel } from "@/types/crew";
import { TechnologyModel } from "@/types/technology";

interface NavLinkType {
  id: number;
}

interface NavLinkProps {
  link: NavLinkType;
  isActive: boolean;
}

interface DestinationLinkType extends NavLinkType {
  name: string;
}

interface DestinationNavLinkProps {
  link: DestinationLinkType;
  isActive: boolean;
}

const DestinationNavLink = ({ link, isActive }: DestinationNavLinkProps) => {
  return (
    <Link
      href={`/destinations/${link.id}`}
      className={clsx(
        "text-menuColor uppercase tracking-widest font-extraFont",
        {
          "border-b-2 pb-2": isActive,
        }
      )}
    >
      {link.name}
    </Link>
  );
};

const CrewNavLink = ({ link, isActive }: NavLinkProps) => {
  return (
    <Link
      href={`/crew/${link.id}`}
      className={clsx("h-2.5 w-2.5 rounded-full", {
        "bg-white": isActive,
        "bg-grayTitleColor": !isActive,
      })}
    ></Link>
  );
};

const TechNavLink = ({ link, isActive }: NavLinkProps) => {
  return (
    <Link
      href={`/technology/${link.id}`}
      className={clsx(
        "h-10 w-10 flex justify-center items-center border border-line rounded-full md:h-20 md:w-20 bg-transparent",
        {
          "bg-white text-techColor": isActive,
          "text-white": !isActive,
        }
      )}
    >
      {link.id}
    </Link>
  );
};

const NavLinkComponent = {
  destinations: DestinationNavLink,
  crew: CrewNavLink,
  technology: TechNavLink,
};

interface SubheaderProps {
  links: DestinationModel[] | CrewModel[] | TechnologyModel[];
  linkGroup: "destinations" | "crew" | "technology";
}

const Subheader = ({ links, linkGroup }: SubheaderProps) => {
  const Component =
    NavLinkComponent[linkGroup as keyof typeof NavLinkComponent];

  const segment = useSelectedLayoutSegment();

  return (
    <>
      {links.map((link) => {
        const isActive = segment === link.id.toString();
        return <Component link={link} key={link.id} isActive={isActive} />;
      })}
    </>
  );
};

export default Subheader;
