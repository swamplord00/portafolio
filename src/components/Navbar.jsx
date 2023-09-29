"use client"
import Link from "next/link";
import React, { useState } from "react";
import {
  DribbbleIcon,
  GitHubIcon,
  LinkedInIcon,
  PinterestIcon,
  XIcon,
} from "./Icons";

export const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>


      <div className="flex items-center justify-between border-b border-gray-400 py-8 px-10" >
      <nav>

      <Link href="/">
      <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full">
          VB
      </div>
      </Link>
        
      </nav>
      <nav className="flex items-center justify-center flex-wrap gap-2 ">
          <a href="https://twitter.com/vbrionesparra" target={"_blank"}>
            <XIcon />
          </a>
          <a href="https://github.com/swamplord00" target={"_blank"}>
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-briones-82324558"
            target={"_blank"}
          >
            <LinkedInIcon />
          </a>
          <a href="https://pinterest.com" target={"_blank"}>
            <PinterestIcon />
          </a>
          <a href="https://dribbble.com" target={"_blank"}>
            <DribbbleIcon />
          </a>
        </nav>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link href="/about" onClick={() => setIsNavOpen(false)}>About</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link href="/projects" onClick={() => setIsNavOpen(false)}>Portfolio</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
          <Link href="/about">About</Link>
          </li>
          <li>
          <Link href="/projects">Portfolio</Link>
          </li>
          {/* <li>
            <a href="/contact">Contact</a>
          </li> */}
        </ul>
      </nav>
      
    </div>
      
    </>
  );
};
