"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import Logo from "../public/assets/shared/logo.svg";
import HamburgerMenu from "../public/assets/shared/icon-hamburger.svg";
import CloseIcon from "../public/assets/shared/icon-close.svg";

const links = [
  { name: "Home", url: "/" },
  {
    name: "Destination",
    url: "/destinations/1",
  },
  { name: "Crew", url: "/crew/1" },
  {
    name: "Technology",
    url: "/technology/1",
  },
];

interface CategoryLinkProps {
  handleIsOpen: () => void;
  segment: string | null;
  url: string;
  name: string;
  numberOfLink: number;
}

const CategoryLink = ({
  handleIsOpen,
  segment,
  url,
  name,
  numberOfLink,
}: CategoryLinkProps) => {
  let activeUrl = url;
  if (activeUrl !== "/") {
    activeUrl = activeUrl?.split("/")[1];
  }

  const isActiveSegment = activeUrl === segment;

  return (
    <div className="font-extraFont text-xl flex justify-between md:flex-col">
      <div className="">
        <span className="font-bold">{`0${numberOfLink}`}</span>
        <Link
          href={url}
          className="ml-2.5 uppercase tracking-widest"
          onClick={handleIsOpen}
        >
          {name}
        </Link>
      </div>
      {isActiveSegment && (
        <div className="w-1 bg-white h-auto md:h-0.5 md:w-full"></div>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const segment = useSelectedLayoutSegment() || "/";

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
        className={clsx(
          "text-white fixed right-0 top-0 bottom-0 backdrop-blur-2xl w-4/6 transition-transform md:translate-x-0 md:static md:bg-navColor md:backdrop-blur-2xl md:py-10",
          {
            "translate-x-0": isOpen,
            "translate-x-full md:static": !isOpen,
          }
        )}
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
          {links.map((link, i) => (
            <CategoryLink
              key={link.url}
              handleIsOpen={handleIsOpen}
              segment={segment}
              name={link.name}
              url={link.url}
              numberOfLink={i + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
