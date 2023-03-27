import Image from "next/image";
import { TextInput } from "./Inputs";

interface INavLinkProps {
  href: string;
  classNames?: string;
  children: React.ReactNode;
}

interface ILink {
  name: string;
  href: string;
}

interface ISocialLink {
  name: string;
  href: string;
  iconURL: string;
}

const marketPlaceLinks: ILink[] = [
  {
    name: "All NFTs",
    href: "/",
  },
  {
    name: "New",
    href: "/",
  },
  {
    name: "Art",
    href: "/",
  },
  {
    name: "Sports",
    href: "/",
  },
  {
    name: "Utility",
    href: "/",
  },
  {
    name: "Music",
    href: "/",
  },
  {
    name: "Domain Name",
    href: "/",
  },
];

const myAccountLinks: ILink[] = [
  {
    name: "Profile",
    href: "/",
  },
  {
    name: "Favorite",
    href: "/",
  },
  {
    name: "My Collections",
    href: "/",
  },
  {
    name: "Settings",
    href: "/",
  },
];

const socialLinks: ISocialLink[] = [
  {
    name: "Twitter",
    href: "/",
    iconURL: "/images/twitter.svg",
  },
  {
    name: "Facebook",
    href: "/",
    iconURL: "/images/facebook.svg",
  },
  {
    name: "LinkedIn",
    href: "/",
    iconURL: "/images/linkedin.svg",
  },
];

const NavLink = ({ children, classNames, href }: INavLinkProps) => {
  return (
    <a href={href} className={classNames}>
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="font-dm-sans container px-5 pt-24 pb-8 mx-auto">
        <div className="flex flex-wrap order-first">
          <div className="md:w-1/3 w-full flex-shrink-0">
            <a className="flex font-integral font-bold items-center ">
              <span className="text-xl">NFTERS</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 font-averta">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <span className="inline-flex sm:ml-auto mt-4 justify-center sm:justify-start">
              {socialLinks.map((link) => (
                <a href={link.href} key={link.name} className="mr-5">
                  <Image
                    priority
                    src={link.iconURL}
                    height={42}
                    width={42}
                    alt={link.name}
                  />
                </a>
              ))}
            </span>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3 w-full flex md:justify-evenly order-last md:order-none mx-4 lg:mx-0">
            <div className="flex flex-col md:items-center mr-4 md:mr-0">
              <h2 className="font-bold text-xl mb-6">Market Place</h2>
              <nav className="list-none mb-10">
                {marketPlaceLinks.map((link) => (
                  <li key={link.name} className="mb-2">
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </li>
                ))}
              </nav>
            </div>
            <div className="flex flex-col md:items-center">
              <h2 className="font-bold text-xl mb-6">My Account</h2>
              <nav className="list-none mb-10">
                {myAccountLinks.map((link) => (
                  <li key={link.name} className="mb-2">
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </li>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-4 md:mt-0 lg:w-1/3 w-full">
            <h2 className="font-bold text-xl mb-6">Stay In The Loop</h2>
            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="md:-ml-1 block w-full">
              <TextInput
                placeholder="Enter Your Email Address"
                hasButton
                buttonText="Subscribe Now"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Footer */}
      <div className="border-t-2 border-gray-100">
        <div className="container py-4 mx-auto flex justify-center">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Avi Yansah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
