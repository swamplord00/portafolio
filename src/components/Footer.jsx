import React from "react";
import SvgComponent from "./LogoIcon";
import { DribbbleIcon, GitHubIcon, LinkedInIcon, PinterestIcon, XIcon } from "./Icons";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 pt-20">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/swamplord00"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/vbriones#9611"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="mb-6 md:mb-0">
              <SvgComponent className={"pt-0"} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Hummingbird Design</span>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
              Hummingbird™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
