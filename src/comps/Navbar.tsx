import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "react-feather";

import Button from "./Button";
import { TextInput } from "./Inputs";

interface ILink {
  name: string;
  href: string;
}

interface INavLinkProps {
  children: React.ReactNode;
  classNames?: string;
}

const links = [
  {
    name: "Marketplace",
    href: "/",
  },
  {
    name: "Resource",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
];

const NavLink = ({ classNames, children }: INavLinkProps) => {
  return (
    <a
      className={`${classNames} cursor-pointer transition ease-in duration-200 hover:text-nft-purple hover:border-b-4 border-nft-purple`}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 w-full">
      <div className="container mx-auto flex flex-wrap p-5 items-center md:justify-center lg:justify-between">
        <div className="w-full md:w-auto flex items-center mb-5 lg:mb-0 justify-between">
          <a className="cursor-pointer transition ease-in duration-200 hover:rotate-[-10deg] font-integral text-nft-purple text-2xl font-bold mr-12 -mt-2">
            NFTERS
          </a>
          {open === true ? (
            <X
              className="md:hidden w-10 h-10 text-nft-purple"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <Menu
              className="md:hidden w-10 h-10 text-nft-purple"
              onClick={() => setOpen(!open)}
            />
          )}

          <nav className="font-dm-sans font-medium hidden md:block">
            {links.map((link: ILink) => (
              <NavLink key={link.name} classNames="mr-10">
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="items-center hidden md:flex">
          <TextInput placeholder="Search" hasIcon classNames="mr-5" />
          <Button primary classNames={`mr-5`}>
            Upload
          </Button>
          <Button secondary>Connect Wallet</Button>
        </div>

        {/* Hamburger Menu Start*/}
        <div className="w-full md:hidden">
          <nav
            className={`${
              open ? `flex flex-col` : `hidden`
            } font-dm-sans font-medium`}
          >
            {links.map((link: ILink) => (
              <NavLink key={link.name} classNames="mb-5">
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className={`${open ? `flex flex-col` : `hidden`}`}>
            <TextInput placeholder="Search" hasIcon classNames="mb-5 w-full" />
            <Button primary classNames={`mb-5 w-full`}>
              Upload
            </Button>
            <Button secondary>Connect Wallet</Button>
          </div>
        </div>
        {/* Hamburger Menu End*/}
      </div>
    </header>
  );
};

export default Navbar;
