import { useState } from "react";
import { Menu, X } from "react-feather";

import Button from "./Shared/Button";
import { TextInput } from "./Shared/Inputs";

interface ILink {
  name: string;
  href: string;
}

interface INavLinkProps {
  href: string;
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

const NavLink = ({ href, classNames, children }: INavLinkProps) => {
  return (
    <a
      href={href}
      className={`${classNames} custom__nav-link relative cursor-pointer transition ease-in duration-200 hover:text-nft-purple`}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <header className="border-b border-gray-100 w-full">
      <div className="container mx-auto flex flex-wrap p-5 items-center md:justify-center xl:justify-between">
        {/* Desktop Menu Start */}
        <div className="w-full md:w-auto flex items-center mb-5 xl:mb-0 justify-between">
          <a
            href="#"
            className="cursor-pointer transition ease-in duration-200 hover:rotate-[-10deg] font-integral text-nft-purple text-2xl font-bold mr-12 -mt-2"
          >
            NFTERS
          </a>

          {/* Showing the hamburger icon based on state */}
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
              <NavLink href="#" key={link.name} classNames="mr-10">
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="items-center hidden md:flex -ml-4 xl:ml-0">
          <TextInput placeholder="Search" hasIcon classNames="mr-5" />
          <Button primary classNames={`mr-5`}>
            Upload
          </Button>
          <Button secondary>Connect Wallet</Button>
        </div>

        {/* Hamburger Menu Start*/}
        <div className="w-full md:hidden overflow-clip">
          <nav
            className={`${
              open ? `flex flex-col` : `mt-[-15rem]`
            } transition-all ease-in duration-200 font-dm-sans font-medium`}
          >
            {links.map((link: ILink) => (
              <NavLink href="#" key={link.name} classNames="mb-5 block">
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div
            className={`${
              open ? `flex flex-col` : `mt-[-15rem]`
            } transition-all ease-in duration-200 `}
          >
            <TextInput placeholder="Search" hasIcon classNames="mb-5 w-full" />
            <Button primary classNames={`mb-5 w-full`}>
              Upload
            </Button>
            <Button secondary classNames="block w-full">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
