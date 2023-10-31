"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#ABOUT-SECTION",
  },
  {
    name: "Features",
    href: "#FEATURES-SECTION",
  },
  {
    name: "Service",
    href: "#SERVICE-SECTION",
  },
  {
    name: "Portfolio",
    href: "#PORTFOLIO-SECTION",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export function NavbarNewUILook() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky -top-1 z-50">
      <div className="relative w-full bg-black text-white py-4">
        <div className="container flex  items-center justify-around px-4 py-2 sm:px-6 lg:px-8">
          {/* Agency Brand Logo 👉*/}
          <div className="">
            <Image
              src="/assets/images/brand-logo.png"
              height={150}
              width={150}
              alt="brand-logo"
            />
          </div>
          {/* Agency Brand Logo  👈*/}
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white hover:text-brand"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    {/* Agency Brand Logo 👉*/}
                    <div className="">
                      <Image
                        src="/assets/images/brand-logo.png"
                        height={150}
                        width={150}
                        alt="brand-logo"
                      />
                    </div>
                    {/* Agency Brand Logo  👈*/}
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
