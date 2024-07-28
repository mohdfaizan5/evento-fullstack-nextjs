import Link from "next/link";
import React from "react";
import LogoLink from "./logoLink";

const Footer = () => {
  return (
    <footer className="flex justify-between px-3 sm:px-9 mt-auto h-12 items-center border-t border-t-white/10">
      <small>
        &copy; 2025 
        <span className="font-semibold"> Event0</span> - All Rights Reserved
      </small>
      <nav className="flex gap-4 items-center text-sm opacity-50 font-light ">
        <Link href={"/terms-conditions"}>Terms and Conditions</Link>
        <Link href={"/privacy-policy"}>Privacy Policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
