"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/shared/logo.svg";
import HamburgerMenu from "../public/assets/shared/icon-hamburger.svg";
import CloseIcon from "../public/assets/shared/icon-close.svg";
import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
  { id: "00", name: "Home", url: "/" },
  {
    id: "01",
    name: "Destination",
    url: "/destination/moon",
    activeSegment: "destination",
  },
  { id: "02", name: "Crew", url: "/crew/douglas", activeSegment: "crew" },
  {
    id: "03",
    name: "Technology",
    url: "/technology",
    activeSegment: "technology",
  },
];

interface CategoryLinkProps {
  handleIsOpen: () => void;
  pathname: string | null;
  segment: string | null;
  activeSegment: string | undefined;
  url: string;
  name: string;
  id: string;
}

const CategoryLink = ({
  handleIsOpen,
  pathname,
  segment,
  activeSegment,
  url,
  name,
  id,
}: CategoryLinkProps) => {
  const isActiveLink = segment === activeSegment || pathname === url;
  return (
    <div className="font-extraFont text-xl flex justify-between md:flex-col">
      <div className="">
        <span className="font-bold">{id}</span>
        <Link
          href={url}
          className="ml-2.5 uppercase tracking-widest"
          onClick={handleIsOpen}
        >
          {name}
        </Link>
      </div>
      {isActiveLink && (
        <div className="w-1 bg-white h-auto md:h-0.5 md:w-full"></div>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed flex justify-between items-center p-6 w-full md:pr-0">
      <Link href="/">
        <Image src={Logo} alt="logo" height={40} width={40} />
      </Link>
      {!isOpen && (
        <Image
          className="h-full md:hidden"
          src={HamburgerMenu}
          alt="hamburger-menu"
          onClick={handleIsOpen}
        />
      )}

      <div
        className={`text-white fixed right-0 top-0 bottom-0 backdrop-blur-2xl w-4/6 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full md:static"
        } md:translate-x-0 md:static md:bg-navColor md:backdrop-blur-2xl md:py-10`}
      >
        <div className="mt-8 flex justify-end mr-6 md:hidden">
          <Image
            src={CloseIcon}
            alt="close icon"
            width={19}
            height={19}
            onClick={handleIsOpen}
          />
        </div>
        <div className="ml-6 mt-16 flex flex-col gap-8 md:flex-row md:mt-0 md:justify-center">
          {links.map((link) => (
            <CategoryLink
              key={link.id}
              handleIsOpen={handleIsOpen}
              pathname={pathname}
              segment={segment}
              activeSegment={link.activeSegment}
              name={link.name}
              url={link.url}
              id={link.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
