"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/shared/logo.svg";
import HamburgerMenu from "../public/assets/shared/icon-hamburger.svg";
import CloseIcon from "../public/assets/shared/icon-close.svg";
import { useState } from "react";

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Destination", url: "/destination" },
  { id: 3, name: "Crew", url: "/crew" },
  { id: 4, name: "Technology", url: "/technology" },
];

interface CategoryLinkProps {
  handleIsOpen: () => void;
  pathname: string | null;
  url: string;
  name: string;
}

const CategoryLink = ({
  handleIsOpen,
  pathname,
  url,
  name,
}: CategoryLinkProps) => {
  return (
    <div className="font-extraFont text-xl flex justify-between">
      <div>
        <span className="font-bold">00</span>
        <Link
          href={url}
          className="ml-2.5 uppercase tracking-widest"
          onClick={handleIsOpen}
        >
          {name}
        </Link>
      </div>
      {pathname === url && <div className="w-1 bg-white h-auto"></div>}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed flex justify-between items-center p-6 w-full">
      <Link href="/">
        <Image src={Logo} alt="logo" height={40} width={40} />
      </Link>
      {!isOpen && (
        <Image
          className="h-full"
          src={HamburgerMenu}
          alt="hamburger-menu"
          onClick={handleIsOpen}
        />
      )}

      <div
        className={`text-white fixed right-0 top-0 bottom-0 backdrop-blur-2xl w-4/6 transition-transform	 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="mt-8 flex justify-end mr-6">
          <Image
            src={CloseIcon}
            alt="close icon"
            width={19}
            height={19}
            onClick={handleIsOpen}
          />
        </div>
        <div className="ml-6 mt-16 flex flex-col gap-8">
          {links.map((link) => (
            <CategoryLink
              key={link.id}
              handleIsOpen={handleIsOpen}
              pathname={pathname}
              name={link.name}
              url={link.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
