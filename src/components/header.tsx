"use client";
import Link from "next/link";
import React from "react";
import LogoLink from "./logoLink";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];
const Header = () => {
  const activeRoute = usePathname();
  return (
    <header className="flex justify-between px-3 sm:px-9 h-14 items-center border-b border-b-white/10">
      <LogoLink />
      <nav className=" h-full">
        <ul className="flex h-full gap-4 items-center">
          {routes.map((route, i) => (
            <li className="relative bottom-0 h-full flex items-center" key={i}>
              <Link
                key={route.path}
                href={route.path}
                className={clsx("hover:text-white/90 transition  ", {
                  "text-white": activeRoute === route.path,
                  "text-white/50": activeRoute !== route.path,
                })}
              >
                {route.name}
              </Link>
              {activeRoute === route.path && (
                <motion.span
                  layoutId="header-active-link"
                  className="w-full absolute h-1 bottom-0 left-0 bg-accent"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
